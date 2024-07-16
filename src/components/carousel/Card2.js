import React from "react";
import "./Card2.css";
import { BiCategory } from "react-icons/bi";

const categories = [
  {
    to: "categories/BEAUTY",
    imgSrc:
      "https://womenpreneurme.com/wp-content/uploads/2023/06/mashael_bin_saedan-768x512.jpg",
    alt: "img1",
    description: "BEAUTY",
    ahref:"https://womenpreneurme.com/guerlain-collabs-with-moroccan-artist-ghizlane-agzenai-for-new-oud-collection/",
      title:"Guerlain Collabs with Moroccan Artist Ghizlane Agzenaï for New Oud Collection",
    className: "grid-one",
  },
  {
    to: "categories/skin-care",
    imgSrc:
    "https://womenpreneurme.com/wp-content/uploads/2024/01/successful-entrepreneur-768x479.jpg",
     alt: "img2",
    description: "SKINCARE",
    ahref:"https://womenpreneurme.com/guerlain-collabs-with-moroccan-artist-ghizlane-agzenai-for-new-oud-collection/",
      title:"Guerlain Collabs with Moroccan Artist Ghizlane Agzenaï for New Oud Collection",
    className: "grid-two",
  },
  {
    to: "categories/kitchen",
    imgSrc:
   " https://womenpreneurme.com/wp-content/uploads/2023/07/IMG-20230727-WA0027.jpg",
    alt: "img3",
    description: "FASHION",
    ahref:"https://womenpreneurme.com/guerlain-collabs-with-moroccan-artist-ghizlane-agzenai-for-new-oud-collection/",
      title:"Empowering Saudi Women: Females Lead the Way in On-the-Job Training Program",
    className: "grid-three",
  },
  {
    to: "categories/electronics",
    imgSrc:
    "https://womenpreneurme.com/wp-content/uploads/2023/09/IMG-20230903-WA0008.jpg",
    alt: "img4",
    description: "BUSINESS",
    ahref:"https://womenpreneurme.com/guerlain-collabs-with-moroccan-artist-ghizlane-agzenai-for-new-oud-collection/",
      title:"Empowering Saudi Women: Females Lead the Way in On-the-Job Training Program",
    className: "grid-four-low",
  },
];

export default function Card2() {
  return (
    <div className="home-container">
      <div className="container">
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className={`featured ${category.className}`}>
              <a Href={category.to}>
                <div id={`img${index + 1}`} className="lil-overlay"></div>
                <img src={category.imgSrc} alt={category.alt} />
                <p className="main-description">{category.description}</p>
                <div id={`a${index + 1}`} className="text"></div>
                <a href={category.ahref} title={category.title} />
                <p className="title">{category.title}</p>
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}