import React, { useState } from 'react';
import AboutMeCards from '../components/AboutMePage/AboutMeCards';
import AboutMeDocuments from '../components/AboutMePage/AboutMeDocs';
import { aboutMeOne } from '../components/AboutMePage/AboutMeDocs/Data';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
            <Footer />
            {/* <AboutMeDocuments {...aboutMeOne} /> */}
            {/* <AboutMeCards /> */}
        </>
    )
}

export default Home
