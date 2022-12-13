import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Locations() {
  return (
    <>
    <Header />
    <div id="locations">
      <div className="box-location">
        <img
          className="mobile-desktop"
          src="../../assets/locations/desktop/image-map-canada.png"
          alt=""
        />
        <img
          className="tablet"
          src="../../assets/locations/tablet/image-map-canada.png"
          alt=""
        />
        <div className="content">
          <h1>Canada</h1>
          <div className="infos">
            <div className="address">
              <ul>
                <li>
                  <strong>Designo Central Office</strong>
                </li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <strong>Contact</strong>
                </li>
                <li>P : +1 253-863-8967</li>
                <li>M : contact@designo.co</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="box-location reverse">
        <img
          className="mobile-desktop"
          src="../../assets/locations/desktop/image-map-australia.png"
          alt=""
        />
        <img
          className="tablet"
          src="../../assets/locations/tablet/image-map-australia.png"
          alt=""
        />
        <div className="content">
          <h1>Australia</h1>
          <div className="infos">
            <div className="address">
              <ul>
                <li>
                  <strong>Designo AU Office</strong>
                </li>
                <li>19 Balonne Street</li>
                <li>New South Wales 2443</li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <strong>Contact</strong>
                </li>
                <li>P : (02) 6720 9092</li>
                <li>M : contact@designo.au</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="box-location">
        <img
          className="mobile-desktop"
          src="../../assets/locations/desktop/image-map-united-kingdom.png"
          alt=""
        />
        <img
          className="tablet"
          src="../../assets/locations/tablet/image-map-united-kingdom.png"
          alt=""
        />
        <div className="content">
          <h1>United Kingdom</h1>
          <div className="infos">
            <div className="address">
              <ul>
                <li>
                  <strong>Designo UK Office</strong>
                </li>
                <li>13 Colorado Way</li>
                <li>Rhyd-y-fro SA8 9GA</li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <strong>Contact</strong>
                </li>
                <li>P : 078 3115 1400</li>
                <li>M : contact@designo.uk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
