import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import {IoCall} from 'react-icons/io5'

const FooterLinks =
[
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];
const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                <div className='py-8 px-4'>
                    <h1 
                        className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 
                        flex items-cent gap-1 cursor-pointer'
                    >
                        <FiShoppingBag size={30} />
                        ShopMe
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id ipsam officia adipisci perferendis, molestiae voluptates dignissimos
                        itaque impedit? Eaque illo, deserunt sed, assumenda amet dicta nostrum 
                        quos ipsa itaque adipisci eius cupiditate.
                    </p>
                </div>
                <div>
                    <div className='py-8 px-[30%]'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 cursor-pointer'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li 
                                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300
                                                text-gray-200'
                                        key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 cursor-pointer'>Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li 
                                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300
                                                text-gray-200'
                                        key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="https://www.instagram.com/">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sahil-dhiman-6b91a8219/">
                            <FaLinkedin className='text-3xl'/>
                        </a>
                        <a href="https://www.facebook.com/">
                            <FaFacebook className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaMapLocationDot />
                            <p>S-165, Mohan Garden, Uttam Nagar, New Delhi-110059</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <IoCall />
                            <p>+91 8802615501</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer