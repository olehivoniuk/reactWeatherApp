import React from "react";

export default function City(props) {
  return (
    <div className="City">
      <div class="container p-5 m-5">
        <div class="card">
          <div class="card-body">
            <div class="weather-app">
              <form id="search-form" class="mb-3">
                <div class="row">
                  <div class="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      class="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div class="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>
                    Last updated: <span id="date"></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="clearfix weather-temperature">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt="Clear"
                      id="icon"
                      class="float-left"
                    />
                    <div class="float-left">
                      <strong id="temperature"></strong>
                      <span class="units">
                        <a href="#" id="celsius-link" class="active">
                          °C
                        </a>{" "}
                        |
                        <a href="#" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
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
    </div>
  );
}
