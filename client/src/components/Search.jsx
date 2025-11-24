import React, { useEffect, useState } from 'react'
import {IoSearch} from "react-icons/io5"
import { TypeAnimation } from 'react-type-animation';
import {Link, useLocation, useNavigate} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';



const Search = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  const [isSearchPage, setIsSearchPage] = useState(false)
  const [isMobile] = useMobile()

  useEffect(()=>{
    const isSearch =  location.pathname === "/search"
    setIsSearchPage(isSearch) 
  },[location])


  const redirectToSearchPage = () =>{
       navigate("/search")
  }




  return (
    <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-[#ffbf00] '>
        <div>

          {
           
           (isMobile && isSearchPage) ? (
              <Link to={"/"} className='group-focus-within:text-[#ffbf00] flex justify-center items-center h-full  p-2 m-1 bg-white rounded-full shadow-md'>
               <FaArrowLeft size={20} />
              </Link>
           ):(
            <button className='group-focus-within:text-[#ffbf00] flex justify-center items-center h-full  p-3'>
              <IoSearch size={22}/>
            </button>
           )
          }

        </div>

        <div className='w-full h-full'>
            {
              !isSearchPage ? (
                //not in search page
                 <div className='w-full h-full flex items-center' onClick={redirectToSearchPage}>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Search "milk" ',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Search "sugar" ',
                    1000,
                    'Search "bread" ',
                    1000,
                    'Search "panner" ',
                    1000,
                    'Search "egg" ',
                    1000,
                    'Search "chips" ',
                    1000,
                    'Search "Dahi" ',
                    1000,

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>
              
              ) :(
                // in search page
             
              <div className='w-full h-full'>
                 <input 
                  type='text'
                  placeholder='search for atta dal and more..'
                  autoFocus
                  className='h-full outline-none bg-transparent w-full'
                 />
              </div>
              )
            }
        </div>

       

    </div>
  )
}

export default Search