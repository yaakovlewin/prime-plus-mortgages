"use client";
import Heading2 from "@/components/common/Heading2";
import { getCollection } from "@/js/DB/db";
import { useState } from "react";

const AdminPage = () => {
  //   const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  //   const auth = getAuth(app);

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       setUser(user);
  //       if (user) {
  //         fetchApplications();
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, [auth]);

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   const handleLogout = async () => {
  //     try {
  //       await signOut(auth);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  const fetchApplications = async () => {
    try {
      const applications = await getCollection("applicationForms");
      setApplications(applications);
    } catch (error) {
      setError("Error fetching applications: " + error.message);
    }
  };

  fetchApplications();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading2>Admin Dashboard</Heading2>
      {/* {!user ? (
        <form onSubmit={handleLogin} className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-2 w-full rounded border p-2"
          />
          <button
            type="submit"
            className="rounded bg-cyan-500 px-4 py-2 text-white"
          >
            Login
          </button>
        </form>
      ) : (
        <div>
          <p className="mb-4">Welcome, {user.email}</p>
          <button
            onClick={handleLogout}
            className="mb-4 rounded bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </button> */}
      <h3 className="mb-2 text-xl font-bold">Application Forms</h3>
      {applications.map((app, index) => (
        <div key={index} className="mb-4 rounded border p-4">
          <h4 className="mb-2 font-bold">
            {app.name || "Unnamed Application"}
          </h4>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(app, null, 2)}
          </pre>
        </div>
      ))}
      {/* </div>
      )}
      {error && <p className="text-red-500">{error}</p>} */}
    </div>
  );
};

export default AdminPage;
