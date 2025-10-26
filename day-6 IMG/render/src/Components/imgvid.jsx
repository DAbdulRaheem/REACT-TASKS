import React from 'react';
import "./Media.css";  // 👈 import the CSS file
import KL_Rahul from "../assets/images/KL-Rahul.jpg";
import Smith from "../assets/images/Smith.jpeg";
import video from "../assets/videos/Scarlet Witch .mp4";
import Audio from "../assets/Audio/Fire Storm.mp3";
import Audio2 from "../assets/Audio/Guns And Roses.mp3";
import data from "../assets/data/fakedata.json";

export const Media = () => {
  return (
    <div className="media-page">
      <header className="media-header">
        <h1>🎬 Media</h1>
        <p>Images, Videos, Audio, and JSON Data</p>
      </header>

      <main className="media-content">
        
        <section className="media-section">
          <h2>🖼️ Images</h2>
          <div className="image-grid">
            <div className="media-card">
              <h3>K. L. Rahul</h3>
              <img src={KL_Rahul} alt="KL Rahul" />
            </div>
            <div className="media-card">
              <h3>Steve Smith</h3>
              <img src={Smith} alt="Smith" />
            </div>
            <div className="media-card">
              <h3>Avenger</h3>
              <img src="ChatGPT Image Aug 15, 2025, 09_21_48 PM.png" alt="Avenger" />
            </div>
          </div>
        </section>

        <section className="media-section video-section">
          <h2>🎥 Video</h2>
          <video src={video} controls />
        </section>

        <section className="media-section audio-section">
          <h2>🎧 Audio Tracks</h2>
          <div className="audio-list">
            <audio src={Audio} controls />
            <audio src={Audio2} controls />
            <audio src="Hungry Cheetah.mp3" controls />
            <audio src="Washi O Washi.mp3" controls />
          </div>
        </section>

        <section className="media-section data-section">
          <h2>📋 JSON Data</h2>
          <ul>
            {data.map((element, index) => (
              <li key={index}>
                <strong>{element.name}</strong> — {element.Role}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="media-footer">
        <p>© 2025 Media Showcase | Built with ❤️ using React</p>
      </footer>
    </div>
  );
};

export default Media;
