import React from 'react'
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <>
    <div className="flex mt-4 items-center justify-around">
    <img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/62595e8d5c26d9aaa31c8234/logo.jpg?d=1718879614263" alt="Logo" className="rounded-lg w-[25px]  h-[25px]"/>
    <div className='flex gap-2 items-center'>
    <input type="text" placeholder='Search Here' className="h-7 items-center"/>
    <Search size={20} className="items-center"/>
    </div>
    <div >
        <ul className="flex flex-row justify-around gap-7 ">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Cart</li>
        </ul>
    </div>
        </div>
    </>
  )
}

export default Header
