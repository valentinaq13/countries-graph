import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";

const BackToTopButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-10 right-18 bg-black p-2 rounded-full text-white shadow-lg hover:bg-gray-700 transition"
  >
    <ArrowUpCircleIcon className="size-8" />
  </button>
);

export default BackToTopButton;
