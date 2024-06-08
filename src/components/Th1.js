import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const mystyle = {
    width: "150px",
    height: "70px"
}

const Th1 = () => {

    return (
        <div>
            <Navbar />
            <h1>Bitcoin Rainbow Price Chart</h1>
            <iframe src="https://www.blockchaincenter.net/static/rainbow-chart.html" scrolling='no' frameBorder={0}> </iframe>
            <Footer />
        </div>
    );
}

export default Th1;