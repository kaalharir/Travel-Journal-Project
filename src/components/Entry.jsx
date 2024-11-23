/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in japan.md
 * so you don't have to type it all out manually :)
 * 
 * Notes:
 * - Only render 1 instanc of this Entry component for now
 * - I've pulled in marker.png for the little map marker icon
 *  that goes next to the location name
 * - The main purpose of this challenge is to show you where our limitations
 * currently are, so don't worry about the fact that you're hard-coding all
 * this data into the component.
 */
import React from "react";
import { createRoot } from "react-dom/client";

export default function Entry() {
    return (
        // <div className="entry">
        <article className="journal-entry">
            <div className="main-image-container">
            <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
            </div>
            <div className="entry--info">
                <div className="entry--location">
                <img src="src/assets/marker.jpg" alt="map marker icon" className="marker-icon" />
                 <span>Japan</span>
                    <a href="https://www.google.com/maps/place/Mount-Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zl20vMGNrczA?entry=ttu" 
    target="_blank"      rel="noopener noreferrer" > View on Google Maps</a>
                </div>
                <h2 className="entry--title">Mount Fuji</h2>
                <p className="entry--dates">02 Dec, 2024 - 1-July, 2025</p>
                <p className="entry--description">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is
                the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
            </article>
        // </div>
    );
}