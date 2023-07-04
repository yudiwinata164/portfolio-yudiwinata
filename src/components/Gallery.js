import React from 'react';
import Duyung from '../img/vektor_duyung.png';
import Lum from '../img/laras_uttara_mardawa.png';
import Smudge from '../img/smudge.jpg';
import Poster from '../img/poster_event.png';


const Home = () => {
  return (
    <section class="bg-slate-200 pt-36 pb-16 dark:bg-slate-900">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">Portfolio</h4>
            <h2 class="mb-4 text-3xl font-bold text-sky-600 sm:text-4xl lg:text-5xl hover:scale-110 transition duration-500">My Gallery</h2>
            <p class="text-md font-medium dark:text-slate-400 md:text-lg">
              Beberapa karya yang pernah dibuat
            </p>
          </div>
        </div>

        <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12 md:space-x-5">
          <div class="mb-12 p-2 md:w-1/3 flex bg-slate-50 shadow-md dark:bg-slate-800 rounded-3xl hover:scale-105 transition duration-500">
            <div class="overflow-hidden rounded-md ">
              <img src={Smudge} alt="Landing Page" width="w-full" className='shadow-md rounded-2xl' />
              <div class="p-2">
                <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-slate-50">Smudge Painting</h3>
                <p class="text-base font-medium dark:text-slate-400">Merupakan karya editing foto dari jackie chan yang diubah menyerupai lukisan cat air menggunakan Photoshop.</p>
              </div>
            </div>
          </div>
          <div class="mb-12 p-2 md:w-1/2 flex bg-slate-50 shadow-md dark:bg-slate-800 rounded-3xl hover:scale-105 transition duration-500 ">
            <div class="overflow-hidden rounded-md ">
              <img src={Duyung} alt="Landing Page" width="w-full" className='shadow-md rounded-2xl' />
              <div class="p-2">
                <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-slate-50">Vektor</h3>
                <p class="text-base font-medium dark:text-slate-400">Merupakan karya ilustrasi membuat karakter Putri Duyung.</p>
              </div>
            </div>
          </div>
          <div class="mb-12 p-2 md:w-1/2 flex bg-slate-50 shadow-md dark:bg-slate-800 rounded-3xl hover:scale-105 transition duration-500">
            <div class="overflow-hidden rounded-md ">
              <img src={Lum} alt="Landing Page" width="w-full" className='shadow-md rounded-2xl' />
              <div class="p-2">
                <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-slate-50">Desain Logo</h3>
                <p class="text-base font-medium dark:text-slate-400">Logo salah satu komunitas yang bergerak di bidang seni gamelan bali.</p>
              </div>
            </div>
          </div>
          <div class="mb-12 p-2 md:w-1/3 flex bg-slate-50 shadow-md dark:bg-slate-800 rounded-3xl hover:scale-105 transition duration-500">
            <div class="overflow-hidden rounded-md ">
              <img src={Poster} alt="Landing Page" width="w-full" className='shadow-md rounded-2xl' />
              <div class="p-2">
                <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-slate-50">Poster</h3>
                <p class="text-base font-medium dark:text-slate-400">Poster salah satu event yang diselenggarakan UKM Fotografi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home