
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <PuffLoader color="#4F46E5" size={80} />
    </div>
  );
};

export default Loader;
