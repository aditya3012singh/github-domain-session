import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content-wrap">
        <h2 className="footer-quote-big">
          THE MULTIVERSE IS <span>INFINITE</span>.
        </h2>
        <div className="footer-subquote-tag">YOUR STORY STARTS HERE.</div>

        <a href="#registration" className="btn-footer-register">
          JOIN DEVUP TODAY →
        </a>

        <div className="footer-social-links-bar">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav-link"
          >
            INSTAGRAM
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav-link"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav-link"
          >
            LINKEDIN
          </a>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav-link"
          >
            DISCORD
          </a>
        </div>

        <div className="footer-credits-text">
          DEVUP CLUB · COLLEGE OF ENGINEERING · INTO THE MULTIVERSE © 2026<br />
          Spider-Man and superhero storytelling elements used for inspiring creative developer education.
        </div>
      </div>
    </footer>
  );
}
