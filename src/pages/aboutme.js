import React from 'react'
import AboutMeDocuments from '../components/AboutMePage/AboutMeDocs'
import { aboutMeOne } from '../components/AboutMePage/AboutMeDocs/Data'
import Footer from '../components/Footer'

const AboutMePage = () => {
    return (
        <div>
            <AboutMeDocuments {...aboutMeOne} />
            <Footer />
        </div>
    )
}

export default AboutMePage
