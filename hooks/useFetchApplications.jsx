import { db } from "@/js/services/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFetchApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApplications() {
      try {
        const applicationCollection = collection(db, "applicationForms1");
        const snapShot = await getDocs(applicationCollection);
        const applicationsList = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(applicationsList);
      } catch (error) {
        setError("Error fetching applications: " + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  return { applications, loading, error };
};

const useFetchApplication = (slug) => {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApplication() {
      try {
        const applicationDocRef = doc(db, "applicationForms1", slug);
        const docSnap = await getDoc(applicationDocRef);

        if (docSnap.exists()) {
          setApplication({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError(`No application with ID ${slug} found`);
        }
      } catch (error) {
        setError("Error fetching application: " + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchApplication();
  }, [slug]);

  return { application, loading, error };
};

export { useFetchApplication, useFetchApplications };
