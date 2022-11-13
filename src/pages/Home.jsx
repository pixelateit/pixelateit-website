import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import SkillSection from '../Components/SkillSection'
import Work from '../Components/Work'
import BlenderSection from '../Components/BlenderSection'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <SkillSection />
            <Work />
            <BlenderSection />
            <Footer />
        </>
    )
}

export default Home