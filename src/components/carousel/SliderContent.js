import React from "react";
import moment  from "moment";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <a href={slide.ahref} title={slide.title} />
          <p className="slide-title">{slide.title}</p>     
           <p className="slide-text">{slide.description}</p>
           <a href={slide.ahref} title={slide.category} />
 
          <p className="slide-category">{slide.category}</p>
          <time className="moment">{moment().startOf('day').fromNow()}</time>
        </div>
        
      ))}
    </section>
  );
}

export default SliderContent;
