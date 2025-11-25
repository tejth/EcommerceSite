import React,{useEffect, useRef, useState} from 'react'
import {FaRegEyeSlash} from 'react-icons/fa6'
import {FaRegEye} from 'react-icons/fa6'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosTostError from '../utils/AxiosTostError'
import { useNavigate } from 'react-router-dom'
import { Link , useLocation } from 'react-router-dom'


const OtpVerification = () => {

   const [data,setData] = useState(["","","","","",""])
   const navigate = useNavigate()
   const inputRef = useRef([])
   const location = useLocation()


   useEffect(()=>{
       if(!location?.state?.email){
        navigate("/forgot-password")
       }
   },[])

 
   const validValue = data.every(el => el)


   const handleSubmit = async(e)=>{
         e.preventDefault()

         try {
            const response = await Axios({
              ...SummaryApi.forgot_password_otp_verification,
              data: {
                otp: data.join(""),
                email : location?.state?.email
              }
           })

           if(response.data.error){
            toast.error(response.data.message)
           }

           if(response.data.success){
            toast.success(response.data.message)
            setData(["","","","","",""])

            // navigate("/verification-otp")
           }

          
         } catch (error) {
          AxiosTostError(error)
         }

         


   }



  return (
    <section className='w-full container mx-auto px-2 '>
           <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7 '>
              <p className='font-semibold text-lg '>Enter OTP</p>


              <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
                

                 <div className='grid gap-1'>
                    <label htmlFor="otp">Enter Your OTP :</label>
                    
                    <div className='flex items-center gap-2 justify-between mt-3'>
                        {
                            data.map((element,index)=>{
                                return(
                                   <input id='otp'  
                                   key={"otp"+index}
                                   type="text"
                                   ref={(ref)=>{
                                       inputRef.current[index] = ref
                                       return ref
                                   }}
                                   maxLength={1}  
                                   value={data[index]}
                                   onChange={(e)=>{
                                    const value = e.target.value
                                    const newData = [...data]
                                    newData[index]= value

                                    setData(newData)

                                    if(value && index < 5){
                                        inputRef.current[index+1].focus()
                                    }
                                   }}
                                   className='bg-blue-50 w-full max-w-16 p-2 border rounded outline-none 
                                   text-center
                                   font-semibold
                                   focus:border-[#ffbf00]' />  
                                )
                            })
                        }
                    </div>

                </div>


                <button disabled={!validValue} className={` ${validValue ? "hover:bg-green-700 bg-green-800": "bg-gray-500"}  text-white py-2 rounded my-3 tracking-wide  font-semibold `}>
                  Verify OTP
                </button>

              </form>


              <p>
                Already have an Account? ? <Link className='font-semibold text-green-700 hover:text-green-800' to={"/login"}>Login</Link>
              </p>
           </div>
    </section>
  )
}

export default OtpVerification