import { useState } from "react";
import Card from "./Card";
// { sidebarStatus, setSidebarStatus }

function Main({ selectedRegion, data }) {
  const [status, setStatus] = useState(false);
  const [inpValue, setInpValue] = useState("");

  const handleInput = (e) => setInpValue(e.target.value);

  return (
    <>
      <section className="dark:bg-gray-900 dark:text-gray-50">
        { !selectedRegion && <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="dark:text-violet-600">laborum doloribus</span>
            delectus
          </h1>
          <input
            onChange={(e) => handleInput(e)}
            placeholder="Search..."
            className={`${
              status
                ? "px-3 py-1 mt-8 mb-3 bg-white rounded-2xl text-black"
                : "hidden"
            }`}
            type="search"
          />

          <div className="flex flex-wrap justify-center my-3">
            {/* <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Get started
            </button> */}

            <button
              onClick={() => setStatus(!status)}
              className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-300"
            >
              Search
            </button>
          </div>
        </div>}
      </section>
      <Card inpValue={inpValue} status={status} data={data} selectedRegion={selectedRegion} />
    </>
  );
}

export default Main;
