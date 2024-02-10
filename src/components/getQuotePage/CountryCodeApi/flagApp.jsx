import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import './flagApp.css';

const FlagApp = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry, something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState();

  const searchSelectedCountry = countries.find((obj) => obj.name.common === selectedCountry);

  return (
    <section className="bg-white w-auto h-auto sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
    <div className="shadow-md p-4">
      <div className="header-section">
        <p className="uppercase font-bold text-3xl text-center" style={{color:"black"}}>
          Select Country <br />
        </p>
      </div>

      <div className="body-section">
        {loading ? (
          <div className="loading-section">
            <p className="uppercase font-bold text-2xl">...loading</p>
          </div>
        ) : (
          <div className="grid gap-4">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="country-select"
            >
              <option value=""  >-- Select Country --</option>
              {countries.map((item) => (
                <option key={uuidv4()} value={item.name.common}>
                  {item.name.common}
                </option>
              ))}
            </select>

            {searchSelectedCountry && (
              <div className="container-details">
               
                  <div className="flag-image">
                    <img
                      src={searchSelectedCountry.flags.png}
                      alt={`Flag of ${searchSelectedCountry.name.common}`}
               
                    />
                  </div>
                  <div>
                    <p className="area-code">
                      {searchSelectedCountry.idd.root} {searchSelectedCountry.idd.suffixes}
                    </p>
                    <input
                      type="tel"
                      placeholder="Phone"
                    
                    />
                  </div>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default FlagApp;
