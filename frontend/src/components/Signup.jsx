import { Label } from '@radix-ui/react-label'
import { Input } from 'postcss'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
// import { cp } from 'fs'

export const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const changeEventHandler = (e) => {
      setInput({...input, [e.target.name]: e.target.value})
    }
    const signupHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        try {
            setLoading(true)
            const res = await axios.post('http://localhost:8000/api/v1/user/register',input,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            console.log(res)
         if(res.data.success) {
            navigate("/login");
          toast.success(res.data.message)  
          setInput({
            username: "",
            email: "",
            password: ""
          })
         }
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error.response?.data?.message || "Something went wrong");
            
        } finally{
            setLoading(false)
        }
    }
return (
    <div className='flex items-center w-screen h-screen justify-center'>
        <form onSubmit={signupHandler} className="shadow-lg flex flex-col gap-5 p-8">
            <div className='my-4'>
                <h1 className='text-center font-bold text-xl'>LOGO</h1>
                <p className='text-sm text-center'>Signup to see photos and videos from your friends</p>
                <div className='mt-6'>
                    <span className='my-10 font-medium'>Username</span>
                    <input 
                        type="text" 
                        name="username" 
                        value={input.username}
                        onChange={changeEventHandler}
                        placeholder="Enter your username"
                        className="block mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                </div>
                <div className='mt-6'>
                    <span className='my-10 font-medium'>Email</span>
                    <input 
                        type="email" 
                        name="email"
                        value={input.email}
                        placeholder='Enter your email'
                        onChange={changeEventHandler} 
                        className="block mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                </div>
                <div className='mt-6'>
                    <span className='my-10 font-medium'>Password</span>
                    <input 
                        type="password" 
                        name="password"
                        value={input.password}
                        placeholder='Enter your password'
                        onChange={changeEventHandler} 
                        className="block mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                </div>
                {loading ? (
                    <Button className="w-full bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 mt-6 h-10 flex items-center justify-center">
                         <Loader className='mr-2 h-4 w-4 animate-spin' />
                         Loading...
                    </Button>
                ) : (      

                <Button type='submit' className="w-full bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 mt-6 h-10">
                    Signup
                </Button>
                )}
                <span className='block text-center mt-4'>Already have an account ? <Link to="/login" className="text-blue-500">Login</Link> </span>
            </div>
        </form>
    </div>
)
}
