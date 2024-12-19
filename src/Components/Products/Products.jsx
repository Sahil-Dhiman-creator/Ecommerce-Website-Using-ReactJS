import React from 'react';
import Img1 from '../../assets/women/women.jpg';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import Img5 from '../../assets/women/women5.jpg';
import Img6 from '../../assets/women/women6.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData =
[
    {
        id: 1,
        img: Img1,
        title: "Women's Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women's Western",
        rating: 4.0,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.5,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women's Ethnic",
        rating: 4.7,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Women's Ethnic",
        rating: 4.2,
        color: "Black",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Women's Ethnic",
        rating: 4.2,
        color: "Green",
        aosDelay: "800",
    },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up"
                    className='text-sm text-primary'>Top Selling Products for You</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Product's</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Fugit maxime maiores 
                        doloremque!
                    </p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                                lg:grid-cols-6 place-items-center gap-5'>
                            {ProductsData.map((data) => (
                                <div data-aos="fade-up" 
                                data-aos-delay={data.aosDelay} 
                                key={data.id} 
                                className='space-y-3'
                                >
                                    <img 
                                    src={data.img} 
                                    alt="Cover Image" 
                                    className='h-[220px] w-[105px] object-cover rounded-md' 
                                    />
                                <div>
                                    <h3 className='font-semibold'>
                                        {data.title}
                                    </h3>
                                <p className='text-sm text-gray-600'>
                                    {data.color}
                                </p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                <span>{data.rating}</span>
                                </div>
                                </div>
                                </div>
                            ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                        View All button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products