import React from "react";
import {FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="relative py-8 overflow-hidden bg-gray">
         <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-8">
               <div className="w-auto p-8">
                  <a href="#">
                     <div className="inline-flex items-center">
                        <span className="ml-4 text-lg font-bold">
                           Food <span className="text-yellow">Zone</span>
                        </span>
                     </div>
                  </a>
               </div>
               <div className="w-auto p-8">
                  <ul className="flex flex-wrap items-center -m-5">
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Privacy Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Terms of Service
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Return Policy
                        </a>
                     </li>
                     <li className="p-5">
                        <a
                           className="font-medium text-gray-600 hover:text-gray-700"
                           href="#">
                           Contact Us
                        </a>
                     </li>
                  </ul>
                  <p className="text-center my-3">Made with <span style={{color:"orange"}}>Hunger</span> by @nkit</p>
               </div>
               <div className="w-auto p-8">
                  <div className="-m-1.5 flex flex-wrap">
                     <div className="w-auto p-1.5">
                        <a href="https://github.com/Mr-Ankitpandey">
                           <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                              <FaGithub />
                           </div>
                        </a>
                     </div>
                     <div className="w-auto p-1.5">
                        <a href="https://www.linkedin.com/in/ankitpandey101/">
                           <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:border-gray-400">
                              <FaLinkedinIn />
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
