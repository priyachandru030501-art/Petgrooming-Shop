
import { Link } from "react-router-dom";
import "./Contact.css";

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you! This demo form has been submitted.");
  event.target.reset();
}

function Contact() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">🐾 Pawfect Grooming</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#contactNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="contactNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link active" to="/contact">Contact</Link>
              <Link className="btn paw-btn ms-lg-3" to="/booking">Book Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="page-banner text-center">
        <div className="container" data-aos="fade-down">
          <span className="page-label">GET IN TOUCH</span>
          <h1>We'd Love to Hear from You</h1>
          <p>Questions about grooming? Send us a message.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-card h-100">
                <h2>Contact Details</h2>
                <p>✉️ <strong>Email</strong><br />hello@pawfect.example</p>
                <p>📞 <strong>Phone</strong><br />+91 98765 43210</p>
                <p>📍 <strong>Location</strong><br />Add your shop address here</p>
                <p>🕒 <strong>Opening Hours</strong><br />Monday–Saturday<br />9:00 AM–7:00 PM</p>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <form className="contact-card" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>

                <div className="mb-3">
                  <label className="form-label" htmlFor="cname">Your Name</label>
                  <input id="cname" className="form-control" required placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="cemail">Email Address</label>
                  <input id="cemail" type="email" className="form-control" required placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input id="subject" className="form-control" required placeholder="How can we help?" />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" rows="5" required placeholder="Write your message..." />
                </div>

                <button className="btn paw-btn" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="paw-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <h4>🐾 Pawfect Grooming</h4>
              <p>Gentle grooming, happy pets, and tails that never stop wagging.</p>
            </div>
            <div className="col-md-4 col-lg-3">
              <h5>Quick Links</h5>
              <Link to="/">Home</Link><Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link><Link to="/about">About</Link>
            </div>
            <div className="col-md-8 col-lg-4">
              <h5>Contact Us</h5>
              <p>Email: hello@pawfect.example</p>
              <p>Phone: +91 98765 43210</p>
              <Link to="/contact">Send Us a Message</Link>
            </div>
          </div>
          <hr />
          <p className="text-center mb-0">© 2026 Pawfect Grooming. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;
