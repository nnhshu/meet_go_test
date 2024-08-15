"use client";
import React from 'react';

const CoinFlyAnimation = () => {
    const coins = [
        { toX: 'calc(-100px + 24px)', toY: 'calc(-105px + 24px)', delay: '0.3s' },
        { toX: 'calc(-70px + 24px)', toY: '-90px', delay: '0.1s' },
        { toX: 'calc(-30px + 24px)', toY: '-125px', delay: '0s' },
        { toX: 'calc(10px + 24px)', toY: '-130px', delay: '0.2s' },
        { toX: 'calc(30px + 24px)', toY: '-100px', delay: '0.1s' },
        { toX: 'calc(70px + 24px)', toY: '-95px', delay: '0.4s' },
        { toX: 'calc(100px + 24px)', toY: '-100px', delay: '0.2s' },
    ];
    return (
        <>
            {coins.map((coin, index) => (
                <div
                    key={index}
                    className="coin coin--animated"
                    style={{
                        '--coin-to-x': coin.toX,
                        '--coin-to-y': coin.toY,
                        '--coin-delay': coin.delay,
                    }}
                ></div>
            ))}
        </>
    );
};

export default CoinFlyAnimation;
