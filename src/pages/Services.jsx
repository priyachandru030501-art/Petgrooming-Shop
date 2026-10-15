
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  { icon: "🛁", title: "Bath & Blow Dry", price: "From ₹499", description: "A refreshing bath, coat cleaning, and gentle drying." },
  { icon: "✂️", title: "Haircut & Styling", price: "From ₹699", description: "A comfortable haircut suited to your pet's coat." },
  { icon: "🐾", title: "Nail Trimming", price: "From ₹199", description: "Careful nail trimming for comfortable little paws." },
  { icon: "🪮", title: "Coat Brushing", price: "From ₹299", description: "Brushing to remove loose fur and reduce tangles." },
  { icon: "👂", title: "Ear Cleaning", price: "From ₹199", description: "Gentle external ear cleaning when appropriate." },
  { icon: "✨", title: "Full Grooming", price: "From ₹999", description: "A grooming package tailored to your pet's needs." },
];

function Services() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">🐾 Pawfect Grooming</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#servicesNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="servicesNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link active" to="/services">Services</Link>
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
          <span className="page-label">OUR SERVICES</span>
          <h1>Our Grooming Services</h1>
          <p>Thoughtful grooming services designed around your pet's comfort.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card h-100">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <h5>{service.price}</h5>
                  <Link to="/booking" className="btn paw-btn mt-2">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
          <p className="small text-muted text-center mt-4">
            Sample prices only. Final prices may vary by pet size, coat, and service needs.
          </p>
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

export default Services;
