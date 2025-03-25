import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";

interface CountryCardProps {
  country: {
    code: string;
    name: string;
    continent: {
      name: string;
    };
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="overflow-hidden bg-gray-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg sm:rounded-lg">
      <p className="text-lg font-semibold bg-gray-300 px-4 py-5 sm:p-6 text-gray-800">
        {country.name}
      </p>
      <div className="px-4 py-2 sm:p-6">
        <p className="text-gray-500">{country.continent.name}</p>
        <div className="flex justify-end">
          <div className="rounded-lg hover:shadow-sm transition p-2">
            <Link
              to={`/country/${country.code}`}
              className="flex items-center gap-x-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <p className="text-indigo-600 hover:text-indigo-500 text-sm font-bold">
                View more
              </p>
              <div className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-indigo-600">
                <PlusIcon aria-hidden="true" className="size-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
