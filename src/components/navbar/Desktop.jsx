import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { Button } from 'antd';
import { FiSearch } from 'react-icons/fi';
import SideBar from '../Shared/SideBar';

const Desktop = () => {
  return (
    <div>
      <div className='py-2 w-11/12 mx-auto text-white flex items-center justify-between'>
        <div className="flex justify-center items-center gap-3">
          <SideBar />
          <p className="">Subscribe to newsletter</p>
          <MdOutlineMail className='text-2xl' />
        </div>
        <div className="text-4xl font-semibold font-Playfair">
          Forbes
        </div>
        <div className="flex items-center gap-3">
          <Button type='primary' className='bg-red-600 text-lg font-bold'>
            Subscribe: Less than $1.50/wk
          </Button>
          <p>Sign In</p>
          <FiSearch className='text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Desktop;