import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  return (
    <Router>
      <div className="p-12 bg-gray-900">
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
