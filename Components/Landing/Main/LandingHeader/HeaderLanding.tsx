import React from 'react';
import {NextPage} from "next";
import Image from 'next/image'
import {myLoader} from "../../../Common/Common";

const HeaderLanding:NextPage = () => {
    return (
        <div>
            <div className="flex items-center   ">
                <span className='text-Blaze px-3 rounded-lg ring-orange-500 ring-2 text-sm lg:text-base mb-0 h-[40px] flex items-center' style={{height:"40px"}}>تماس با ما  </span>
                <Image
                    // loader={myLoader}
                    src="/logo.png"
                    alt="Picture of the author"
                    width={80}
                    height={60}
                />

            </div>
        </div>
    );
};

export default HeaderLanding;