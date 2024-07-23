import { db } from "@/js/DB/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Test() {
  console.log(db);
  const fetchApplications = async () => {
    const snapshot = await getDocs(collection(db, "applicationForms1"));
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  fetchApplications();
  // console.log(getDB);

  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
