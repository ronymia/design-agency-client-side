import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

export default function Register() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);
          reset();
     }

     return (
          <div className='flex flex-col items-center justify-center w-full h-auto py-24'>
               <h3 className='block text-2xl font-medium my-10'>Get in touch</h3>
               <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-y-4'
               >
                    <input type="text"
                         className='w-96 h-11 rounded focus:outline-none border border-[#C7C7C7] px-2 py-1 text-sm placeholder:capitalize placeholder:font-light'
                         placeholder='your name'
                         {...register("name")}
                    />
                    <input type="text"
                         className='w-96 h-11 rounded focus:outline-none border border-[#C7C7C7] px-2 py-1 text-sm placeholder:capitalize placeholder:font-light'
                         placeholder='your email'
                         {...register("email")}
                    />
                    <input type="text"
                         className='w-96 h-11 rounded focus:outline-none border border-[#C7C7C7] px-2 py-1 text-sm placeholder:capitalize placeholder:font-light'
                         placeholder='password'
                         {...register("password")}
                    />
                    <input type="text"
                         className='w-96 h-11 rounded focus:outline-none border border-[#C7C7C7] px-2 py-1 text-sm placeholder:capitalize placeholder:font-light'
                         placeholder='confirm password'
                         {...register("confirmPassword")}
                    />
                    <input type="submit" value="Register"
                         className='bg-primary text-white w-96 h-11 rounded font-semibold leading-7 tracking-widest cursor-pointer'
                    />
               </form>

               {/* social login */}
               <SocialLogin />

               {/* register toggle */}
               <h4>
                    Already have an account ? <Link to={"login"} className='text-[#3F90FC] cursor-pointer hover:underline'>Login Here</Link>
               </h4>
          </div>
     )
}
