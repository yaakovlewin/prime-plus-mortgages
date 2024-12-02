import { db } from "@/js/services/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

export const useFetchContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = useCallback(async () => {
    try {
      const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const contactsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate?.() || null,
      }));
      setContacts(contactsData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const mutate = () => {
    setLoading(true);
    fetchContacts();
  };

  return { contacts, loading, error, mutate };
};
