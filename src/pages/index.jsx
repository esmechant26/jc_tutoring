import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>
          Your child <strong>can </strong>learn to love reading.
        </h1>

        <p>
          By teaching your child the essential skills of reading, and by giving them materials that are accessible AND interesting, the world will open to them and their learning will accelerate in
          all subjects.
        </p>

        <p>
          I use structured literacy, and focus on decoding, fluency, comprehension, and executive functioning. Using personalized weekly lessons, based on the science of reading, I develop stronger,
          more confident readers and writers.
        </p>

        <p>I am certified in Orton-Gillingham and trained in the Wilson Reading System. I draw on over 25 years of experience in top independent schools in NYC and San Mateo.</p>

        <button onClick={() => navigate("/contact")}>Set up a consultation today</button>
      </section>

      <div className="books-divider">
        <img src="/widestackbooks.png" alt="" />
      </div>

      <section className="home-services">
        <div className="services-heading">
          <h2>Services</h2>
        </div>

        <p>I provide structured literacy and executive function support for Bay Area students who need personalized, expert help with reading and writing.</p>

        <div className="service-list">
          <div>
            <h3>Reading Remediation</h3>
          </div>

          <div>
            <h3>Enrichment</h3>
          </div>

          <div>
            <h3>Executive Functioning</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
