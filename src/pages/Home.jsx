
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">
            🐾 Pawfect Grooming
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#homeNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="homeNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="btn paw-btn ms-lg-3" to="/booking">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="page-label">
                🐶 HAPPY PETS, HAPPY HEARTS
              </span>
              <h1>
                Your Pet Deserves <span>The Best Care!</span>
              </h1>
              <p>
                Give your furry friend the love, care, and grooming they
                deserve. We make every visit comfortable, safe, and fun.
              </p>
              <Link to="/booking" className="btn paw-btn me-2">
                Book Grooming
              </Link>
              <Link to="/services" className="btn paw-outline mt-2 mt-sm-0">
                Explore Services
              </Link>
            </div>

            <div className="col-lg-6" data-aos="zoom-in">
              <img
                className="home-hero-img"
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85"
                alt="Dog receiving loving care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="page-label">WHAT WE OFFER</span>
            <h2>Our Grooming Services</h2>
            <p>Everything your pet needs to look and feel wonderful.</p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "🛁",
                title: "Bath & Blow Dry",
                description: "A refreshing bath and a soft, clean coat.",
              },
              {
                icon: "✂️",
                title: "Hair Trimming",
                description: "Comfortable grooming for a neat appearance.",
              },
              {
                icon: "🐾",
                title: "Nail Care",
                description: "Gentle nail trimming for happy little paws.",
              },
            ].map((service, index) => (
              <div
                className="col-md-4"
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="service-card h-100">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/services" className="btn paw-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section home-soft">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85"
                alt="Two happy dogs"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="page-label">WHY CHOOSE US?</span>
              <h2>Loving Care for Your Best Friend</h2>
              <p>
                We want every grooming visit to be a positive experience.
                Our focus is your pet's comfort, cleanliness, and happiness.
              </p>

              <ul className="check-list">
                <li>✓ Gentle and caring approach</li>
                <li>✓ Clean and comfortable environment</li>
                <li>✓ Services tailored to your pet</li>
                <li>✓ Friendly and welcoming team</li>
              </ul>

              <Link to="/about" className="btn paw-btn">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta text-center" data-aos="zoom-in">
        <div className="container">
          <h2>Ready to Pamper Your Pet?</h2>
          <p>Book an appointment and give your pet a little extra love.</p>
          <Link to="/booking" className="btn light-btn">
            Book an Appointment
          </Link>
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
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
            </div>

            <div className="col-md-8 col-lg-4">
              <h5>Contact Us</h5>
              <p>Email: hello@pawfect.example</p>
              <p>Phone: +91 98765 43210</p>
              <Link to="/contact">Send Us a Message</Link>
            </div>
          </div>

          <hr />
          <p className="text-center mb-0">
            © 2026 Pawfect Grooming. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
