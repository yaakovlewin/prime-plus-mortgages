import { firebaseConfig } from "@/js/config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const SiteKey = process.env.NEXT_PUBLIC_reCAPTCHA_site_key;
console.log("SiteKey", SiteKey);
// Check if window is undefined (i.e., if running on the server)
if (typeof window !== "undefined") {
  // Only import and initialize App Check if we are in the browser

  import("firebase/app-check")
    .then(({ initializeAppCheck, ReCaptchaV3Provider }) => {
      if (!SiteKey) {
        console.error(
          "reCAPTCHA site key is not defined. Please check your environment variables.",
        );
      }

      // Initialize App Check with reCAPTCHA V3
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(SiteKey),
        isTokenAutoRefreshEnabled: true,
      });
    })
    .catch((error) => {
      console.error("Error loading Firebase App Check:", error);
    });
}

// Initialize Firestore Database
const db = getFirestore(app);

export { app, db };
