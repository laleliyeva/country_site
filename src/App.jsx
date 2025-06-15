import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [selectedRegion, setRegion] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
    .then(res => res.json())
    .then(item => setData(item))
  },[] );

  function changeRegion(region) {
    setRegion(region);
  }

  return (
    <>
      <Header data={data} changeRegion={changeRegion} />
      <Main data={data} selectedRegion={selectedRegion} />
      <Footer />
    </>
  );
}

export default App;
