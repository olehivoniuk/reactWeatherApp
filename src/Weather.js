
import React from "react";

export default function City() {
  return (
    <div className="Weather">
      <div className="container p-5 m-5">
        <div className="card">
          <div className="card-body">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1 id="city"><p>City name</p> </h1>
                <ul>
                  <li>
                    Last updated: <span id="date"></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt="Clear"
                      id="icon"
                      className="float-left"
                    />
                    <div className="float-left">
                      <strong id="temperature"></strong>
                      <span className="units">
                        <a href=" " id="celsius-link" className="active">
                          °C
                        </a>{" "}
                        |
                        <a href=" " id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind: <span id="wind"></span> km/h
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/olehivoniuk/reactWeatherApp " id="fahrenheit-link"> Open source code </a>

    </div>
  );
}