import React from 'react';
import mainImg from '/images/newsPic/mainNews.webp'
import subImg from '/images/newsPic/subNews.webp'
import { IoIosBookmark, IoMdShare } from 'react-icons/io';
const NewsDetails = () => {
  return (
    <div>
      <div className="bg-black text-white ">
        <p className="text-3xl lg:text-5xl py-20 font-Playfair lg:w-1/2 text-center mx-auto">
          Billionaire Robert Kuok’s Grandson Drives $10 Billion Bet On AI Data Centers
        </p>
      </div>
      <div className="">
        <img src={mainImg} alt="" />
      </div>
      <div className="lg:w-1/2 px-5 mx-auto">
        <div className="border-b space-y-8 pb-5">
          <p className="text-[12px]">
            Kuok Meng Wei, managing director and CEO of K2 Strategic. <br />
            Photographs by Munster Cheong for Forbes Asia
          </p>
          <p className="text-[12px]">
            Feb 26, 2025, 09:21pm ESTUpdated Feb 27, 2025, 03:41pm EST
          </p>
        </div>

        <div className="border-b pb-5 my-10">
          <p className="flex items-center py-5 gap-3 text-blue-500">
            <IoMdShare />
            <IoIosBookmark />
            Save Article
          </p>
          <p className="text-[12px]">
            This story appears in the February/March 2025 issue of Forbes Magazine. Subscribe
          </p>
          <p className="text-2xl font-semibold font-Playfair">
            Kuok Meng Wei, whose grandfather was once called the world’s shrewdest businessman by Forbes, is leading his family into what the 41-year-old describes as the hottest industry in decades.
          </p>
          <p className="text-[12px]">
            By Jonathan Burgos, Forbes Staff
          </p>
        </div>

        <div className="">
          <p className="font-Playfair text-xl">
            <span className='text-9xl font-bold'>T</span>he roots of Kuok Group, the conglomerate founded by legendary business tycoon Robert Kuok, go back to 1949 in Malaysia’s Johor state, where he and his brothers started a business trading everyday items such as sugar, rice and flour. More than 75 years later, once-sleepy Johor, cashing in on its plentiful land and proximity to Singapore, has transformed itself into a booming tech hub. There, in a homecoming of sorts, the Kuok Group has latched on to the opportunity of selling a 21st century essential: data storage.

            Last October, the group’s privately held unit K2 Strategic, led by the patriarch’s 41-year-old grandson Kuok Meng Wei, opened a 60 megawatt (MW) data center—capacity is measured by power consumption—at the 700-acre Sedenak Tech Park, one of a dozen digital hubs multiplying across Johor. Located about 30 kilometers from the century-old causeway connect-ing Singapore and state capital Johor Bahru, it has drawn some of the biggest data center players from around the world.
          </p>
          <img src={subImg} className='w-full py-10' alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;