import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { Ifilm } from '../../types/insterfaces/Film'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animate/animations';

const FilmCard: FunctionComponent<{ product: Ifilm }> = ({ product: {
  description,
  image,

}
}) => {
  return (
    <div className='bg-white  rounded-sm pb-3'>
      <div className='flex justify-between items-center' >


      </div>
      <div className='m-4'>
        <Link href={"./auth/login"}>
          <a>
          <Image
            src={image}
            layout="responsive"
            height="200"
            width="200"
            alt={description}
            priority

          />
          </a>
        </Link>

      </div>
      <div className='flex'>
        <div className='font-bold ml-4 w-4/5 '>
          <motion.h1 className='text-pri' variants={fadeInUp}>{description}</motion.h1>



        </div>


      </div>

    </div>
  )
}

export default FilmCard