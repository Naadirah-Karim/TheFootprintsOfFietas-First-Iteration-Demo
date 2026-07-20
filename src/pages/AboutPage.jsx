import { useState } from "react";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import "../styles/AboutPage.css";

function AboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", { name, email });
    alert("Thanks for subscribing!");
    setName("");
    setEmail("");
  };

  return (
    <div className="about-page">
      <MusicToggle />
      <header className="page-header header--about">
        <PageHeading title="About" />
      </header>
      <div className="about-wrap">
        <img src="/Icons/banner 3.png" className="about-banner-vertical" alt="floral banner" />

        <div className="about-container">
          <h1>Hi there, my name is Naadirah Karim</h1>
          <p className="mission-text">
            I made this website because the history of Fietas is disappearing with our elders. 
            I wanted to make a digital medium that preserves the history and allows the younger generation
            to understand the struggles their elders faced during Apartheid.
          </p>
          <p className="contribution-text">
            If you have a story or images about Fietas you would like to
            contribute. You can sign up for the newsletter and email me at:{" "}
            <a href="mailto:naadirah287@gmail.com" className="contact-email">
              naadirah287@gmail.com
            </a>
          </p>


        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />

          </div>
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>

          <div className="about-credits">
            <h2>Credits &amp; Acknowledgements</h2>

            <div className="credits-columns">
              <div className="credits-group">
                <h3>Photography</h3>
                <p>David Goldblatt — <em>Fragments of Fietas</em></p>
              </div>

              <div className="credits-group">
                <h3>Story &amp; Design</h3>
                <p>Naadirah Karim — writing, wireframes and website design</p>
              </div>

              <div className="credits-group">
                <h3>Music</h3>
                <p>"Rising Raga" — Pixel Perfect Productions (Pixabay)</p>
              </div>

              <div className="credits-group">
                <h3>With Thanks</h3>
                <p>Nazir Cassim</p>
              </div>
            </div>

            <div className="credits-group credits-references">
              <h3>Research &amp; References</h3>
              <ul>
                <li>Mangera, S. M. <em>Re-membering Fietas</em> (MA research, writing).</li>
                <li>
                  Carrim, N. <em>Fietas: A Social History of Pageview, 1948-1988.</em>{" "}
                  Johannesburg: Save Pageview Association, 1990.
                </li>
                <li>
                  Rugunanan, P. "Fordsburg: The Building of a Community for
                  People of Indian Origin." Chapter 4.
                </li>
                <li>
                  Yengde, S. "Indians in Apartheid South Africa: Class,
                  Compromise and Controversy in the Era of the Group Areas
                  Act, 1952-1962." <em>Diaspora Studies</em> 14, no. 1 (2021):
                  75-96.
                </li>
                <li>"Life Behind the Scars of Fietas" (2018), Joburg.org.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;