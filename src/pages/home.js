import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Images
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
import image16 from "../page1images/Features-bg.webp";
import image17 from "../page1images/Feature-image-1.webp";
import image18 from "../page1images/Feature-image-2.webp";
import image19 from "../page1images/offer-bg-1.webp";
import image20 from "../page1images/tst-image-1.webp";
import image21 from "../page1images/test-bg.webp";
import image22 from "../page1images/quote-left.png";
import image23 from "../page1images/banner.webp";







// Data and styles
import { dest } from "../destination";
import "./home.css";

function Home() {
  const sliderRef = useRef(null);
  const destinationListRef = useRef(null);
  const [titleKey, setTitleKey] = useState(0);

  // Initialize AOS animation library on mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Refresh AOS animation when slider changes
  const resetAOS = () => {
    setTitleKey((prev) => prev + 1);
    AOS.refresh();
  };

  // Slider navigation handlers
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

      <div className="destination-list" ref={destinationListRef} data-aos="fade-right">
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

        <h1 data-aos="fade-left" className="discoverinfo-title">
          Discover the touch of Nature
        </h1>
        <p data-aos="fade-right" className="discoverinfo-discript">
          Our clients rave about our exceptional seamless experiences that exceeded their expectations
        </p>

        <div data-aos="fade-left" className="discoverinfo-img">
          {[image12, image13, image14, image15].map((img, i) => (
            <div key={i} className="hover-image">
              <img src={img} alt={`Discover ${i + 1}`} />
              <div className="hover-text">
                Beautiful tropical beach sea with umbrella chair around swimming pool
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="feature">
        <img src={image16} alt="Features Background"  />
        <h1 className="feature-title">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" data-aos="fade-left" />
          &nbsp;Working steps&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>
        <h1 className="feature-descript" data-aos="fade-left">Book your next trip in 3 steps</h1>

        <div className="feature-part2">
          <div>
            <h1>Choose destination</h1>
            <p>
              Choose your perfect destination from our curated list of breathtaking places. Whether you seek adventure,
              relaxation, or cultural experiences, we have something special waiting just for you. Start your journey today!
            </p>
          </div>

          <div>
            <h1>Make payment</h1>
            <p>
              Securely complete your payment with ease and confidence. We offer multiple trusted payment options to make
              your booking process smooth and hassle-free.
            </p>
          </div>

          <div>
            <h1>Reach Airport on Date</h1>
            <p>
              Arrive at the airport on time and stress-free. Plan your journey carefully to ensure a smooth start to your
              trip without any delays.
            </p>
          </div>
        </div>
        <img className="feature-img2" data-aos="fade-left" src={image17}/>
        <img className="feature-img3" data-aos="fade-right" src={image18}/>
      </div>

      <div className="offers">
        <img className="offers-img1" data-aos="fade-right" src={image19}/>
        <img className="offers-img2" data-aos="fade-left" src={image4}/>
        <div className="offers-info">
        <h1 className="offers-title">
          <FontAwesomeIcon icon={faPlane} className="airplane-icon" data-aos="fade-left" />
          &nbsp;35% offer&nbsp;
          <FontAwesomeIcon icon={faPlane} className="airplane-icon flipped" />
        </h1>
        <h1 className="offer-title2">Get Special Offers</h1>
        <p className="offerr-descript">Embark on an unforghettable journey with our exclusive tour special offer
           seize the moment and create your lasting memories
        </p>
        <button className="offer-learnmore">Learn More</button>
        <h1 class="discount-text">
  <span class="big-purple">40</span>
  <span class="stacked">
    <span class="black-percent">%</span><br />
    <span class="purple-off">off</span>
  </span>
</h1>

        </div>
        <div className="testimonal">

        <img className="testimonal-img1" src={image21}/>
        <img className="testimonal-img2" src={image21}/>
        <div className="testimonal-2">

       
        <h1 className="testimonal-title" >
          <FontAwesomeIcon data-aos="fade-left" icon={faPlane} className="airplane-icon" data-aos="fade-left" />
          &nbsp;Testimonials&nbsp;
          <FontAwesomeIcon data-aos="fade-right" icon={faPlane} className="airplane-icon flipped" />
        </h1>
        <h1 className="testimonal-saying" data-aos="fade-left">Whats Our Clients Saying</h1>
        <p className="testimonal-desc" data-aos="fade-left">Our clients rave about our exceptional the seamless experiences 
          that exceeds their expectations
        </p> </div>

        <div className="testimonal-feedback" data-aos="fade-right">
          <div className="testimonal-feedback-backward">
            <div className="testimonal-feedback-front">
            <img className="testimonal-feedback-img" src={image20}/>
            </div>
          </div>
          <div className="testimonal-feedback-info">
            <img className="testimonal-feedback-info-img" src={image22}/>
            <p className="testimonal-feedback-info-message">"Traveling with Font Wuest was truly an unforgettable experience. From the moment I booked my trip, their team was professional, responsive, and incredibly helpful. Every detail was perfectly planned — the accommodations were comfortable, the activities were well-paced, and the local guides were knowledgeable and friendly. I felt completely relaxed knowing everything was taken care of. This agency goes above and beyond to ensure a smooth, enjoyable journey. I’m already
               looking forward to planning my next adventure with Font Wuest!"</p>


               <div className="testimonal-stars">
    {[...Array(5)].map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
    ))}
  </div>
  
          </div>


        </div>

        



        </div>

        <div className="bookingplat" >
          <img className="bookingplat-img" data-aos="fade-bottom" src={image23}/>
          <div className="bookingplat-info">
          <h1 className="bookingplat-info-des" data-aos="fade-right">FRONTQUEST Is A World LeadingOnline Tour Booking Platform</h1>
          <button className="bookingplat-info-btn" data-aos="fade-left">Learn More</button>
          </div>


        </div>
        

      </div>
    </>
  );
}

export default Home;
