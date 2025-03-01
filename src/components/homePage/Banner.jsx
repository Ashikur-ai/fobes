import React from 'react';
import DropDown from '../common/DropDown';
import banner from '/images/image1.webp'
import { items, subNewsData } from '../../libs/DataBase';
import { Button } from 'flowbite-react';
import { FaRegBookmark } from 'react-icons/fa';
import sidebarImg from '/images/sidebarImg.webp'
import { Checkbox, Input, Tabs } from 'antd';

const Banner = () => {
  return (
    <div className='md:w-10/12 mx-auto px-2 pt-14 '>
      <div className="border-b border-black">
        <DropDown />
      </div>
      <div className="md:flex mt-10">
        <div className="md:w-[70%] md:pr-4 border-r">
          {/* main news  */}
          <div className="">
            <img src={banner} alt="" className='transition delay-300 duration-200 ' />
            <div className="py-5 space-y-2">
              <p className="font-Playfair font-semibold text-2xl text-center">
                Billionaire Robert Kuok’s Grandson Drives $10 Billion Bet On AI Data Centers
              </p>
              <p className="text-center text-[12px]">ByJonathan Burgos, Forbes Staff</p>
              <p className='text-center'>
                Kuok Meng Wei, whose grandfather was once called the world’s shrewdest businessman by Forbes, is leading his family into what the 41-year-old describes as the hottest industry in decades.
              </p>
            </div>
          </div>

          {/* sub news  */}
          <div className="grid md:grid-cols-2 gap-2 border-t py-10">
            {
              subNewsData?.map(item =>
                <div key={item?.id} className="">
                  <img src={item?.image} alt="" className='h-72 w-full object-cover' />
                  <p className="font-Playfair text-xl font-semibold">{item?.title}</p>
                </div>
              )
            }


          </div>
          {/* quote of the day  */}
          <div className="border border-[#EAE4C8] p-6 rounded-lg text-center max-w-3xl mx-auto shadow-sm">
            <div className="relative">
              <h2 className="uppercase text-gray-500 text-sm tracking-wide before:content-[''] before:absolute before:w-16 before:h-[2px] before:bg-[#EAE4C8] before:left-0 before:top-1/2 after:content-[''] after:absolute after:w-16 after:h-[2px] after:bg-[#EAE4C8] after:right-0 after:top-1/2">
                Quote of the Day
              </h2>
            </div>
            <p className="text-center font-Playfair text-xl font-semibold mt-4">
              “Coaching isn’t social work, but it’s more than just a game—it’s a heartfelt vocation, in which you are powerfully bonded to students who need you.”
            </p>
            <p className="font-semibold mt-3">
              <span className="text-black">Pat Summitt</span>, Coach and Athlete
            </p>
          </div>


        </div>

        {/* sidebar  */}
        <div className="md:w-[30%] px-3">
          <div className="space-y-3">
            <p className="font-Playfair text-xl font-semibold">New For You</p>
            <p className="text-[10px]">
              Sign in or Create an account for tailored recommendations based on your interests and preferences.
            </p>
            <Button type='primary'>Sign In or Register</Button>
          </div>
          <div className="pt-20">
            <div className="flex gap-1 border-b pb-4 mt-5">
              <div className="w-[70%]">
                <p className="font-Playfair text-[15px] font-semibold">
                  Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                </p>
                <div className="flex justify-end">
                  <FaRegBookmark className='text-blue-600' />
                </div>
              </div>
              <div className="w-[30%]">
                <img src={sidebarImg} className='w-full h-full' alt="" />
              </div>
            </div>

            <div className="flex gap-1 border-b pb-4 mt-5">
              <div className="w-[70%]">
                <p className="font-Playfair text-[15px] font-semibold">
                  Philippine Billionaire Sy Family’s SM Investments Sets $1 Billion Record
                </p>
                <div className="flex justify-end">
                  <FaRegBookmark className='text-blue-600' />
                </div>
              </div>
              <div className="w-[30%]">
                <img src={sidebarImg} className='w-full h-full' alt="" />
              </div>
            </div>
          </div>

          {/* tab section  */}
          <Tabs
            defaultActiveKey="1"
            items={items}
            // onChange={onChange}
            className="[&_.ant-tabs-nav]:border-b [&_.ant-tabs-tab-active]:text-red-600 [&_.ant-tabs-ink-bar]:bg-red-600"
          />
        </div>
      </div>
      <div className="border-t my-5">
        <p className="font-semibold">
          Forbes Daily: Our best stories, exclusive reporting and Forbes perspectives on the day’s top news, plus the inside scoop on the world's most important entrepreneurs.
        </p>
        <Checkbox>
          Get the latest news on special offers, product updates and content suggestions from Forbes and its affiliates.
        </Checkbox>
        <div className="flex gap-2">
          <div className="w-[70%] md:w-[90%]">
            <Input placeholder="Email Address" className='placeholder-gray-400' />
         </div>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;