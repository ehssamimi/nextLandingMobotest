import React from 'react';
import Image from "next/image";

const Fold4 = () => {
    return (
        <div className='relative w-full mt-24  lg:mt-40  xl:mt-52 flex flex-col	' dir={'rtl'}>

            <div className=' bg-AthensGray mr-auto flex w-full md:w-2/3 md:pr-[12%] pt-[7%] rounded-[32px]  min-h-[200px]  md:min-h-[260px] lg:min-h-[320px] z-10'>

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
                            <div  className='text-BlackPearl-1000 mb-2 	'>مطالعه در <span className='text-Blaze mb-2'>هر جا و هر زمانی</span> که دوست دارید</div>
                            {/*<span className='text-BlackPearl-1000 mb-2 whitespace-nowrap	'>مطالعه در </span>*/}
                            {/*<span className='text-Blaze mb-2 whitespace-nowrap	'>هر جا و هر زمانی </span>*/}
                            {/*<span className='text-BlackPearl-1000 mb-2  	'> که دوست دارید </span>*/}
                        </h3>
                        <p className="text-sm	 lg:text-xl font-normal text-BlackPearl-640 mt-8 md:mr-10	">
                            تمام درس‌های خودتون رو در هر مکانی فارغ از این کجا هستید می‌تونید یاد بگیرید. در حال سفر کردن، قدم زدن یا خانه. یادگیری رو شروع کن.
                        </p>

                    </div>
            </div>
            <div className=' hidden  md:absolute  md:top-[2500px] lg:top-[170px] right-[30%]		md:block'>
                <Image
                    // loader={myLoader}
                    src="/Landing/fold3/dots.svg"
                    alt="pwa"
                    width='226'
                    height='296'
                    objectFit='contain'


                />
            </div>

            <div className='relative  md:absolute top-2 right-0 z-20   w-full  md:w-4/12 max-w-[444px]	 '>
                <img src="/Landing/fold4-5/fold5.svg" alt="" className={'w-full'}/>
            </div>




        </div>
    );
};

export default Fold4;