import React, { useState } from 'react';
import Coinlist from './Coinlist';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Newcoins = (props) => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  function onChange(e) {
    setData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/coin/${data}`);
  }

  return (
    <div>
      <Navbar />
      <h4>Today's Cryptocurrency Prices by Market Cap</h4>
      <>
        <form onSubmit={handleSubmit}>
          <input className='inp' type="text" onChange={onChange} />
          <button className='src-button'>Search</button>
        </form>
      </>
      <div className="coin-row">
        <p>#</p>
        <p> </p>
        <p>PRICE</p>
        <p>CHANGE</p>
        <p>TOTAL VOLUME</p>
        <p>MARKET CAPITAL</p>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link style={{ textDecoration: 'none' }} to={`/coin/${coins.id}`}>
            <Coinlist coins={coins} />
          </Link>
        );
      })}
      <Footer />
    </div>
  );
};

export default Newcoins;
