import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { Button } from 'antd';
import { FiSearch } from 'react-icons/fi';
import SideBar from '../Shared/SideBar';

const Mobile = () => {
  return (
    <div>
      <div>
        <div className='py-2 w-11/12 mx-auto text-white flex items-center justify-between'>
          <div className="flex justify-center items-center gap-3">
            <SideBar />
            <p className="text-xl">Forbes</p>
          </div>
         
          <div className="flex items-center gap-3">
            <Button type='primary' className='bg-red-600 text-sm font-bold'>
              Join: $1.50/wk
            </Button>
            <p className='text-sm'>Sign In</p>
            <FiSearch className='text-xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;