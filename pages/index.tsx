import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import LandingHead from "../Components/Head/LandingHead/LandingHead";
import HeaderLanding from "../Components/Landing/Main/LandingHeader/HeaderLanding";
import Fold1 from "../Components/Landing/Main/Fold1/Fold1";
import Fold2 from "../Components/Landing/Main/Fold2/Fold2";
import Fold3 from "../Components/Landing/Main/Fold3/Fold3";
import Fold4 from "../Components/Landing/Main/Fold4/Fold4";
import Fold5 from "../Components/Landing/Main/Fold5/Fold5";
import Fold6 from "../Components/Landing/Main/Fold6/Fold6";
import Fold7 from "../Components/Landing/Main/Fold7/Fold7";
import FooterLanding from "../Components/Landing/FooterLanding/FooterLanding";

const Home: NextPage = () => {
  return (
      <div className='w-full font-IranSansMobile overflow-x-hidden'>


          <div className="container mx-auto  w-full  px-6 mt-9 lg:px-28 ">
              <LandingHead/>
              <HeaderLanding/>
              <Fold1/>

                  <Fold2/>
                  <Fold3/>
                  <Fold4/>
                  <Fold5/>
                  <Fold6/>
                  <Fold7/>

          </div>
          <FooterLanding/>
      </div>

  )
}

export default Home
