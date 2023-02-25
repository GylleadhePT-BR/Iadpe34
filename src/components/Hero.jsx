import React from 'react'
import logo from '../assets/logo.jpg'

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 sm:mx-16 mx-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover  w-full h-56 rounded-xl shadow-lg lg:rounded-xl lg:shadow-none md:h-96 lg:h-full"
          src="https://2.bp.blogspot.com/-f8tqCA4gBNg/Wl0VhfvrAXI/AAAAAAAAgyo/2uCORMd9Tk8YCBBIe2yy7vsQwUpJtwwjQCLcBGAs/s1600/WhatsApp%2BImage%2B2018-01-15%2Bat%2B18.50.51%25287%2529.jpeg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col justify-center items-start w-full max-w-xl px-4  md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 flex flex-col justify-center">
          <image className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider justify-center">
            <img src={logo} className="w-24 justify-center items-center sm:m-0 m-auto"></img>
          </image>
          <h2 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none text-center sm:text-left">
            Escola Biblica
            <p className='text-cyan-600'>de Obreiros</p>
            <span className="inline-block ">
              IADPE
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base  text-center sm:text-left text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center sm:justify-start justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-sky-500 to-sky-700 focus:shadow-outline focus:outline-none hover:scale-110 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-bold tracking-wide text-sky-700 transition duration-200 rounded shadow-md bg-white border-soli border-4 border-sky-700 focus:shadow-outline focus:outline-none hover:scale-110 text-sm "
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero