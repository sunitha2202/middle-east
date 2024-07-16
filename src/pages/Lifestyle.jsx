import React from 'react';
import './Aspiring.css';
import Head from '../components/common/header/Head';

function Lifestyle() {
  return (
    <div>
      <Head/>
    
    <div className="aspiring">
      <div className="container1">
        <header className="top">
          <h1>Lifestyle</h1>
          <p>Empowering aspiring women with inspiration, resources, and support to chase their dreams and create a life of purpose and fulfillment.</p>
        </header>
        <div className="articleCard">
          <div className="articleCardImage">
            <img src="https://womenpreneurme.com/wp-content/uploads/2024/07/Mina01-600x400.jpg" alt="Lesia S" />
            <div className="labels">
              <span className="label">ASPIRING</span>
              <span className="label">BUSINESS</span>
              <span className="label">EMPOWERMENT</span>
              <span className="label">ENTREPRENEUR</span>
              <span className="label">INSPIRING</span>
            </div>
          </div>
          <div className="articleCardContent">
<h2>From Courtrooms to Catwalks: Mina Pejovic’s Journey of Elegance and Empowerment</h2>
        <p>Lesia S, is a life coach, global speaker, and founder of the LES Manifestation Academy, where she teaches emotional intelligence to over 300 students worldwide. With a mission to help high-achievers create the life they desire, Lesia uses her unique “Exchange method of manifestation” to guide her students in attracting their dream careers, relationships, and...</p>
            <div className="footer">
              <span>Womenpreneur Middle East Staff</span>
              <span>3 Months Ago</span>
              <span>0</span>
              <span>7 Mins</span>
            </div>
            <a href="#read-more">Read More</a>
          </div>
        </div>
        <div className="articleCard">
          <div className="articleCardImage">
            <img src="https://womenpreneurme.com/wp-content/uploads/2024/04/article-2.jpeg" alt="Demi Howell" />
            <div className="labels">
              <span className="label">ASPIRING</span>
              <span className="label">BEAUTY</span>
              <span className="label">BUSINESS</span>
              <span className="label">EMPOWERMENT</span>
              {/* <span className="label">ENTREPRENEUR</span> */}
              <span className="label">FASHION</span>
            </div>
          </div>
          <div className="articleCardContent">
            <h2>From Hustle to Harmony: Demi Howell, Finding Peace in Entrepreneurship</h2>
            <p>In the bustling city of Huntsville, Alabama, resides the infamous Demi Howell whose entrepreneurial journey embodies resilience, innovation, and a commitment to making a difference. Demi Howell, a Huntsville native, has not only carved a niche for herself in the competitive...</p>
            <div className="footer">
              <span>Womenpreneur Middle East Staff</span>
              <span>3 Months Ago</span>
              <span>0</span>
              <span>10 Mins</span>
            </div>
            <a href="#read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Lifestyle;
