import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
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
                         placeholder='your email'
                         {...register("email")}
                    />
                    <input type="text"
                         className='w-96 h-11 rounded focus:outline-none border border-[#C7C7C7] px-2 py-1 text-sm placeholder:capitalize placeholder:font-light'
                         placeholder='your password'
                         {...register("password")}
                    />
                    <input type="submit" value="Login"
                         className='bg-primary text-white w-96 h-11 rounded font-semibold leading-7 tracking-widest cursor-pointer'
                    />
               </form>
          </div>
     )
}
