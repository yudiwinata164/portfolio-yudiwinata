import React from 'react';
import Main from '../layouts/Main';
import Profile from '../img/profil.png';
import Gallery from '../components/Gallery'


const Home = () => {
  return (
    <>
    <Main>
      <section class="">
      <div class="container mx-auto px-5 pt-32 lg:pt-24 lg:px-28 pb-20 dark:bg-slate-800">
        <div class="flex flex-wrap">
          <div class="self-center px-4 lg:w-2/3">
            <h1 class="text-base font-semibold text-sky-600 lg:text-xl ">Hello, my name <span class="mt-1 block text-2xl lg:text-5xl font-bold text-slate-800 dark:text-slate-50">I Made Yudi Ardi Winata</span></h1>
            <h2 class="mb-5  font-medium text-slate-600 text-md lg:text-2xl ">Bukan Fullstack, tapi <span class="text-xl lg:text-3xl text-sky-600 font-semibold py-1 px-3 rounded-2xl hover:bg-sky-600 hover:text-slate-50 transition duration-500">Full stak</span></h2>
            {/* <p class="mb-10 font-medium leading-relaxed text-slate-600 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque ratione laudantium debitis delectus vero voluptatum magnam amet earum deleniti eius nesciunt,</p> */}

            <div class="rounded-full lg:mt-10  bg-sky-600 py-2 w-28 lg:w-36 text-xs lg:text-sm font-semibold text-center text-white hover:bg-sky-700 hover:scale-110 duration-500">
              <a href="https://wa.me/+6283114846954" >Hubungi Saya</a>
            </div>
          </div>
          <div class="mt-10 w-full lg:w-1/3  lg:pl-16">
            <img src={Profile} alt="Yudi Winata" className='z-10 hover:scale-110 transition duration-500'/>
          </div>
        </div>
      </div>
    </section>
    <Gallery/>
    </Main>
    
    </>

  )
}

export default Home