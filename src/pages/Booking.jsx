
import { Link } from "react-router-dom";
import "./Booking.css";

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you! This demo appointment request has been submitted.");
  event.target.reset();
}

function Booking() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">🐾 Pawfect Grooming</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#bookingNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="bookingNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="btn paw-btn ms-lg-3" to="/booking">Book Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="page-banner text-center">
        <div className="container" data-aos="fade-down">
          <span className="page-label">BOOK YOUR VISIT</span>
          <h1>Let's Pamper Your Pet!</h1>
          <p>Complete the form to request a grooming appointment.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <form className="booking-card" onSubmit={handleSubmit}>
                <h2>Appointment Form</h2>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="owner">Pet Parent's Name</label>
                    <input id="owner" className="form-control" required placeholder="Your full name" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" className="form-control" required placeholder="Your phone number" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="pet">Pet's Name</label>
                    <input id="pet" className="form-control" required placeholder="Your pet's name" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="pettype">Pet Type</label>
                    <select id="pettype" className="form-select" required defaultValue="">
                      <option value="" disabled>Select pet type</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="service">Grooming Service</label>
                    <select id="service" className="form-select" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>Bath & Blow Dry</option>
                      <option>Haircut & Styling</option>
                      <option>Nail Trimming</option>
                      <option>Coat Brushing</option>
                      <option>Full Grooming</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date"
                      type="date"
                      className="form-control"
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label" htmlFor="notes">Additional Notes</label>
                    <textarea id="notes" className="form-control" rows="4" placeholder="Special requests or information about your pet" />
                  </div>
                </div>

                <button className="btn paw-btn w-100" type="submit">
                  Request Appointment
                </button>

                <p className="small text-muted mt-3 mb-0">
                  Demo form only. Connect a backend or booking service to receive real appointments.
                </p>
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

export default Booking;
