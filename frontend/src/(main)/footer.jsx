import React from 'react'

const Footer = () => {
  return (
    <div>
 <footer className="relative bg-[#284b63] text-[#d9d9d9] pt-4 pb-6">
    <div className="container mx-auto px-4">
    
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2024</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              {" "}
              Form-Builder
              {" "}

            </a>
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              className="text-blueGray-500 hover:text-blueGray-800"
            >
              Hafsah Naseer
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer