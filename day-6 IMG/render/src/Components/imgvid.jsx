import React from 'react';
import KL_Rahul from "../assets/images/KL-Rahul.jpg";
import Smith from "../assets/images/Smith.jpeg";
import video from "../assets/videos/Scarlet Witch .mp4";
import Audio from "../assets/Audio/Fire Storm.mp3";
import Audio2 from "../assets/Audio/Guns And Roses.mp3"
import data from "../assets/data/fakedata.json"

export const Media = () => {
  return (
    <>
      <h1>KLR</h1>
      <img src={KL_Rahul} alt="logo" style={{ width: "500px" }} />
      <h1>Smith</h1>
      <img src={Smith} alt="logo" style={{ width: "500px" }} />
      <h1>Avenger</h1>
      <img src="ChatGPT Image Aug 15, 2025, 09_21_48 PM.png" alt="img" style={{ width: "500px" }} />
    <h1>Video</h1>
    <video src={video} controls style={{ width: "500px" }} />
    <h1>Audio</h1>
    <audio src={Audio} controls  />
    <audio src={Audio2} controls  />
    <audio src="Hungry Cheetah.mp3" controls />   
    <audio src="Washi O Washi.mp3" controls />
    <h1>JSON Data</h1>
    {data.map((element, index)=>
                <ul>
                <div key={index}>
                    <li><h1>{element.name} {element.Role}</h1></li>
                </div>
                </ul>
                )} 

    </>
  );
};
export default Media;