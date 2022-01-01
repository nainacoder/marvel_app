import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CharacterList from '../components/CharacterList'
import "./HomePage.css"

function HomePage() {
    return (
        <div className="container">
            <Header/>
            <CharacterList/>
            <Footer/>
        </div>
    )
}

export default HomePage
