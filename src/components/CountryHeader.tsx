import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { Country } from "../types";

const CountryDetailHeader: React.FC<{
  country: Country;
  onBack: () => void;
}> = ({ country, onBack }) => (
  <div className="mb-6 flex items-center justify-between">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200"
    >
      <ArrowLeftCircleIcon className="size-10" />
      <span className="text-lg font-semibold">Go back</span>
    </button>
    <div className="flex items-center gap-x-4">
      <h1 className="text-3xl font-bold">{country?.name}</h1>
      <div className="text-2xl font-bold mt-2 flex size-11 items-center justify-center rounded-lg bg-indigo-500">
        {country.emoji}
      </div>
    </div>
  </div>
);

export default CountryDetailHeader;
