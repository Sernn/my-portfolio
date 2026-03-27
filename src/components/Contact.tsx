'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Heading from './sub/Heading'

const Contact = () => {
  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text="Get in touch" />
      <div className="w-full h-full my-auto flex  sm:flex-col md:flex-row items-center justify-between xl:justify-center gap-x-20 xxl:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/contact.gif"
            alt="contact img"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          action=""
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>
          <input
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 bg-zinc-100 px-4 py-2 text-sm tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
