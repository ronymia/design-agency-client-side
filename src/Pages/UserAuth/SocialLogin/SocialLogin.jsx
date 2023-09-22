import React from 'react';

export default function SocialLogin() {
     return (
          <div className='my-8 w-96 flex flex-col items-center gap-y-6'>
               <h2 className='block text-2xl font-bold capitalize tracking-widest'>Login With</h2>
               <button type='button'
                    className="w-96 h-11 border border-[#C7C7C7] rounded-full flex flex-col items-center justify-center tracking-widest">
                    <p className='block text-center font-medium'>Continue with Google</p>
               </button>
          </div>
     )
}
