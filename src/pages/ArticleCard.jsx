import React from 'react';
import './ArticleCard.css';
import { FaClock, FaRegComment, FaUser } from 'react-icons/fa';

const articles = [
  {
    title: "Unleashing Creativity: Vini Rukhana, The Visionary Behind Divine Space Digital Technology",
    author: "Bhavna Batra",
    date: "1 Day Ago",
    comments: 0,
    readTime: "7 Mins",
    description:"Meet Vini Rukhana, the vibrant Director of Divine Space Digital Technology, who has become a light of inspiration in the world of entrepreneurship. “Empowered women empower the world.” These words encapsulate the journey of Vini Rukhana. As the Director, she has been instrumental in transforming the digital landscape with her innovative solutions and creative approach….",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  },
  {
    title: "Meet Alla Naumova, a holistic wellness advocate and founder of Your Wellness Muse",
    author: "Womenpreneur Middle East Staff",
    date: "1 Day Ago",
    comments: 0,
    readTime: "30 Mins",
    description: "Alla Naumova is a celebrated wellness expert, advocate for holistic health, nutritionist, creator of fitness methodologies, and a coach for mental agility. As the founder of Your Wellness Muse and the author of the “Five Transformations Journal,” Alla has devoted her career to championing a harmonious approach to health and well-being. Her distinctive philosophy weaves...",
    categories: ["BUSINESS", "EMPOWERMENT", "ENTREPRENEUR", "FITNESS", "INSPIRING"],
    imageUrl: "https://womenpreneurme.com/wp-content/uploads/2024/07/vini04-600x400.jpg"
  }

];

const ArticleCard = ({ article }) => (
  <div className="article-card">
      
    <img src={article.imageUrl} alt="Article" className="article-image" />
    
    <div className="article-content">
      <h2 className="article-title">{article.title}</h2>
      <div className="article-meta">
        <span><FaUser /> {article.author}</span>
        <span><FaClock /> {article.date}</span>
        <span><FaRegComment /> {article.comments}</span>
        <span>{article.readTime}</span>
      </div>
      <p className="article-description">{article.description}</p>
      <div className="article-categories">
        {article.categories.map((category, index) => (
          <span key={index} className="article-category">{category}</span>
        ))}
      </div>
      <a href="#" className="article-readmore">Read More </a>
      <hr/>
    </div>
    <hr/>
  </div>
);

function ArticleList() {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
