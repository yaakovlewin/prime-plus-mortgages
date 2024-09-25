import { FaExclamationCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const StatusHandler = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ClipLoader color="#36D7B7" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-red-500">
        <FaExclamationCircle size={50} />
        <p className="mt-4 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  return null; // In case neither loading nor error is true.
};

export default StatusHandler;
