import React from 'react';
import BreakingNews from '../../components/homePage/BreakingNews';
import Banner from '../../components/homePage/Banner';
import NewsSlider from '../../components/homePage/NewsSlider';

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <BreakingNews />
     </div>
      <div className="">
        <Banner />
        <NewsSlider/>
      </div>
    </div>
  );
};

export default HomePage;