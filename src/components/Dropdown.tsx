import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  placeholder = "Selecciona...",
  onSelect,
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="mb-6 max-w-71">
      {label && (
        <label className="block font-semibold mb-2 text-gray-400">
          {label}
        </label>
      )}
      <div className="mt-2 grid grid-cols-1">
        <select
          value={selected}
          onChange={handleChange}
          className="col-start-1 row-start-1 w-full overflow-auto appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </div>
  );
};

export default Dropdown;
