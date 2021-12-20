import React from 'react'
import AboutMeDocuments from '../components/AboutMePage/AboutMeDocs'
import { aboutMeOne } from '../components/AboutMePage/AboutMeDocs/Data'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollTotop'

const AboutMePage = () => {
    return (
        <div>
            <ScrollToTop />
            <AboutMeDocuments {...aboutMeOne} />
            <Footer />
        </div>
    )
}

export default AboutMePage
