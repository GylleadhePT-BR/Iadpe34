import React from 'react'
import Clock from './Clock'

function Content() {
  return (
    <div className=" bg-base-100 ">
      <div className="flex justify-center my-20 flex-wrap flex-row gap-8">
        <img id="content" src="https://i.ytimg.com/vi/lNBByXcAM-w/maxresdefault.jpg" className="sm:w-6/12 w-96  rounded-lg shadow-2xl" />
        <div className=' w-96 flex flex-col'>
          <h1 className="sm:text-5xl text-3xl font-bold">Simpósio de Doutrinas</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <a
              href="/"
              className="inline-flex w-36 items-center justify-center h-12 px-6 mr-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-sky-500 to-sky-700 focus:shadow-outline focus:outline-none hover:scale-110 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500"
            >
              Get started
            </a>

        </div>
      </div>
    </div>
  )
}

export default Content