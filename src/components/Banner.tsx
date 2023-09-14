'use client'
import {useState} from 'react';
import Image from "next/image";

export default function Banner () {
    const covers = ['/img/bg.png','/img/banner01.jpg','/img/banner02.jpg','/img/banner03.jpg']
    const [index,setIndex]=useState(0);

    return(
        <div className='block p-5 select-none m-0 w-screen h-[70vh] relative' onClick={() => {
            setIndex((index + 1) % 4)
        }}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit ='cover'
            />
            position: relative;
    
            <div className='text-white relative top-[60px] z-20 text-center'>
                <h1 className="text-4xl font-semibold mb-3">Time To Vaccinate</h1>
                <h3 className="text-lg">Quick and Painless Protection</h3>
            </div>
        </div>
    );
}