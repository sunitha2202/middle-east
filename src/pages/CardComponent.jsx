import React from 'react';
import './CardComponent.css';

const CardComponent = () => {
  return (
<div className='Card-container-wrapper'>
<h2 className="latest-posts-heading">Latest posts</h2>

    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img src="https://womenpreneurme.com/wp-content/uploads/2024/07/reem02-591x1024.jpg" alt="Dr. Reem Nouman" />
        </div>
        <div className="card-content">
          <div className="card-category">Business Empowerment</div>
          <h2 className="card-title">The Inspiring Journey of Dr. Reem Nouman</h2>
          <div className="card-details">
            <span className="card-author">Bhavna Batra</span>
            <span className="card-time">2 Hours Ago</span>
            <span className="card-comments">0 comments</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://womenpreneurme.com/wp-content/uploads/2024/07/IMG_2540.jpg" alt="Dr. Reem Nouman" />
        </div>
        <div className="card-content">
          <div className="card-category">Business Empowerment</div>
          <h2 className="card-title">The Inspiring Journey of Dr. Reem Nouman</h2>
          <div className="card-details">
            <span className="card-author">Bhavna Batra</span>
            <span className="card-time">2 Hours Ago</span>
            <span className="card-comments">0 comments</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://womenpreneurme.com/wp-content/uploads/2024/07/lubna-576x1024.jpg" alt="Dr. Reem Nouman" />
        </div>
        <div className="card-content">
          <div className="card-category">Business Empowerment</div>
          <h2 className="card-title">The Inspiring Journey of Dr. Reem Nouman</h2>
          <div className="card-details">
            <span className="card-author">Bhavna Batra</span>
            <span className="card-time">2 Hours Ago</span>
            <span className="card-comments">0 comments</span>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default CardComponent;
