import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Country } from "../types";

const ITEMS_PER_LOAD = 30;

const useInfiniteScroll = (filteredCountries: Country[]) => {
  const [loadedCount, setLoadedCount] = useState(ITEMS_PER_LOAD);
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);

  useEffect(() => {
    setVisibleCountries(filteredCountries.slice(0, loadedCount));
  }, [filteredCountries, loadedCount]);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView && loadedCount < filteredCountries.length) {
      setLoadedCount((prev) => prev + ITEMS_PER_LOAD);
    }
  }, [inView, loadedCount, filteredCountries]);

  return { visibleCountries, ref, loadedCount };
};

export default useInfiniteScroll;
