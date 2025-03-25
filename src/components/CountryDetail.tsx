import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAIL } from "../graphql/queries";
import CountryDetailHeader from "./CountryHeader";
import CountryInfo from "./CountryInfo";
import { Country } from "../types";
import Loader from "./Loader";

const CountryDetail = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<{ country: Country }>(
    GET_COUNTRY_DETAIL,
    {
      variables: { code },
    }
  );

  if (loading) return <Loader />

  if (error) return (
    <div className="p-6 h-screen bg-gray-900 text-white flex justify-center items-center">
      <p>Error: {error.message}</p>
    </div>
  );
  return (
    <div className="p-6 h-screen text-white">
      <CountryDetailHeader
        country={data!.country}
        onBack={() => navigate(-1)}
      />
      <CountryInfo country={data!.country} />
    </div>
  );
};

export default CountryDetail;
