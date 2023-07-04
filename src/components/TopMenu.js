import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cv from "../img/CV_I Made Yudi Ardi Winata-2023.pdf";
import { useState } from "react";



const TopMenu = () => {

  const [theme,setTheme] = useState('');
  const element = document.documentElement

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  useEffect(()=>{
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        break;
      case 'light':
        element.classList.remove('dark')
        break;
      default:
        break;
    }
  },[theme]);
    return <div>
      <nav class="bg-white bg-opacity-50  top-0 left-0 w-full  fixed items-center z-10 backdrop-filter backdrop-blur-lg dark:bg-transparent">
    <div class="container mx-auto lg:px-16">
      <div class="flex items-center justify-between  py-4 md:px-10 px-7">
        <div class="px-4">
          <a href="/" class="font-bold text-lg text-sky-600 block py-6 lg:text-2xl dark:text-slate-50">Yudi Winata</a>
        </div>
        <div class="flex items-center px-4">
        <Link className="text-slate-800 ml-5 hover:text-sky-600 dark:text-slate-50 hover:scale-110 transition" to="/">
          <i className="fa fa-home pr-2 "/>Home
        </Link>
        <Link className="text-slate-800 ml-5 hover:text-sky-600 dark:text-slate-50 hover:scale-110 transition" to="/about">
          <i className="fa fa-cog pr-2 "/>About
        </Link>
        <Link className="text-slate-800 ml-5 hover:text-sky-600 dark:text-slate-50 hover:scale-110 transition" to="/contact">
          <i className="fa fa-phone pr-2"/>Contact
        </Link>
        </div>
        <div class="mt-3 flex items-center pl-8 lg:mt-0">
          <div class='text-xs font-bold bg-sky-600 px-3 py-2 text-slate-50 rounded-full hover:bg-sky-700 hover:scale-105 transition duration-500'>
            <a href={Cv}>Download CV</a>
          </div>
          <div class=' py-2 px-3 mx-3  text-xl rounded-2xl dark:text-slate-50 hover:scale-110 transition'>
          {
            options?.map(opt=>(
              <button key={opt.text} onClick={() => setTheme(opt.text)} className={`mx-1 pt-1 ${theme === opt.text && "text-sky-600"}`}>
              <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))
          }
          </div>
        </div>

      </div>
    </div>
  </nav>
    </div>
}

export default TopMenu;