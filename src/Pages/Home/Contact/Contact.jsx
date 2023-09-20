import React from 'react';

export default function Contact() {
     return (
          <section className='w-full h-[400px] bg-yellow px-24 py-10 flex items-start justify-center gap-x-56'>
               <div className="">
                    <h2 className='text-3xl leading-normal font-semibold mb-8'>
                         Let us handle your <br /> project, professionally.
                    </h2>
                    <p className='font-light text-sm'>
                         With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.
                    </p>
               </div>
               <div className="flex flex-col gap-y-4">
                    <input
                         className='w-96 h-11 rounded focus:outline-none text-sm px-4 py-3 placeholder:text-xs placeholder:font-light placeholder:capitalize'
                         type="text"
                         name=""
                         id=""
                         placeholder='your email address'
                    />
                    <input
                         className='w-96 h-11 rounded focus:outline-none text-sm px-4 py-3 placeholder:text-xs placeholder:font-light placeholder:capitalize'
                         type="text"
                         name=""
                         id=""
                         placeholder="your name / company's name"
                    />
                    <textarea
                         className='resize-none rounded w-96 h-40 focus:outline-none text-sm px-5 py-4 placeholder:text-sm placeholder:font-light placeholder:capitalize'
                         name=""
                         id=""
                         placeholder='your massage'
                    ></textarea>
               </div>
          </section>
     )
}
