"use client";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createSession } from "js/services/authService";
import { app } from "js/services/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuth(requireAdmin = false) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!mounted) return;

        if (user) {
          // Force token refresh to ensure we have the latest claims
          const idToken = await user.getIdToken(true);
          const { error: sessionError } = await createSession(idToken);

          if (!mounted) return;

          if (sessionError) {
            console.error("Session creation failed:", sessionError);
            setUser(null);
            setIsAdmin(false);
            if (requireAdmin) {
              router.push("/login");
            }
            return;
          }

          // Get admin status from token
          const token = await user.getIdTokenResult();

          if (!mounted) return;

          const hasAdminClaim = token.claims.admin === true;
          setUser(user);
          setIsAdmin(hasAdminClaim);

          if (requireAdmin && !hasAdminClaim) {
            router.push("/login");
          }
        } else {
          if (!mounted) return;

          setUser(null);
          setIsAdmin(false);
          if (requireAdmin) {
            router.push("/login");
          }
        }
      } catch (error) {
        console.error("Error in auth state change:", error);
        if (!mounted) return;

        setUser(null);
        setIsAdmin(false);
        if (requireAdmin) {
          router.push("/login");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [requireAdmin, router, auth]);

  const refreshToken = async () => {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      try {
        if (!user) return;

        const idToken = await user.getIdToken(true);
        const { error: sessionError } = await createSession(idToken);

        if (sessionError) {
          console.error(
            `Session refresh failed (attempt ${retryCount + 1}):`,
            sessionError,
          );
          retryCount++;
          if (retryCount < maxRetries) {
            // Wait before retrying (exponential backoff)
            await new Promise((resolve) =>
              setTimeout(resolve, Math.pow(2, retryCount) * 1000),
            );
            continue;
          }
          return;
        }

        const token = await user.getIdTokenResult();
        setIsAdmin(token.claims.admin === true);
        break;
      } catch (error) {
        console.error(
          `Error refreshing token (attempt ${retryCount + 1}):`,
          error,
        );
        retryCount++;
        if (retryCount < maxRetries) {
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) =>
            setTimeout(resolve, Math.pow(2, retryCount) * 1000),
          );
          continue;
        }
        break;
      }
    }
  };

  return {
    user,
    loading,
    isAdmin,
    refreshToken,
  };
}
