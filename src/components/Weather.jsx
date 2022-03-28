import axios from "axios";
import React, { useEffect, useState } from "react";
import "./weather.css";

const initState = {
  query: "",
  info: [],
};

export const Weather = () => {
  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setState({ ...state, query: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      method: "get",
      baseURL: "http://api.weatherapi.com/v1",
      url: "/current.json",
      params: {
        key: "7b689c63009c4a0bab5102904221503",
        q: state.query || "delhi",
      },
    })
      .then((res) => setState({ ...state, info: res.data }))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(state);
  return (
    <>
      <input
        placeholder="Enter city name"
        type="text"
        value={state.query}
        onChange={handleChange}
      />
      <button onClick={getData}>Search</button>

      {loading && <h1>Loading...</h1>}
      <div className="report">
        {state?.info?.location && (
          <h2 className="city_name">Location : {state.info?.location?.name}</h2>
        )}
        {state?.info?.current && (
          <h4 className="date">{state.info?.current.last_updated}</h4>
        )}

        <div className="small_div">
          {state?.info?.current?.condition?.icon && (
            <img className="weather_icon" src={state.info?.current?.condition?.icon} alt="image" />
          )}
          <div className="small_div_text_info">
            {state?.info?.current?.condition?.icon && (
              <p>Atmosphere : {state.info?.current?.condition?.text} </p>
            )}
            {state?.info?.current?.condition?.icon && (
              <p>Temp :- Exact / Feels_like : {state.info?.current?.temp_c} °C /  {state.info?.current?.feelslike_c} °C</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
