import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm()

     const onSubmit = (data) => {
          console.log(data)
     }

     return (
          <section className='w-full h-[500px] bg-yellow px-24 pt-10 pb-24 flex items-start justify-center gap-x-56 relative'>
               <div className="">
                    <h2 className='text-3xl leading-normal font-semibold mb-8'>
                         Let us handle your <br /> project, professionally.
                    </h2>
                    <p className='font-light text-sm'>
                         With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.
                    </p>
               </div>
               <div className="">
                    <form action=""
                         onSubmit={handleSubmit(onSubmit)}
                         className='flex flex-col gap-y-4'
                    >
                         <input
                              className='w-96 h-11 rounded focus:outline-none text-sm px-4 py-3 placeholder:text-xs placeholder:font-light placeholder:capitalize'
                              type="text"
                              name=""
                              id=""
                              placeholder='your email address'
                              {...register("email")}
                         />
                         <input
                              className='w-96 h-11 rounded focus:outline-none text-sm px-4 py-3 placeholder:text-xs placeholder:font-light placeholder:capitalize'
                              type="text"
                              name=""
                              id=""
                              placeholder="your name / company's name"
                              {...register("name")}
                         />
                         <textarea
                              className='resize-none rounded w-96 h-40 focus:outline-none text-sm px-5 py-4 placeholder:text-sm placeholder:font-light placeholder:capitalize'
                              name=""
                              id=""
                              placeholder='your message'
                              {...register("message")}
                         ></textarea>
                         <input type="submit" value="send"
                              className="px-[35px] py-[10px] bg-primary text-white rounded-[5px] 
                              cursor-pointer uppercase tracking-widest"
                         />
                    </form>
               </div>
               <p className='absolute bottom-10'>
                    copyright Orange Labs 2023
               </p>
          </section>
     )
}
