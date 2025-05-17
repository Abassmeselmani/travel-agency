import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image from "../page1images/image.png";
import image2 from "../page1images/image2.png";
import image3 from "../page1images/image3.png";
import image4 from "../page1images/offer-bg-2.webp";
import image5 from "../page1images/tst-1.webp";

import image6 from "../page1images/tst-2.webp";
import image7 from "../page1images/tst-3.webp";
import image8 from "../page1images/tst-4.webp";
import image9 from "../page1images/about-image-1.webp";

import image10 from "../page1images/about-element-3.webp";
import image11 from "../page1images/about-element-1.webp";






import { dest } from "../destination";
import "./home.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const sliderRef = useRef(null);
  const destinationListRef = useRef(null);
  const [titleKey, setTitleKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
      resetAOS();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
      resetAOS();
    }
  };

  const resetAOS = () => {
    setTitleKey((prev) => prev + 1);
    AOS.refresh();
  };

  // Infinite horizontal auto-scroll for destination list
  useEffect(() => {
    const el = destinationListRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    let animationFrameId;
    const scrollSpeed = 0.5;

    const scrollStep = () => {
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= el.scrollWidth / 3) {
        el.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div className="Intropage">
        <button className="arrow left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="image-slider" ref={sliderRef}>
          <img src={image} className="Intropage-img" alt="Slide 1" />
          <img src={image2} className="Intropage-img" alt="Slide 2" />
          <img src={image3} className="Intropage-img" alt="Slide 3" />
        </div>

        <button className="arrow right" onClick={handleNext}>
          &#10095;
        </button>

        <h1 key={titleKey} className="Intropage-title" data-aos="fade-top">
          THE KINGDOM OF ICE <br />
          <span>Green Land</span>
        </h1>
      </div>

      <div className="destination">
        <h1 className="destination-title" data-aos="fade-left">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;Travel Destination&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>

        <h1 data-aos="fade-right">Top Destinations</h1>
        <p className="destination-descript" data-aos="fade-bottom">
          Explore our top destinations voted by more than 100,000+ customers
          around the world
        </p>
      </div>

      <div
        className="destination-list"
        ref={destinationListRef}
        data-aos="fade-right"
      >
        {[...dest, ...dest, ...dest].map((item, index) => (
          <div key={index} className="destination-card">
            <img
              src={item.imageURL}
              alt={item.name}
              className="destination-image"
            />
            <span className="destination-price">{item.price}</span>
            <div className="destination-info">
              <h3 className="destination-name">{item.name}</h3>
              <p className="destination-descript">{item.descript}</p>
              <span className="destination-days">{item.days}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Moved outside destination-list for visibility */}
      <div className="infocompany" data-aos="fade-up">
        <h1 className="infocompany-title" data-aos="fade-right">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;About our Company&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>
        <h1 className="infocompany-descript" data-aos="fade-right">Experience Our World With our Company</h1>
        <p className="infocomapany-paragraph" data-aos="fade-right">Embark on a trasformative journey as our company invites you to experience the 
          world creating unforgettable memories through exceptional travel adventures </p>
          <div className="infocompany-part2" data-aos="fade-right">
            <img className="infocompany-part2-img" src={image4}/>
            <ul className="infocompany-part2-list" data-aos="fade-right">
              <li>Perfect Detailing</li>
              <li>Completed Certification</li>
              <li>Save your budget</li>
              <li>Free Consultation</li>
            </ul>



          </div>
          <div className="infocompany-part3" data-aos="fade-right">
          <button className="infocompany-part2-btn">Learn More</button>
          <div className="infocompany-part3-img-p">
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image8}/>
            <p>5.2+ satisfied clients</p>

          </div>

          </div>
          <img className="infocompany-main" data-aos="fade-left" src={image9}/>
          <img className="infocompany-main2" data-aos="fade-left" src={image10}/>
          <img className="infocompany-main3" data-aos="fade-left" src={image11}/>
      </div>
    </>
  );
}

export default Home;
