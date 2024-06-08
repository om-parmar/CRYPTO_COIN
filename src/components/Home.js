import React from "react";

import Navbar from "./Navbar";

function Home() {
    const date = new Date().getFullYear();
    return (<div >
        <Navbar />
        <div className="content">
            <div>
                
                
                <br></br>
                <br>
                </br>
                <h1>
                    Your Crypto Partner which give you idea to Invest in Bitcoin, Ethereum, & other 200+ crypto assets.
                </h1>

                <br>
                </br>
                <br></br>
                <br>
                </br>
                <br></br>
                <h2>Be the first to know , <br></br>about crypto news every day</h2>


            </div>

            <div className="me-img">
                <img src="https://images.unsplash.com/photo-1635501300433-ed4e02fce51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" srcset="" />
            </div>

        </div>
        <div className="cpy">
            <h6>© {date} / OM_PARMAR</h6>
        </div>

    </div>);
};
export default Home;