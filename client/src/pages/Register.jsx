import React,{useState} from 'react'
import {FaRegEyeSlash} from 'react-icons/fa6'
import {FaRegEye} from 'react-icons/fa6'


const Register = () => {
   const [data,setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: ""
   })


   const [showPassword , setShowPassword] = useState(false)
   const [showConfirmPassword , setShowConfirmPassword] = useState(false)
    

 
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


   const handleSubmit = (e)=>{
         e.preventDefault()
   }



  return (
    <section className='w-full container mx-auto px-2 '>
           <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7 '>
              <p>Welcome to Blinkit</p>
              <form onSubmit={handleSubmit} className='grid gap-4 mt-6'>
                <div className='grid gap-1'>
                    <label htmlFor="name">Name :</label>
                    <input placeholder='Enter your name...' id='name' name='name' type="text" autoFocus className='bg-blue-50 p-2 border rounded outline-none focus:border-[#ffbf00]' value={data.name} onChange={handleChange} />
                </div>

                 <div className='grid gap-1'>
                    <label htmlFor="email">Email :</label>
                    <input placeholder='Enter your email...' id='email' name='email' type="email"  className='bg-blue-50 p-2 border rounded outline-none focus:border-[#ffbf00]' value={data.email} onChange={handleChange} />
                </div>


                <div className='grid gap-1'>
                    <label htmlFor="password">Password :</label>
                    <div  className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-[#ffbf00]'>
                    
                     <input placeholder='Enter your password...' id='password' name='password' type={showPassword ? "text" : "password"}  className='w-full outline-none' value={data.password} onChange={handleChange} />
                   

                     <div onClick={()=> setShowPassword(prev => !prev)} className='cursor-pointer'>
                        {
                            showPassword ? ( <FaRegEye/> ):(<FaRegEyeSlash/>)
                        }
                        
                    </div>
                   
            
                    </div>

                </div>



                <div className='grid gap-1'>
                    <label htmlFor="confirmPassword">Confirm Password :</label>
                    <div  className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-[#ffbf00]'>
                    
                     <input placeholder='Enter your Confirmed password...' id='confirmPassword' name='confirmPassword' type={showConfirmPassword ? "text" : "password"}  className='w-full outline-none' value={data.confirmPassword} onChange={handleChange} />
                   

                     <div onClick={()=> setShowConfirmPassword(prev => !prev)} className='cursor-pointer'>
                        {
                            showPassword ? ( <FaRegEye/> ):(<FaRegEyeSlash/>)
                        }
                        
                    </div>
                   
            
                    </div>

                </div>


                <button className={` ${validValue ? "hover:bg-green-700 bg-green-800": "bg-gray-500"}  text-white py-2 rounded my-3 tracking-wide  font-semibold `}>
                  Register
                </button>




                

              </form>
           </div>
    </section>
  )
}

export default Register