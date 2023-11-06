import React from 'react'
import logo from '../assets/logo.png'

export default function MyNav() {
  return (
    <header class="max-w-screen-lg mx-auto">
        <nav class=" bg-white border-gray-200 ">
            <div class=" flex flex-wrap items-center justify-evenly mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img src={logo} class="h-14 mr-3 rounded-xl" alt="dertaste Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">dertaste</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <a href="/" class="block py-2 pl-3 pr-4 font-bold rounded md:bg-transparentv md:px-0 md:py-2 "
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-0 md:py-2 ">About</a>
                        </li>
                        <li>
                            <a href="./html/categories.html"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-0 md:py-2 ">Categories</a>
                        </li>
                        <li>
                            <a href="/"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-0 md:py-2 ">Store</a>
                        </li>
                        
                    </ul>
                        
                </div>
                    <button className='py-2 px-4 bg-[#F9FBE7]'>
                        Login
                    </button> 
            </div>
        </nav>

    </header>
  )
}
