import React from 'react'
import netflix from "../assets/portfolio/netflix.png";
import amazon from "../assets/portfolio/amazon.png";
import applereact from "../assets/portfolio/applereact.png";
import app from "../assets/portfolio/app.jpg";
import abe from "../assets/portfolio/abe.jpeg";

function Portfolio() {

    const portfolios =[
        {
            id:1,
            src:netflix,
            href:'https://netflix-jan-21b31.web.app/',
        },
        {
            id:2,
            src:amazon,
        },
        {
            id:3,
            src:applereact,
            href:"https://apple-react-clone-62818.web.app/"
        },
        {
            id:4,
            src:app
        },
        {
            id:5,
            src:abe
        },
    ]

  return (
    <div name ="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check Out Some of My Work </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id, src, href}) =>(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt='' className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3m-4 duration-200 hover:scale-105">  <a href={href} target='_blank'
                        > Dome</a></button> 
                        <button className="w-1/2 px-6 py-3m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Portfolio