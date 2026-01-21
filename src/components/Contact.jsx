import { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/contact.css";
import profile from "../assets/photo1.jpg";

function Contact() {
  const location = useLocation();
  const [message, setMessage] = useState("");
  useEffect(() => {
      alert(localStorage.getItem("msg"));
    }, []);

  return (
    <>
      <div className="head">
        <nav className="nav">
          <Link to="/" state={{ course: message }}>Main</Link>
          <Link to="/home" state={{ course: message }}>Home</Link>
          <Link to="/about" state={{ course: message }}>About</Link>
          <Link to="/contact" state={{ course: message }}>Contact</Link>
        </nav>

        <h1>This is Contact Page</h1>
      </div>

      <div className="contact-container">
        <div className="contact-card">

          {/* Profile Photo */}
          <div className="photo-section">
            <img src={profile} alt="Profile" />
          </div>

          {/* Info Section */}
          <div className="info-section">
            <p>I'm belongs to --- {location.state?.course}</p>
            <p><span>ID Number:</span> 2500030221</p>
            <p><span>Name:</span> Salam Munna Shaik</p>
            <p><span>Phone:</span> 8309668654</p>
            <p><span>Email:</span> munna@gmail.com</p>
            <p><span>Address:</span> Vijayawada, Andhra Pradesh</p>
            <p><span>Department:</span> CSE</p>
            <p><span>College:</span> KL UNIVERSITY</p>
          </div>
        </div>

        {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
