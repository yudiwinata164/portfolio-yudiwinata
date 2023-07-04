import React from 'react'
import Main from '../layouts/Main'

const Contact = () => {
  return (
    <Main>
      <section class="">
      <div class="container pt-40 pb-32 dark:bg-slate-900">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h2 class="mb-4 text-3xl font-bold text-sky-600 sm:text-4xl lg:text-5xl dark:text-slate-50 hover:scale-105 transition duration-300">Hubungi Kami</h2>
            <p class="text-md font-medium text-secondary md:text-lg dark:text-slate-400">Jangan lupa berikan saran, masukkan, dan pertanyaan anda !</p>
          </div>
        </div>

        <form>
          <div class="w-full lg:mx-auto lg:w-2/3">
            <div class="mb-8 w-full px-4">
              <label for="name" class="text-base font-bold text-sky-600">Nama</label>
              <input type="text" id="name" class="w-full rounded-md bg-slate-200 p-3 text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600" />
            </div>
            <div class="mb-8 w-full px-4">
              <label for="email" class="text-base font-bold text-sky-600">Email</label>
              <input type="email" id="email" class="w-full rounded-md bg-slate-200 p-3 text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600" />
            </div>
            <div class="mb-8 w-full px-4">
              <label for="message" class="text-base font-bold text-sky-600">Pesan</label>
              <textarea type="email" id="email" class="h-32 w-full rounded-md bg-slate-200 p-3 text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"></textarea>
            </div>
            <div class="w-full px-4">
              <button class="hover:scale-110 transition rounded-full bg-sky-600 py-3 px-8 text-base font-semibold text-white duration-500 hover:bg-sky-700">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    </Main>
  )
}

export default Contact