import React,{useState} from 'react'
import {FaRegEyeSlash} from 'react-icons/fa6'
import {FaRegEye} from 'react-icons/fa6'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosTostError from '../utils/AxiosTostError'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
   const [data,setData] = useState({
    email: "",
   })


   const navigate = useNavigate()

 
   const handleChange = (e)=>{
    const {name, value} = e.target

    setData((prev)=>{
         return{
            ...prev,
            [name]:value
         }
    })

   }

   const validValue = Object.values(data).every(el => el)


   const handleSubmit = async(e)=>{
         e.preventDefault()


         try {
            const response = await Axios({
              ...SummaryApi.forgot_password,
              data: data
           })

           if(response.data.error){
            toast.error(response.data.message)
           }

           if(response.data.success){
            toast.success(response.data.message)
            setData({
              email: "",
            })

            navigate("/verification-otp")
           }

          
         } catch (error) {
          AxiosTostError(error)
         }

         


   }



  return (
    <section className='w-full container mx-auto px-2 '>
           <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7 '>
              <p className='font-semibold text-lg '>Forgot Password</p>


              <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
                

                 <div className='grid gap-1'>
                    <label htmlFor="email">Email :</label>
                    <input placeholder='Enter your email...' id='email' name='email' type="email"  className='bg-blue-50 p-2 border rounded outline-none focus:border-[#ffbf00]' value={data.email} onChange={handleChange} />
                </div>


                <button disabled={!validValue} className={` ${validValue ? "hover:bg-green-700 bg-green-800": "bg-gray-500"}  text-white py-2 rounded my-3 tracking-wide  font-semibold `}>
                  Send Otp
                </button>

              </form>


              <p>
                Already have an Account? ? <Link className='font-semibold text-green-700 hover:text-green-800' to={"/login"}>Login</Link>
              </p>
           </div>
    </section>
  )
}

export default ForgotPassword