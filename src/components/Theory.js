import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Theory() {



    return (<div>
        <Navbar />



            <div className="th-img">

                <div>
                    
                    <br />
                    <br />
                    <span >
                        <Link style={{ textDecoration: 'none' }} to="/th1"><h3>RainBow Theory</h3></Link>

                    </span>
                    <br />
                    <span disabled >
                        <Link style={{ textDecoration: 'none' }} to="/"><h3>Relative Strength Index</h3></Link>

                    </span>
                    <br />
                    <span disabled >
                        <Link style={{ textDecoration: 'none' }} to="/"><h3>Fear and Greed Index</h3></Link>

                    </span>
                </div>
                <img src="https://images.unsplash.com/photo-1646299220293-3ae516d9c275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80" alt="" srcset="" />
            </div>

        <Footer />

    </div>);
}
export default Theory;