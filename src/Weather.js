import React from "react";
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";
import SourceCode from "./SourceCode";
import "bootstrap/dist/css/bootstrap.min.css";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default function Weather() {
  return (
    <div>
      <div className="Weather">
        <div className="container">
          <div className="card w-50">
            <div className="card-body">
              <form id="search-form">
                <div className="row">
                  <div className="col-8 pr-0 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      id="searchCity"
                    />
                  </div>
                  <div className="col-1 pl-0 mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      id="searchButton"
                    >
                      <span>
                        {" "}
                        <Emoji label="search" symbol="🔍" />
                      </span>
                    </button>
                  </div>
                  <div className="col-1 pl-0 mt-4">
                    <button
                      type="button"
                      className="btn btn-info"
                      id="current-button"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </form>
              <br />
              <CurrentTemp />
            </div>
          </div>
        </div>
      </div>
      <Forecast />

      <SourceCode />
    </div>
  );
}
