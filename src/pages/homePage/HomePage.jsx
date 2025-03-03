import React from 'react';
import BreakingNews from '../../components/homePage/BreakingNews';
import Banner from '../../components/homePage/Banner';
import NewsSlider from '../../components/homePage/NewsSlider';
import NewsSection from '../../components/Shared/NewsSection';

// images 
import news1 from '/images/newsPic/1.webp';
import news2 from '/images/newsPic/3.png';
import news3 from '/images/newsPic/5.webp';

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <BreakingNews />
     </div>
      <div className="">
        <Banner />
        <NewsSlider />
        <NewsSection mainImg={news1} category={'Money'} flexReverse={false} />
        <NewsSection mainImg={news2} category={'Innovation'} flexReverse={true} />
        <NewsSection mainImg={news3} category={'Lifestyle'} flexReverse={false} />
        <NewsSection mainImg={news1} category={'Billionaires'} flexReverse={true} />
        <NewsSection mainImg={news3} category={'Leadership'} flexReverse={false} />

      </div>
    </div>
  );
};

export default HomePage;