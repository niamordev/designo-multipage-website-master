import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
    <Header />
   
    <div id="home">
      <div id="intro">
        <div className="box">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            {" "}
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="btn-style1">Learn more</button>
        </div>
        <img src="../../designo-multipage-website-master/assets/home/desktop/image-hero-phone.png" alt="" />
      </div>

      <div id="category">
        <div className="box box1">
          <img
            className="mobile"
            src="../../designo-multipage-website-master/assets/home/mobile/image-web-design.jpg"
            alt=""
          />
          <img
            className="tablet"
            src="../../designo-multipage-website-master/assets/home/tablet/image-web-design.jpg"
            alt=""
          />
          <img
            className="desktop large-screen"
            src="../../designo-multipage-website-master/assets/home/desktop/image-web-design-small.jpg"
            alt=""
          />
          <img
            className="desktop extra-large-screen"
            src="../../designo-multipage-website-master/assets/home/desktop/image-web-design-large.jpg"
            alt=""
          />
          <div className="content">
            <h1>WEB DESIGN</h1>
            <h2>VIEW PROJECT</h2>
          </div>
        </div>

        <div className="box box2">
          <img
            className="mobile"
            src="../../designo-multipage-website-master/assets/home/mobile/image-app-design.jpg"
            alt=""
          />
          <img
            className="tablet"
            src="../../designo-multipage-website-master/assets/home/tablet/image-app-design.jpg"
            alt=""
          />
          <img
            className="desktop"
            src="../../designo-multipage-website-master/assets/home/desktop/image-app-design.jpg"
            alt=""
          />
          <div className="content">
            <h1>WEB DESIGN</h1>
            <h2>VIEW PROJECT</h2>
          </div>
        </div>

        <div className="box  box3">
          <img
            className="mobile"
            src="../../designo-multipage-website-master/assets/home/mobile/image-graphic-design.jpg"
            alt=""
          />
          <img
            className="tablet"
            src="../../designo-multipage-website-master/assets/home/tablet/image-graphic-design.jpg"
            alt=""
          />
          <img
            className="desktop"
            src="../../designo-multipage-website-master/assets/home/desktop/image-graphic-design.jpg"
            alt=""
          />
          <div className="content">
            <h1>WEB DESIGN</h1>
            <h2>VIEW PROJECT</h2>
          </div>
        </div>
      </div>

      <div id="advantages">
        <div className="box">
          <img
            src="../../designo-multipage-website-master/assets/home/desktop/illustration-friendly.svg"
            alt=""
          />
          <div className="content-text">
            <span className="title">Passionate</span>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div className="box">
          <img
            src="../../designo-multipage-website-master/assets/home/desktop/illustration-friendly.svg"
            alt=""
          />
          <div className="content-text">
            <span className="title">Resourceful</span>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div className="box">
          <img
            src="../../designo-multipage-website-master/assets/home/desktop/illustration-friendly.svg"
            alt=""
          />
          <div className="content-text">
            <span className="title">friendly</span>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
