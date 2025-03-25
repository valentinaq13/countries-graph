import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql/queries";
import Dropdown from "./Dropdown";

interface Continent {
  code: string;
  name: string;
}

interface ContinentFilterProps {
  onSelect: (continentCode: string) => void;
}

const ContinentFilter: React.FC<ContinentFilterProps> = ({ onSelect }) => {
  const { data, loading, error } = useQuery<{ continents: Continent[] }>(
    GET_CONTINENTS
  );

  if (loading) return <p>Loading continents...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const options =
    data?.continents.map((continent) => ({
      value: continent.code,
      label: continent.name,
    })) || [];

  return (
    <Dropdown
      label="Filter by continent:"
      options={options}
      placeholder="All"
      onSelect={onSelect}
    />
  );
};

export default ContinentFilter;
