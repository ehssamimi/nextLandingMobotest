import React from 'react';
import Image from "next/image";

const Fold5 = () => {
    return (
        <div className='relative w-full mt-28 md:mt-60  lg:mt-80 flex flex-col	' dir={'rtl'}>

            <div className=' bg-AthensGray ml-auto flex w-full md:w-2/3 md:pr-[12%] pt-[7%] rounded-[32px]  min-h-[150px]  md:min-h-[220px] lg:min-h-[320px] z-10'>

                    <div className='flex flex-col'>
                        <h3 className='flex items-center text-xl lg:text-4xl font-bold	'>
                            <div className='ml-3 max-w-[20px] md:max-w-[32px]'>
                                <Image
                                    // loader={myLoader}
                                    src="/Landing/fold3/Star.svg"
                                    alt="pwa"
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                            </div>
                            <div  className='text-BlackPearl-1000 mb-2 	'>یادگیری با  <span className='text-Blaze mb-2'>پاسخ‌های تشریحی</span>  </div>

                        </h3>
                        <p className="text-sm	 lg:text-xl font-normal text-BlackPearl-640 mt-8 md:mr-10 w-full md:w-4/6	">

                            با پاسخ‌های تشریحی میتونی مطالب و نکات آموزشی رو به صورت کامل متوجه بشی و پیشرفت کنی                        </p>

                    </div>
            </div>
            <div className=' hidden  md:absolute    md:top-[10px] lg:top-[60px]  xl:top-[170px] left-[30%]		md:block'>
                <Image
                    // loader={myLoader}
                    src="/Landing/fold3/dots.svg"
                    alt="pwa"
                    width='226'
                    height='296'

                    objectFit='contain'


                />
            </div>

            <div className='relative  md:absolute   left-0 z-20  mt-3  md:mt-10   w-full  md:w-4/12 max-w-[444px]	 '>
                <img src="/Landing/fold4-5/fold4.svg" alt="" className={'w-full'}/>
            </div>




        </div>
    );
};

export default Fold5;