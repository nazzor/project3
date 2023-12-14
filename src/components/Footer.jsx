import React from 'react'
import { Typography } from "@material-tailwind/react";
 
function Footer() {
  return (
    <footer className="max-w-[1400px] bg-white mx-auto p-8">
    <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <a href="/">
          <h1 className='text-2xl lg:text-3xl px-2'>
            The Best <span className='font-bold text-blue-500'>Coupons</span>
          </h1>
        </a>        
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <Typography color="blue-gray" className="text-center mt-8 font-normal">
        &copy; 2023 Coupons
      </Typography>
    </footer>
  );
}
export default Footer;