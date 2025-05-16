import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../page1images/image.png";
import image2 from "../page1images/image2.png";
import image3 from "../page1images/image3.png";
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
        <h1 className="destination-title">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;Travel Destination&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>

        <h1>Top Destinations</h1>
        <p className="destination-descript">
          Explore our top destinations voted by more than 100.000+ customers
          around the world
        </p></div>

        <div
          className="destination-list"
          ref={destinationListRef}
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
      
    </>
  );
}

export default Home;
