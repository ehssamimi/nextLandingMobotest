import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'

const Fold6 = () => {
    const router = useRouter()
    return (
        <div className='clear-both  md:mt-[180px]  lg:mt-[220px]  xl:mt-[340px] mt-[30px]	'>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center'>
                <div className='flex flex-col justify-self-center mt-11	md:mt-0'>
                    <span className='text-Blaze font-bold text-32px lg:text-3xl text-center'>411,222</span>
                    <span className='font-bold text-2xl	text-center mt-1 md:mt-5'> تعداد سوالات</span>
                </div>
                <div className='flex flex-col justify-self-center mt-11	md:mt-0'>
                    <span className='text-Blaze font-bold text-32px lg:text-3xl text-center'>450,470</span>
                    <span className='font-bold text-2xl text-center	mt-1 md:mt-5 '>  تعداد آزمون‌ها</span>
                </div>
                <div className='flex flex-col justify-self-center mt-11	md:mt-0'>
                    <span  className='text-Blaze font-bold text-32px lg:text-3xl text-center   '>75,326</span>
                    <span className='font-bold text-2xl text-center mt-1 md:mt-5	'> تعداد موبوتستی‌ها</span>
                </div>

            </div>

            <div className='flex flex-col md:flex-row-reverse md:justify-around  items-center bg-Line items-center mt-16 md:mt-32 rounded-t-3xl	'>


                <p className='font-bold text-xl		lg:text-2xl text-Blaze   text-center	'>برای دریافت اپلیکیشن موبوتست کلیک کنید</p>

                <div className='flex flex-col md:flex-row pt-2' onClick={()=>  router.push('https://app.mobotest.com/#/landing')}>
                    <div>
                        <Image
                            // loader={myLoader}
                            src="/Landing/google.svg"
                            alt="google play"

                            width='130%'
                            height='50%'
                            objectFit='contain'
                        />
                    </div>

                    <div className='md:ml-3'>
                        <Image
                            // loader={myLoader}
                            src="/Landing/pwa.svg"
                            alt="pwa"
                            width='130%'
                            height='50%'
                            objectFit='contain'
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fold6;