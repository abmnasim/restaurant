import React from 'react';
import '../App.css';
import Header from "./header/Header";
import Footer from './footer/Footer';
import Body from './body/Body';

const MainComponent = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
export default MainComponent;