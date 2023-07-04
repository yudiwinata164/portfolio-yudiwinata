import React from "react";

const Footer = () => {
    return  <footer class="bg-slate-800 pt-24 pb-12">
    <div class="container mx-auto lg:px-28">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
          <h2 class="mb-5 text-4xl font-bold text-slate-300">Yudi Winata</h2>
          <h3 class="mb-2 text-2xl font-bold">Hubungi Kami</h3>
          <p>dkyudi.yudi@gmail.com</p>
          <p>Jalan Raya I Wayan Lunga, Tegallalang</p>
          <p>Gianyar, Bali</p>
        </div>
        <div class="mb-12 w-full px-4 md:w-1/3">
          <h3 class="mb-5 text-xl font-semibold text-slate-300">Kategori Tulisan</h3>
          <ul class="text-slate-300">
            <li>
              <a href="/" class="mb-3 inline-block text-base hover:text-sky-600">Programming</a>
            </li>
            <li>
              <a href="/" class="mb-3 inline-block text-base hover:text-sky-600">Teknologi</a>
            </li>
            <li>
              <a href="/" class="mb-3 inline-block text-base hover:text-sky-600">Gaya Hidup</a>
            </li>
          </ul>
        </div>
        <div class="mb-12 w-full px-4 md:w-1/3">
          <h3 class="mb-5 text-xl font-semibold text-white">Tautan</h3>
          <ul class="text-slate-300">
            <li>
              <a href="/" class="mb-3 inline-block text-base hover:text-sky-600">Beranda</a>
            </li>
            <li>
              <a href="/about" class="mb-3 inline-block text-base hover:text-sky-600">About</a>
            </li>
            <li>
              <a href="/contact" class="mb-3 inline-block text-base hover:text-sky-600">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      
        <p class="text-center md:text-end text-sm font-medium text-slate-500">
        &copy; Dibuat Oleh <a href="https://instagram.com/yudiwinata164._" target="_blank" class="font-bold text-sky-600">Yudi Winata</a> - UAS Fullstack 2023
        </p>
      </div>
  </footer>
}

export default Footer;
