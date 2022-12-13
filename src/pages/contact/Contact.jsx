import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SectionLocations from "../../components/sectionLocations/SectionLocations";

export default function Contact() {
  return (
    <>
    <Header />
    <div id="contact">
      <form action="submit">
        <div className="text">
        <h1>Contact us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        </div>
        <div className="fields">
          <input type="text"  placeholder="Name"/>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone" />
          <textarea className="your-message" placeholder="Your Message"></textarea>
          <button formAction="submit"  className="btn-style1">Submit</button>
        </div>
      </form>

      <SectionLocations />
    </div>
    <Footer />
    </>
  );
}
