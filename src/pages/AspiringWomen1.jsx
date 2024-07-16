import React from 'react';
import './AspiringWomen.css';

const AspiringWomen1 = () => {
  const cards = [
    {
      title: "Manifestation Formula: Lesia’s inspiring story on how to glow...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/04/article-2.jpeg"
    },
    {
      title: "From Hustle to Harmony: Demi Howell, Finding Peace in...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/04/Demi02-209x300.jpg"
    },
    {
      title: "Olatz Bilbao: Redefining Entrepreneurship and...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/04/article-2.jpeg"
    },
    {
      title: "Unveiling Destinies: Guidance Angel Jeni, the Empathic Tarot...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/04/Jeni-01-225x300.jpg"
    },
    {
      title: "Sparkling Sisters: Championing Emerging Design Talent in the...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/04/Jeni-01-225x300.jpg"
    },
    {
      title: "Reviving Confidence, One Smile at a Time: Dr. Sana Nabeel,...",
      author: "Womenpreneur Middle East Staff",
      imgSrc: "https://womenpreneurme.com/wp-content/uploads/2024/03/4.jpg-Sana2.jpg"
    }
  ];

  return (
    <div className="aspiring-women-container-wrapper">
      <h2 className="aspiring-women-heading">
        <span>Aspiring Women</span>
        </h2>
      <div className='line'></div>
      <div className="aspiring-women-container">
        {cards.map((card, index) => (
          <div className="aspiring-women-card" key={index}>
            <div className="aspiring-women-card-image">
              <img src={card.imgSrc} alt={card.title} />
            </div>
            <div className="aspiring-women-card-content">
              <h2 className="aspiring-women-card-title">{card.title}</h2>
              <div className="aspiring-women-card-author">{card.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AspiringWomen1;
