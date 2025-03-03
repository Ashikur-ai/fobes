import React from 'react';
import img1 from '/images/sub1.webp'
import { FaArrowRight, FaRegBookmark } from 'react-icons/fa';
import sidebarImg from '/images/sidebarImg.webp'
import money2 from '/images/money/money3.webp'
import { Link } from 'react-router-dom';


const NewsSection = ({ mainImg, category, flexReverse }) => {
  return (
    <div className='md:w-10/12 mx-auto  border-t-4 border-black border-b-4 pb-10'>
      <div className="flex gap-3 items-center border-b border-black my-5 py-4">
        <p className="text-3xl">{category} </p>
        <FaArrowRight className='text-xl' />
      </div>
      <div className={`md:flex ${flexReverse ? 'flex-row-reverse' : ''}`}>
        <div className={`md:w-[70%] ${flexReverse ? 'border-l md:pl-4' : 'border-r md:pr-4'}`}>
          {/* main news  */}
          <div className="">
            <img src={mainImg} alt="" className='w-full border h-[50vh]' />
            <div className="py-5 space-y-2">
              <p className="font-Playfair font-semibold text-2xl text-center hover:underline">
                <Link to={'/news-details'}>
                  Billionaire Robert Kuok’s Grandson Drives $10 Billion Bet On AI Data Centers
                </Link>

              </p>
              <p className="text-center text-[12px] font-bold">ByJonathan Burgos, Forbes Staff</p>
            </div>
          </div>


          {/* other news  */}
          <div className="md:flex border-t">
            <div className="md:border-r mr-3 mt-3">
              <div className="">
                <div className="flex flex-row-reverse gap-1 pb-4 mt-5">
                  <div className="w-[70%]">
                    <p className="font-Playfair text-[15px] font-semibold">
                      Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                    </p>

                  </div>
                  <div className="w-[30%]">
                    <img src={sidebarImg} className='w-full h-full' alt="" />
                  </div>
                </div>

                <div className="flex flex-row-reverse gap-1 pb-4 mt-5">
                  <div className="w-[70%]">
                    <p className="font-Playfair text-[15px] font-semibold">
                      Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                    </p>
                    <div className="flex justify-end">
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <img src={sidebarImg} className='w-full h-full' alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="">
                <div className="flex flex-row-reverse gap-1 pb-4 mt-5">
                  <div className="w-[70%]">
                    <p className="font-Playfair text-[15px] font-semibold">
                      Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                    </p>

                  </div>
                  <div className="w-[30%]">
                    <img src={sidebarImg} className='w-full h-full' alt="" />
                  </div>
                </div>

                <div className="flex flex-row-reverse gap-1 pb-4 mt-5">
                  <div className="w-[70%]">
                    <p className="font-Playfair text-[15px] font-semibold">
                      Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                    </p>
                    <div className="flex justify-end">
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <img src={sidebarImg} className='w-full h-full' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="md:ml-3 mx-2 md:w-[30%] space-y-4">
          <div className="">
            <img src={money2} alt="" />
            <p className="font-Playfair font-bold">
              Tax Breaks: The Tax View From The Top Of The World Edition
            </p>
            <p className="text-[12px] font-semibold">
              By Kelly Phillips Erb, Forbes Staff
            </p>
          </div>

          <div className="">
            <img src={money2} alt="" />
            <p className="font-Playfair font-bold">
              Tax Breaks: The Tax View From The Top Of The World Edition
            </p>
            <p className="text-[12px] font-semibold">
              By Kelly Phillips Erb, Forbes Staff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;