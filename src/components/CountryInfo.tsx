import { Country } from "../types";

const CountryInfo: React.FC<{ country: Country }> = ({ country }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <p>
      <strong className="text-indigo-400">Languages:</strong>{" "}
      {country.languages.map((lang) => lang.name).join(", ")}
    </p>
    <p className="mb-2">
      <strong className="text-indigo-400">Capital:</strong> {country.capital}
    </p>
    <p className="mb-2">
      <strong className="text-indigo-400">Code:</strong> {country.code}
    </p>
  </div>
);

export default CountryInfo;
