import { useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import ContinentFilter from "./ContinentFilter";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import BackToTopButton from "./BackToTopButton";
import LoadMoreIndicator from "./LoadMoreIndicator";
import useScrollToTop from "../hooks/useScrollToTop";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { Country } from "../types";

const CountryList = () => {
  const [continentFilter, setContinentFilter] = useState("");
  const { data, loading, error } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);
  const { isScrolling, scrollToTop } = useScrollToTop();

  const filteredCountries = useMemo(
    () =>
      data?.countries
        ? data.countries.filter((c) => !continentFilter || c.continent.code === continentFilter)
        : [],
    [data, continentFilter]
  );

  const { visibleCountries, ref, loadedCount } = useInfiniteScroll(filteredCountries);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="p-6 h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="text-center">Error: {error?.message}</div>
      </div>
    );

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl sm:tracking-tight mb-4">
        Country List
      </h1>
      <ContinentFilter onSelect={setContinentFilter} />
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </ul>
      {loadedCount < filteredCountries.length && <LoadMoreIndicator ref={ref} />}
      {isScrolling && <BackToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default CountryList;
