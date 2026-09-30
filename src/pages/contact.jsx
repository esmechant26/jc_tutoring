import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <h1>Let’s talk about your child’s learning needs.</h1>

      <div className="contact-grid">
        <div className="contact-item">
          <h2>Located in</h2>
          <p>San Mateo, CA</p>
        </div>

        <div className="contact-item">
          <h2>Phone</h2>
          <p>(718) 724 - 3384</p>
        </div>

        <div className="contact-item">
          <h2>Email</h2>
          <a href="mailto:jbchant@gmail.com">jbchant@gmail.com</a>
        </div>

        <div className="contact-item">
          <h2>Socials</h2>
          <a href="https://www.linkedin.com/in/jean-chant-03a33964/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
