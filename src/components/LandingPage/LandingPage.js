import React from 'react';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';

const landing1 = process.env.PUBLIC_URL + '/assets/landing1.webp';
const landing2 = process.env.PUBLIC_URL + '/assets/landing2.jpg';
const githubIcon = process.env.PUBLIC_URL + '/assets/github.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="App-header">
        <h1>Struggle to plan your day?</h1>
        <p>Try our dynamic custom scheduling application!</p>
      </header>
      <div className="content-section">
        <div className="content-item">
          <div className="text-container">
            <p className="animated-text">Customize your own schedule and make adjustments as you go</p>
          </div>
          <img src={landing1} alt="Customize your schedule" className="animated-image" />
        </div>
        <div className="content-item">
          <img src={landing2} alt="Stay on top of events" className="animated-image" />
          <div className="text-container">
            <p className="animated-text">Reminders to help you stay on top of important events!</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="https://github.com/MelidoB/318-schedlur-Client">
          <img src={githubIcon} alt="GitHub" className="footer-icon" />
        </a>
        <span className="footer-text">Created by Amimul Arnab, Melido Bello, Joshua Rosas, and Aquib Zaman</span>
      </footer>
    </div>
  );
}

export default LandingPage;
