import React from 'react';
import Image from "next/image";



const Fold2 = () => {
    let    listItem:{ image: string, header: string,desc:string }[] =[
        {
            image:"/Landing/fold2/infinity.svg",
            header:"بانک تست بینهایت",
            desc:"بینهایت بانک تست برای ارزیابی"
        }  ,    {
            image:"/Landing/fold2/clock.svg",
            header:"دسترسی طولانی",
            desc:"با ورود به اپلیکیشن تا هر زمان که بخواهی به منابع موجود دسترسی داری"
        } ,     {
            image:"/Landing/fold2/verify.svg",
            header:"اساتید معتبر",
            desc:"با اساتید معتبر دیگر نگرانی راجع به درس‌های خودتون ندارید"
        }  ,    {
            image:"/Landing/fold2/video.svg",
            header:"محتواهای ویدیویی",
            desc:"ویدیوهای مربوط به درس خودتون رو ببینید و رفع اشکال کنید"
        }
    ];

    return (
        <div className='w-full mt-[120px] lg:mt-[150px] xl:mt-[210px]'>

            <h2 className='text-center   text-2xl	 lg:text-40px font-bold z-10'>با امکانات موبوتست آشنا شو </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1  ' dir={'rtl'}>



                {
                    listItem.map((item, index) => <div key={index} className='flex flex-col mt-12 lg:mt-24 ' dir={'rtl'}>
                        <div className='   max-w-[56px] md:max-w-[72px]'>
                            <Image
                                // loader={myLoader}
                                src={item.image}
                                alt="google play"

                                width='100%'
                                height='100%'
                                objectFit='contain'

                            />
                        </div>

                        <h4 className="text-BlackPearl-1000 text-base	 lg:text-2xl font-bold mt-4  md:mt-8	 ">{item.header}</h4>
                        <p  className="text-BlackPearl-480 text-xs	 lg:text-base	 text-2xl  mt-2 md:mt-4 ">{item.desc}</p>

                    </div> )
                }


            </div>

        </div>
    );
};

export default Fold2;