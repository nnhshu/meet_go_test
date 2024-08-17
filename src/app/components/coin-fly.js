"use client";
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CoinFlyAnimation = ({ trigger }) => {
    const coins = [
        { toX: 'calc(-100px + 24px)', toY: 'calc(-105px + 24px)', delay: '0.3s' },
        { toX: 'calc(-70px + 24px)', toY: '-90px', delay: '0.1s' },
        { toX: 'calc(-30px + 24px)', toY: '-125px', delay: '0s' },
        { toX: 'calc(10px + 24px)', toY: '-130px', delay: '0.2s' },
        { toX: 'calc(30px + 24px)', toY: '-100px', delay: '0.1s' },
        { toX: 'calc(70px + 24px)', toY: '-95px', delay: '0.4s' },
        { toX: 'calc(100px + 24px)', toY: '-100px', delay: '0.2s' },
    ];

    const [showCoins, setShowCoins] = useState(false);

    // Tạo hiệu ứng ẩn hiện mỗi khi "trigger" thay đổi
    const springStyles = useSpring({
        opacity: showCoins ? 1 : 0,
        transform: 'scale(1)',
        config: { tension: 170, friction: 20 }
    });

    // Tự động ẩn và hiển thị lại khi "trigger" thay đổi
    useEffect(() => {
        if (trigger) {
            setShowCoins(true);
            setTimeout(() => setShowCoins(false), 1000); // Sau 1 giây sẽ ẩn đi
        }
    }, [trigger]);

    return (
        <animated.div style={springStyles} className="coins-container">
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
        </animated.div>
    );
};

export default CoinFlyAnimation;
