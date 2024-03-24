import { Box, Grid } from '@mui/material'

import React from 'react'

const ContactMe = () => {
  return (
    <section className="contact w-full" id="contact" >
      <h1 className='myskills seq text-5xl w-fit font-poppins font-medium mb-2'>Contact Me</h1>
      <div className='flex justify-center'>
      <form action="">
        <div className="flex flex-wrap gap-3 mb-5">
          <input type="text" name="name" placeholder="Name" className="w-full bg-black text-gray-300 border border-gray-400 rounded-lg px-3 py-2 mb-2 md:mb-0" required />
          <input type="email" placeholder="Email" className="w-full bg-black text-gray-300 border border-gray-400  rounded-lg px-3 py-2 mb-2 md:mb-0" required />
        </div>
        <textarea name="message" cols={30} rows={10} placeholder="Your message" className="w-full bg-black text-gray-300 border border-gray-400  px-3 py-2 mb-4"></textarea>
        <input type="submit" value="Send" className="bg-black text-gray-300 border border-gray-400 p-3 hover:bg-slate-700" />
      </form>
      </div>
    </section>
  )
}

export default ContactMe