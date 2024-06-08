import React from 'react';

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify'
import Navbar from './Navbar';
import Footer from './Footer';

const Th2 = (props) => {
    const params = useParams()
    const [Coin, setCoin] = useState({});
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
        }).catch((error) => {
            console.log("error")
        })
    }, [])
    return (

        <div>
            <Navbar />
            <br />
            <br />
            <div className='des'>
                <div className='lamo'>
                    <div>
                        {/* <img src={Coin.image.small} alt="" /> */}
                        <h1>{Coin.id}</h1>
                        <h2>${Coin.symbol}</h2>
                    </div>
                    <div className='renk'>
                        <h1>Rank</h1>
                        <h1>#{Coin.market_cap_rank}</h1>
                    </div>

                </div>
                <div>
                    <div className='pol'>
                        <table>
                            <thead>
                                <tr>
                                    <th>1h</th>
                                    <th>24h</th>

                                    <th>30d</th>
                                    <th>1yr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Coin.market_data?.price_change_percentage_1h_in_currency ? <p>{Coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                    <td>{Coin.market_data?.price_change_percentage_24h_in_currency ? <p>{Coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>

                                    <td>{Coin.market_data?.price_change_percentage_24h_in_currency ? <p>{Coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                    <td>{Coin.market_data?.price_change_percentage_24h_in_currency ? <p>{Coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='content'>
                        <div className='stats'>
                            <div className='left'>
                                <div className='row'>
                                    <h4>24 Hour Low</h4>
                                    {Coin.market_data?.low_24h ? <p>${Coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                                </div>
                                <div className='row'>
                                    <h4>24 Hour High</h4>
                                    {Coin.market_data?.high_24h ? <p>${Coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                            </div>
                            <div className='right'>
                                <div className='row'>
                                    <h4>Market Cap</h4>
                                    {Coin.market_data?.market_cap ? <p>${Coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                                </div>
                                <div className='row'>
                                    <h4>Circulating Supply</h4>
                                    {Coin.market_data ? <p>{Coin.market_data.circulating_supply}</p> : null}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className='about'>
                    <h2>ABOUT COIN</h2>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(Coin.description ? Coin.description.en : ''),
                    }}>

                    </p>

                </div>


            </div>
            <Footer />

        </div>
    );
}

export default Th2;