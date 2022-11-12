import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'

const Fold1 = () => {
    const router = useRouter()
    return (
         <div className="w-full relative  ">
            <div className="flex md:flex-row flex-col-reverse      ">
                <div className='  relative'>
                    <div className='md:max-w-screen-md  min-w-[325px]  md:w-[42vw] w-full left-[-4vw] top-0 md:absolute	'>
                        <Image src="/Landing/left.svg" alt="left" className={' w-full  '} width={"100%"} height={"100%"}/>
                    </div>

                </div>

                <div className={"flex flex-col w-full md:w-2/3 ml-auto"} dir={"rtl"}>
                    <h2 className="text-Blaze text-2xl	 lg:text-4xl xl:text-6xl font-bold ">موبوتست: جایی برای همه</h2>
                    <h3 className="text-BlackPearl-1000 text-xl	 lg:text-2xl xl:text-3xl   mt-6 font-bold ">موفقیت در کنکور و قبولی در بهترین دانشگاه‌های کشور</h3>
                    <div className='mr-6'>
                        <ul className='mt-10 list-disc  '>
                            <li className='text-BlackPearl-640 text-base'>امکان تست زدن و مشاهده پاسخ‌های تشریحی</li>
                            <li className='text-BlackPearl-640 text-base'>درسنامه‌های موضوعی مربوط به هر تست</li>
                            <li className='text-BlackPearl-640 text-base'> مشاهده کارنامه هر سوال</li>
                            <li className='text-BlackPearl-640 text-base'> کیف پول برای خرید کتاب</li>
                        </ul>
                    </div>




                    <div className='flex mt-8 md:mt-[69px]' onClick={()=>  router.push('https://app.mobotest.com/#/landing')}>
                        <div>
                            <Image
                                // loader={myLoader}
                                src="/Landing/google.svg"
                                alt="google play"

                                width='150%'
                                height='50%'
                                objectFit='contain'
                            />
                        </div>

                        <div className='mr-3'>
                            <Image
                                // loader={myLoader}
                                src="/Landing/pwa.svg"
                                alt="pwa"
                                width='150%'
                                height='50%'
                                objectFit='contain'
                            />
                        </div>
                    </div>



                </div>




            </div>

            <div className=' w-full relative'>
                 <div className='absolute   right-[-11%]  md:right-[-13%] top-0  md:w-[200px] w-[90px]    '>
                    <Image
                         src="/Landing/curve1.svg"
                        alt="curve1"

                        width={"200%"}
                        height={"200%"}


                    />
                </div>

            </div>

        </div>

    );
};

export default Fold1;