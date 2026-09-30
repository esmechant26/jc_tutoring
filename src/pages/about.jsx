import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-page__visual">
        <div className="about-page__image">
          <img src="/headshot1.avif" alt="Jean Chant" />
        </div>
      </div>

      <section className="about-page__content">
        <h1>Hi, I'm Jean!</h1>

        <p>
          Jean Chant holds a B.A. in Education from the University of Vermont and an M.A. in Curriculum and Teaching from Teachers College, Columbia University. She is certified in Orton Gillingham
          (structured literacy), trained in the Wilson Reading System, and experienced in executive function coaching. Jean draws on her degrees and credentials to build a structured literacy approach
          that integrates multiple methodologies. Her teaching is individualized and grounded in the belief that every child can thrive when instruction meets their unique learning profile.
        </p>
        {/* <img className="about-page__books" src="/pencils.png" alt="" /> */}

        <p>
          Jean brings over 25 years of experience in independent schools and private practice. For 19 years, she taught first grade at St. Bernard’s School in Manhattan. She later served as an
          Admissions Associate at The Nightingale-Bamford School, assessing Kindergarten applicants and collaborating with preschool directors and admissions teams. Most recently, she worked as a
          Reading Specialist at The Carey School in San Mateo, California, supporting K–1 students through the DIBELS Reading Assessment, Orton Gillingham materials, and the Heggerty curriculum.
          Today, Jean works as a private learning specialist with families throughout the Bay Area, supporting students in reading comprehension, decoding, fluency, and executive functioning. She
          works with students across a wide range of learning profiles, including those with learning differences and those who are beyond grade level.
        </p>

        <p>
          A crucial part of Jean’s work is helping parents understand their child’s learning profile and empowering them to advocate for their children at school. By supporting parents and students,
          Jean helps children develop greater independence as learners while fostering a stronger sense of clarity and confidence within the family.
        </p>

        <p>Outside of work, Jean loves spending time with her adult children, biking and hiking with her husband, baking sourdough bread, reading, and exploring the Bay Area.</p>
      </section>
    </div>
  );
}

export default About;
