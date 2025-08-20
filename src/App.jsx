import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import Hero from './components/Hero'
import SiteList from './components/SiteList'
import FlexImgTxt from './components/FlexImgTxt'
import Footer from './components/Footer'
import Text from './components/Text'

const App = () => {
    return (
        <>
            <Headers />
            <Routes>
                <Route path='/*' element={<Hero />} />
            </Routes>
            <SiteList />
            <FlexImgTxt />
            <Text />
            <Footer />
        </>
    )
}

export default App