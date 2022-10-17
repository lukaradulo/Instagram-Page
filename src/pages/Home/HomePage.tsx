import React from "react";
import './HomePage.css';
import Post from "./Post";

const HomePage: React.FC = () => {
  return (
    <div className='home-page-content'>
      <Post/>
    </div>
  );
}

export default HomePage;
