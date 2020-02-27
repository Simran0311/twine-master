import React from "react";
import axios from "axios";
// import {NavLink, Link} from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

export default class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadGreenhouseJobs(() => {
      window.Grnhse.Settings.scrollOnLoad = false;
      window.Grnhse.Settings.autoLoad = true;
      window.Grnhse.Iframe.load();
    });
  }

  loadGreenhouseJobs = callback => {
    var existingScript = document.getElementById("grnhse_app_script");
    if (existingScript) {
      document.getElementById("grnhse_app_script").remove();
      existingScript = document.getElementById("grnhse_app_script");
    }

    if (!existingScript && 1 == 1) {
      const script = document.createElement("script");
      script.src =
        "https://boards.greenhouse.io/embed/job_board/js?for=twinelabs";
      script.id = "greenhousejobs";
      document.body.appendChild(script);

      script.onload = () => {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
  };

  render() {
    return (
      <div>
        <section className="bg_career">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 title text-center position-relative">
                <div className="career_div wow fadeInUp">
                  <h1 className="heading_1 font-weight-bold text-white mb-0">
                    We’re Hiring!
                  </h1>
                  <h5 className="text-white mb-0 my-4">
                    Help us change the way people decisions are made
                  </h5>
                  <Link
                    to="/careers#current-opening"
                    className="btn career-btn text-white btn-large"
                  >
                    View Openings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 our_values">
          <img
            src="assets/images/rotate-img.svg"
            id="leftgear"
            style={{ transition: "all 0.4s ease-in-out" }}
          />
          <div className="container">
            <div className="section-title text-center mb-4">
              <h2 className="mb-2">Our values</h2>
              <p className="secondary-color">
                We’re a mission-oriented organization focused on creating a
                best-in-className team.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list_none pl-0">
                  <li className="wow fadeInLeft">
                    <div className="value_list_li box1">
                      <h4 className="mt-0 font-weight-bold primary-color">
                        Positive impact on others
                      </h4>
                      <p className="f-16 secondary-color mb-0">
                        Empower and drive the team to be better in all
                        interactions.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-end wow fadeInRight">
                    <div className="value_list_li box2">
                      <h4 className="mt-0 font-weight-bold primary-color">
                        Intelectual curiosity + humility
                      </h4>
                      <p className="f-16 secondary-color mb-0">
                        Be a “learn-it-all,” not a know-it-all.
                      </p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft">
                    <div className="value_list_li box3">
                      <h4 className="mt-0 font-weight-bold primary-color">
                        Continuous improvement
                      </h4>
                      <p className="f-16 secondary-color mb-0">
                        Look to improve yourself, others, and the company.{" "}
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-end wow fadeInRight">
                    <div className="value_list_li box4">
                      <h4 className="mt-0 font-weight-bold primary-color">
                        Relentless resourcefulness
                      </h4>
                      <p className="f-16 secondary-color mb-0">
                        Be willing to roll up your sleeves and contribute any
                        way possible.{" "}
                      </p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft">
                    <div className="value_list_li box5">
                      <h4 className="mt-0 font-weight-bold primary-color">
                        Focus on winning
                      </h4>
                      <p className="f-16 secondary-color mb-0">
                        Believe in extraordinary outcomes and focus on being
                        your best.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="current-opening"></div>
        <section className="py-5 bg-light-gray current_opening">
          <div className="container">
            <div className="section-title text-center mb-4">
              <h2>Current Openings</h2>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="current_opening_details">
                  <div id="grnhse_app_script"></div>
                  <div id="grnhse_app"></div>
                </div>
              </div>
            </div>
            <div className="title text-center show-desktop">
              <hr />
              <p className="mt-5">
                Don’t see the job you’re looking for?{" "}
                <a href="mailto:jobs@twinelabs.com">Contact us!</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
