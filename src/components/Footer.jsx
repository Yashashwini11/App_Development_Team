import { Facebook, Github, Instagram,  LinkedinIcon, Twitter, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=" overflow-y-auto  bottom-0 left-0 w-full h-10 flex flex-row justify-center items-center  bg-blue-600">
      <div className="w-1/4 h-full text-white font-bold flex justify-start items-center text-lg"> © elearn.com 2024</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 '>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md flex justify-end items-center'>
          <Facebook className='h-6 w-6'color='white' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md flex justify-end items-center'>
          <Twitter className='h-6 w-6'color='white' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  flex justify-end items-center'>
          <Instagram className='h-6 w-6 'color='white' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  flex justify-end items-center'>
          <X className='h-6 w-6' color='white'/>
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  flex justify-end items-center'>
          <LinkedinIcon className='h-6 w-6' color='white'/>
        </a>
        
        
      </div>
    </div>
  )
}

export default Footer