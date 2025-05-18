import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

// Image Imports
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
import image12 from "../page1images/Discover-image-1.webp";
import image13 from "../page1images/Discover-image-2.webp";
import image14 from "../page1images/Discover-image-3.webp";
import image15 from "../page1images/Discover-image-4.webp";

// Data and Styles
import { dest } from "../destination";
import "./home.css";

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
    setTitleKey(prev => prev + 1);
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
      {/* Intro Section */}
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

      {/* Destination Section */}
      <div className="destination">
        <h1 className="destination-title" data-aos="fade-left">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;Travel Destination&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>

        <h1 data-aos="fade-right">Top Destinations</h1>
        <p className="destination-descript" data-aos="fade-bottom">
          Explore our top destinations voted by more than 100,000+ customers around the world
        </p>
      </div>

      <div
        className="destination-list"
        ref={destinationListRef}
        data-aos="fade-right"
      >
        {[...dest, ...dest, ...dest].map((item, index) => (
          <div key={index} className="destination-card">
            <img src={item.imageURL} alt={item.name} className="destination-image" />
            <span className="destination-price">{item.price}</span>
            <div className="destination-info">
              <h3 className="destination-name">{item.name}</h3>
              <p className="destination-descript">{item.descript}</p>
              <span className="destination-days">{item.days}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Company Info Section */}
      <div className="infocompany" data-aos="fade-up">
        <h1 className="infocompany-title" data-aos="fade-right">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;About our Company&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>

        <h1 className="infocompany-descript" data-aos="fade-right">
          Experience Our World With our Company
        </h1>
        <p className="infocomapany-paragraph" data-aos="fade-right">
          Embark on a transformative journey as our company invites you to experience the
          world creating unforgettable memories through exceptional travel adventures
        </p>

        <div className="infocompany-part2" data-aos="fade-right">
          <img className="infocompany-part2-img" src={image4} alt="Offer" />
          <ul className="infocompany-part2-list">
            <li>Perfect Detailing</li>
            <li>Completed Certification</li>
            <li>Save your budget</li>
            <li>Free Consultation</li>
          </ul>
        </div>

        <div className="infocompany-part3" data-aos="fade-right">
          <button className="infocompany-part2-btn">Learn More</button>
          <div className="infocompany-part3-img-p">
            <img src={image5} alt="Client 1" />
            <img src={image6} alt="Client 2" />
            <img src={image7} alt="Client 3" />
            <img src={image8} alt="Client 4" />
            <p>5.2+ satisfied clients</p>
          </div>
        </div>

        <img className="infocompany-main" src={image9} alt="Main" data-aos="fade-left" />
        <img className="infocompany-main2" src={image10} alt="Decor 1" data-aos="fade-left" />
        <img className="infocompany-main3" src={image11} alt="Decor 2" data-aos="fade-left" />
      </div>

      {/* Discover Section */}
      <div className="discoverinfo">
        <h1 className="destination-title" data-aos="fade-left">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" />
          &nbsp;Travel Destination&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>

        <h1 data-aos="fade-left" className="discoverinfo-title">Discover the touch of Nature</h1>
        <p data-aos="fade-right" className="discoverinfo-discript">
          Our clients rave about our exceptional seamless experiences that exceeded their expectations
        </p>

        <div data-aos="fade-left" className="discoverinfo-img">
          <div className="hover-image">
            <img src={image12} alt="Mountains" />
            
            <div className="hover-text">Beautiful tropical beach sea with umbrella
              chair around suimming  pool
            </div>
          </div>
          <div className="hover-image">
            <img src={image13} alt="Nature Walk" />
            <div className="hover-text">Beautiful tropical beach sea with umbrella
              chair around suimming  pool
            </div>
          </div>
          <div className="hover-image">
            <img src={image14} alt="Wildlife" />
            <div className="hover-text">Beautiful tropical beach sea with umbrella
              chair around suimming  pool
            </div>
          </div>
          <div className="hover-image">
            <img src={image15} alt="Adventure" />
            <div className="hover-text">Beautiful tropical beach sea with umbrella
              chair around suimming  pool
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
