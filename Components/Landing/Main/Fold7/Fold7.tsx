import React from 'react';
import Image from "next/image";



const Fold7 = () => {
    let Questions:{header:string,subHeader:string}[]=
        [{
        header:"موبوتست چیه؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
        },
        {
        header:" پکیج های موبوتست شامل چه درسایی هست؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
        },    {
        header:" سوالات تستی هستند یا تشریحی؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
        },  {
        header:" آیا به صورت آفلاین میشه از موبوتست استفاده کرد؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
        },  {
        header:" بعد از خرید کتاب یا پکیج تا چه مدت برام فعال میمونه؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
        },{
        header:" با لپتاپ میتونم از موبوتست استفاده کنم؟",
        subHeader:"موبوتست یک ابزار برای نشان دادن سوالات متعدد است "
         }]

    return (
        <div className='w-full  mt-[148px] md:mt-[152px]  ' dir='rtl'>
            <div className=' w-full relative'>
                {/*right-[-10%]*/}
                <div className=' w-full relative'>
                    {/*right-[-10%]*/}
                    <div className='absolute   left-[-11%]  md:left-[-13%] top-0  md:w-[200px] w-[90px]    '>
                        <Image
                            // loader={myLoader}
                            src="/Landing/curve2.svg"
                            alt="curve1"
                            // width={200}
                            // height={200}
                            width={"200%"}
                            height={"200%"}
                            // layout={"fill"}
                            //
                            // sizes="200px"


                        />
                    </div>

                </div>

            </div>


            <h3 className='font-bold text-xl	md:text-4xl	text-BlackPearl-1000 text-center mb-4 '>پاسخ به سوالات شما</h3>

            {
                Questions.map((eachQuestion:{header:string,subHeader:string},index)=>

                    <div className='bg-AthensGray mt-12  rounded-3xl	 ' key={index}>
                        <div className='flex space-x-3 text-BlackPearl-1000 font-medium 	text-2xl py-3 items-center	'>
                            <div className='ml-3 max-w-[40px] pt-2.5'>
                                <Image
                                    // loader={myLoader}
                                    src="/Landing/fold4-5/plus.svg"
                                    alt="pwa"
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                            </div>
                            <h4 className='text-sm	md:text-2xl	text-2xl	font-semibold	'>
                                {eachQuestion.header}
                            </h4>


                        </div>


                    </div>

                )
            }



        </div>
    );
};

export default Fold7;