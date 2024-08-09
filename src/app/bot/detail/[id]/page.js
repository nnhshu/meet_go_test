'use client';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { TelegramProvider, useTelegram } from "@/app/lib/TelegramProvider";

import Image from "next/image";

import { FcFlashOn } from "react-icons/fc";
import { Progress } from "@nextui-org/react";
import '@/app/bot/bot.css';

import BackButton from "@/app/components/back";
import { FiMapPin } from "react-icons/fi";

function MapDetailPage({ locations, selectedLocation }) {

    const [isAnimating, setIsAnimating] = useState(false);
    const [tapCount, setTapCount] = useState(0);
    const [pointDisplay, setPointDisplay] = useState(false);
    const [points, setPoints] = useState([]);
    const [webApp, setWebApp] = useState(null);

    const handleIconClick = () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');   
        console.log('clicked')
        setIsAnimating(true);
        // Tạo điểm mới với vị trí ngẫu nhiên
        const newPoint = {
            id: Math.random().toString(36).substr(2, 9), // Tạo ID ngẫu nhiên
            value: 0.5, // Số điểm mỗi lần click
            top: Math.floor(Math.random() * 100), // Tọa độ top ngẫu nhiên (0-100%)
            left: Math.floor(Math.random() * 100), // Tọa độ left ngẫu nhiên (0-100%)
        };

        // Thêm điểm mới vào mảng points
        setPoints([...points, newPoint]);

        // Loại bỏ điểm sau một thời gian nhất định (ví dụ: 1 giây)
        setTimeout(() => {
            setPoints((prevPoints) => prevPoints.filter((point) => point.id !== newPoint.id));
            setIsAnimating(false);
        }, 1000);
    };

    useEffect(() => {
        const handleTouch = () => {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');   
        };

        // Thêm sự kiện chạm vào màn hình
        window.addEventListener('touchstart', handleTouch);

        // Cleanup sự kiện khi component unmount
        return () => {
            window.removeEventListener('touchstart', handleTouch);
        };
    }, []);

    return (
        <>
            <TelegramProvider>
                <div className="map-detail-wrap p-4">
                    <BackButton />
                    <div className="map-detail-top mt-10">
                        <div className="grid grid gap-4 grid-cols-3 w-full'">
                            <div className="bg-map-top p-2 text-center rounded-2xl">
                                <p className="text-white text-xs min-h-8 block">Thu nhập mỗi <br /> lượt chạm</p>
                                <h2 className="text-gradient font-bold">250m</h2>
                            </div>
                            <div className="bg-map-top p-2 text-center rounded-2xl">
                                <p className="text-white text-xs min-h-8 block">Số coin <br /> tại NFT</p>
                                <h2 className="font-bold text-white">100 / <span className="text-gradient ">100k</span></h2>
                            </div>
                            <div className="bg-map-top p-2 text-center rounded-2xl">
                                <p className="text-white text-xs min-h-8 block">Lên hạng <br /> cấp 2</p>
                                <h2 className="text-gradient font-bold">11,000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="map-detail-energy my-4">
                        <div className="map-energy-box flex items-center">
                            <FcFlashOn size={24} />
                            <span className="text-white">1000/ <b className="text-warning">1000</b></span>
                        </div>
                        <Progress
                            size="lg"
                            radius="sm"
                            classNames={{
                                base: "max-w-lg",
                                track: "bg-transparent border border-gradient p-1",
                                indicator: "bg-gradient",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }}
                            value={65}
                            showValueLabel={false}
                        />
                    </div>
                    <div className="map-detail-main text-center">
                        <div className="map-detail-level bg-gradient inline-flex items-center gap-2 mx-auto px-5 py-2 rounded-full">
                            <Image src="/img/icons/level.svg" width={24} height={24} alt="" />
                            <span className="text-white">Cấp 1</span>
                        </div>
                        <div className="map-coin-wrap mt-4 relative" style={{backgroundImage: `url(/img/icons/Sky.png)`}}>
                            <div className="flex gap-2 align-items-center justify-center">
                                <Image src="/img/icons/dollar.svg" width={24} height={24} alt="" />
                                <span className="text-gradient text-2xl">5,860.6</span>
                            </div>
                            <Image src="/img/icons/Map/default.svg" width={200} height={170} alt=""  className={`map-icon-pen absolute ${isAnimating ? "animation-bounce" : ""}`}  onClick={handleIconClick} />
                            <Image src="/img/icons/map_bottom.svg" width={120} height={35} alt="" className="map-icon-bottom absolute" />
                            <Image src="/img/icons/Coin_fly.png" width={375} height={310} alt="" className={`map-icon-fly absolute ${isAnimating ? "zoom-fade" : ""}`} />
                            {points.map((point) => (
                                <div
                                    key={point.id}
                                    className="point-fly absolute"
                                    style={{ top: `${point.top}%`, left: `${point.left}%` }}
                                >
                                    +{point.value}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="map-detail-bottom">
                        <div className="timeline">
                            <div className="timeline-item text-left">
                                <div className="timeline-point text-white">0.2</div>
                                <div className="timeline-icon"></div>
                                <div className="timeline-meter text-white">200m</div>
                            </div>
                            <div className="timeline-item text-center items-center">
                                <div className="timeline-point text-white">0.4</div>
                                <div className="timeline-icon"></div>
                                <div className="timeline-meter text-white">100m</div>
                            </div>
                            <div className="timeline-item text-center items-center">
                                <div className="timeline-point text-white">0.6</div>
                                <div className="timeline-icon"></div>
                                <div className="timeline-meter text-white">50m</div>
                            </div>
                            <div className="timeline-item text-center items-center">
                                <div className="timeline-point text-white">0.8</div>
                                <div className="timeline-icon"></div>
                                <div className="timeline-meter text-white">20m</div>
                            </div>
                            <div className="timeline-item text-right items-end">
                                <div className="timeline-point text-white">1</div>
                                <div className="timeline-icon"></div>
                                <div className="timeline-meter text-white">10m</div>
                            </div>
                            <div className="timeline-progress">
                                <div className="timeline-progress-bar" style={{width: "20%"}}><div className="text-meter text-gradient">97m</div></div>
                            </div>
                        </div>
                        <div className="map-detail-info flex gap-3 items-center mt-5 p-2">
                            <div className="map-detail-info-img grow w-16">
                                <Image src="/img/icons/img_detail.png" width={60} height={60} alt=""/>
                            </div>
                            <div className="map-detail-info-right grow">
                                <h3 className="text-white">Khu vực 2Q8F+3MJ, P. Trần Văn Lai...</h3>
                                <div className="flex items-center gap-2">
                                    <FiMapPin className="text-danger" />
                                    <span className="text-violet-500 text-xs">Khu vực 2Q8F+3MJ, P. Trần Văn Lai, Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TelegramProvider>
        </>
    );
}

export default MapDetailPage;