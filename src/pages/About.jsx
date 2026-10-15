
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">🐾 Pawfect Grooming</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#aboutNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="aboutNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link active" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="btn paw-btn ms-lg-3" to="/booking">Book Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="page-banner text-center">
        <div className="container" data-aos="fade-down">
          <span className="page-label">ABOUT PAWFECT</span>
          <h1>Care That Comes from the Heart</h1>
          <p>We treat every pet with patience, kindness, and love.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1000&q=85"
                alt="Happy dog outdoors"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="page-label">OUR STORY</span>
              <h2>Every Pet Deserves Gentle Care</h2>
              <p>
                Pawfect Grooming is built around a simple idea: grooming should
                be a comfortable, positive experience for pets and their families.
              </p>
              <p>
                We aim to provide thoughtful grooming in a welcoming environment,
                paying attention to each pet's comfort and needs.
              </p>
              <Link to="/services" className="btn paw-btn">Explore Our Services</Link>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6" data-aos="flip-left">
              <div className="about-card h-100">
                <div className="service-icon">💗</div>
                <h3>Our Mission</h3>
                <p>
                  To provide gentle, reliable grooming that helps pets feel
                  clean, comfortable, and cared for.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="flip-right">
              <div className="about-card h-100">
                <div className="service-icon">🐾</div>
                <h3>Our Vision</h3>
                <p>
                  To create a welcoming grooming experience that pet parents
                  feel confident returning to.
                </p>
              </div>
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

export default About;
