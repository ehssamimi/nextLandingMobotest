import React from 'react';
import Image from "next/image";

const Fold3 = () => {
    return (
        <div className='relative w-full mt-32 flex flex-col	' dir={'rtl'}>

            <div className=' bg-AthensGray mr-auto flex w-full md:w-2/3 md:pr-[12%] pt-[7%] rounded-[32px]  min-h-[200px]  md:min-h-[360px]  lg:min-h-[420px]'>

                    <div className='flex flex-col'>
                        <h3 className='flex items-center text-xl	lg:text-4xl font-bold	'>
                            <div className='ml-3  max-w-[20px] lg:max-w-[32px]'>
                                <Image
                                    // loader={myLoader}
                                    src="/Landing/fold3/Star.svg"
                                    alt="pwa"
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                            </div>
                            <span className='text-BlackPearl-1000 mb-2'>موبوتست </span>
                            <span className='text-Blaze mb-2'> همیشه در دسترس </span>
                        </h3>
                        <p className="text-sm	 lg:text-xl font-normal text-BlackPearl-640 mt-8 md:mr-10	">
                            با خرید از موبوتست همیشه میتونید در هر زمانی و هر مکانی به کتاب‌هاتون دسترسی داشته باشید. در این کتاب‌ها میتونید همه چیز در کتابتون رو در هر زمان که خواستید داشته باشید و شروع به مطالعه کنید.
                        </p>

                    </div>
            </div>
            <div className='absolute top-1	 right-0  hidden	md:block'>
                <Image
                    // loader={myLoader}
                    src="/Landing/fold3/dots.svg"
                    alt="pwa"
                    width='226'
                    height='296'

                    objectFit='contain'


                />
            </div>
            <div className='relative  md:absolute top-2 right-0 z-10 md:mt-[10%] w-full  md:w-5/12 max-w-[520px]	 '>
                <img src="/Landing/fold3/videoPlayer.svg" alt="" className={'w-full'}/>
            </div>




        </div>
    );
};

export default Fold3;