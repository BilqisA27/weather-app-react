import React from "react";

export default function CurrentTemp() {
  return (
    <div className="current-temp">
      <div className="card ml-3">
        <div className="card-body day">
          <div className="row">
            <div className="col">
              <div>
                <div className="card-text">
                  <br />
                  <span className="city" id="currentCity">
                    <strong className="cityNow">Vancouver</strong>
                    <div>
                      <span className="last-updated">Last updated: </span>
                      <span className="date"></span>
                    </div>
                    <div
                      className="card-subtitle mb-2"
                      id="current-description"
                    >
                      Sunny
                    </div>
                  </span>

                  <div className="card-title">
                    <span className="sun">
                      {" "}
                      <img id="icon-element" src="" alt="" />
                    </span>{" "}
                  </div>
                  <div className="row temp-description">
                    <div className="col-6 ">
                      <div className="current-details">
                        <span id="currentTemp"> 18 </span>{" "}
                        <sup>
                          <a href="<" id="celsius" className="active">
                            {" "}
                            ℃{" "}
                          </a>{" "}
                          |
                          <a href="<" id="fahrenheit">
                            {" "}
                            ℉{" "}
                          </a>
                        </sup>
                        <small>
                          Humidity:
                          <span id="humidity"> </span>
                        </small>
                        <div>
                          <small>
                            Wind:
                            <span id="wind"> </span>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
