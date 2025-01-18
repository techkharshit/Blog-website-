import React from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import '../App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="parallax-container">
      <div className="content">
        <Header />
        <div className="py-24 mx-auto max-w-[720px] px-[25px]">
          <Blogs />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
