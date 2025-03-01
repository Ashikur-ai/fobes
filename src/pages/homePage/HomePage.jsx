import React from 'react';
import BreakingNews from '../../components/homePage/BreakingNews';
import Banner from '../../components/homePage/Banner';

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <BreakingNews />
     </div>
      <div className="">
        <Banner/>
      </div>
    </div>
  );
};

export default HomePage;