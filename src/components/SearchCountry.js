import React, { useEffect, useState } from "react";

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [country, setCountry] = useState({});

  //   1. Fetching data from the API
  useEffect(() => {
    const loadCountry = () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((response) => setCountries(response));
    };
    loadCountry();
  }, []);

  const search = () => {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].country.toLowerCase() === searchCountry.toLowerCase()) {
        console.log("country found");
        setCountry(countries[i]);
        return;
      } else {
        setCountry({});
      }
    }
  };

  console.log(countries);
  console.log(searchCountry);

  return (
    <div>
      <span>
        <input
          type="text"
          placeholder="Country Name"
          onChange={(e) => setSearchCountry(e.target.value)}
          value={searchCountry}
        />
        <span> </span>
        <button onClick={search}>Search Country</button>
      </span>

      <div>
        {country.country ? (
          <div>
            <p>Country: {country.country}</p>
            <p>Cases: {country.cases}</p>
            <p>Deaths: {country.deaths}</p>
            <p>Recovered: {country.recovered}</p>
            <p>Today's cases: {country.todayCases}</p>
            <p>Today's deaths: {country.todayDeaths}</p>
            <p>Recovered Today: {country.recoveredToday}</p>
          </div>
        ) : (
          <h2>{country.country} NOT Found</h2>
        )}
      </div>

      {/* {countries.map((country) => {
        return (
          <>
            {" "}
            <li>{country.country}</li>{" "}
          </>
        );
      })} */}
    </div>
  );
};

export default SearchCountry;
