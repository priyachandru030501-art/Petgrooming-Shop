
import { Link } from "react-router-dom";
import "./Gallery.css";

const images = [
  { url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85", alt: "Two happy dogs" },
  { url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=85", alt: "Dog receiving care" },
  { url: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85", alt: "Golden dog" },
  { url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85", alt: "Cute dog portrait" },
  { url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85", alt: "Small dog portrait" },
  { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85", alt: "Happy dog outdoors" },
];

function Gallery() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand paw-brand" to="/">🐾 Pawfect Grooming</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#galleryNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="galleryNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link active" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="btn paw-btn ms-lg-3" to="/booking">Book Appointment</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="page-banner text-center">
        <div className="container" data-aos="fade-down">
          <span className="page-label">OUR GALLERY</span>
          <h1>Little Paws, Big Smiles</h1>
          <p>A collection of adorable furry friends and happy moments.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            {images.map((image, index) => (
              <div className="col-sm-6 col-lg-4" key={image.url} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="gallery-card">
                  <img src={image.url} alt={image.alt} loading="lazy" />
                </div>
              </div>
            ))}
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

export default Gallery;
