import React from 'react';
import Image from "next/image";

const FooterLanding = () => {

    let FooterList:{image:string,text:string}[]=
        [
            {
            image:"/Landing/Footer/location.svg",
            text:"مازندران، قائم‌شهر، مجموعه آموشی کلید"
        },
            {
                image:"/Landing/Footer/phone.svg",
                text:"+98 011 420 33 555"
            },
            {
                image:"/Landing/Footer/sms.svg",
                text:"Support@mobotest.com"
            },


        ]
    return (
        <div className='w-full bg-AthensGray mt-44 flex flex-col md:flex-row md:justify-between md:items-center' dir='rtl'>

            <div className='flex flex-col p-20 '>
                <h4 className='font-bold text-4xl mb-2'>ارتباط با موبوتست</h4>

                {
                    FooterList.map((eachFooter:{image:string,text:string},index)=>
                        <div className='flex align-baseline text-BlackPearl-640 space-x-3 mt-6' key={index}>
                            <div className='ml-3 max-w-[20px] self-center mt-1'>
                                <Image
                                    // loader={myLoader}
                                    src={eachFooter.image}
                                    alt="pwa"
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                            </div>
                            {eachFooter.text}

                        </div>
                    )
                }




            </div>

            <div className='ml-3  w-[173px]  md:w-[269px] self-center mt-1'>
                <Image
                    // loader={myLoader}
                    src={'/Landing/Footer/enamad.svg'}
                    alt="pwa"
                    width='150%'
                    height='100%'
                    objectFit='contain'
                />
            </div>



        </div>
    );
};

export default FooterLanding;