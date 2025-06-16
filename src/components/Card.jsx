import React, { useEffect, useState } from "react";
// import data from "../data/data.js";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Card({ selectedRegion, inpValue, data, status }) {
  const [randomItem, setRandomItem] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      const randomIndex = getRndInteger(0, data.length - 1);
      setRandomItem(data[randomIndex]);
    }
  }, [data]);

  const filteredCountry = selectedRegion
    ? data.filter((country) => country.region === selectedRegion)
    : data;

  return (
    <div className="bg-violet-50 dark:bg-gray-800 dark:text-gray-50">
      <div
        className={`${
          selectedRegion || status  ? "hidden" : "flex"
        } justify-center lg:max-w-[85%] m-auto`}
      >
        <div className="w-fit lg:flex mb-5 items-center p-6 rounded-md shadow-md bg-violet-200 dark:bg-gray-900 dark:text-gray-50">
          <img
            src={randomItem.flag}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2 mx-4">
            <span className="block text-xs font-medium tracking-widest text-violet-600 uppercase dark:text-violet-600">
              {randomItem.nativeName}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              {randomItem.name}
            </h2>
          </div>
          <p className="dark:text-gray-500">{randomItem.altSpellings}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCountry
          .filter((item) =>
            item.name.toLowerCase().includes(inpValue.toLowerCase())
          )
          .map((country) => {
            return (
              <div className="max-w-xs p-6 m-2 bg-violet-200 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <span className="block text-xs font-medium tracking-widest uppercase text-violet-600 dark:text-violet-600">
                    {country.nativeName}
                  </span>
                  <h2 className="text-xl font-semibold tracking-wide">
                    {country.name}
                  </h2>
                </div>
                <p className="dark:text-gray-500">{country.altSpellings}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
