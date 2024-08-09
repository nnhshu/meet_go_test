'use client';
import React, { useRef, useState, useEffect, useCallback } from "react";

import { FcFlashOn } from "react-icons/fc";
import { Progress } from "@nextui-org/react";



import icon_default from '../../../../public/img/icons/Map/default.png';
import icon_pending from '../../../../public/img/icons/Map/pending.png';
import icon_buy from '../../../../public/img/icons/Map/buy.png';
import icon_shop from '../../../../public/img/icons/Map/shop.png';
import icon_gift from '../../../../public/img/icons/Map/gift.png';

function MapDetailPage({ locations, selectedLocation }) {

    return (
        <>
            <div className="map-detail-wrap">
                <div className="map-detail-top">
                    <div className="grid grid gap-4 grid-cols-3 w-full'">
                        <div className="bg-purple-600 p-2">
                            <p>Thu nhập mỗi lượt chạm</p>
                            <h2 className="text-fuchsia-800">250m</h2>
                        </div>
                        <div className="bg-purple-600 p-2">
                            <p>Thu nhập mỗi lượt chạm</p>
                            <h2 className="text-fuchsia-800">250m</h2>
                        </div>
                        <div className="bg-purple-600 p-2">
                            <p>Thu nhập mỗi lượt chạm</p>
                            <h2 className="text-fuchsia-800">250m</h2>
                        </div>
                    </div>
                </div>
                <div className="map-detail-energy">
                    <div className="map-energy-box">
                        <FcFlashOn />
                        <span>1000/ <b className="text-fuchsia-800">1000</b></span>
                    </div>
                    <Progress
                        size="sm"
                        radius="sm"
                        classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                        }}
                        value={65}
                        showValueLabel={true}
                    />
                </div>
                <div className="map-detail-main">
                    <div className="map-detail-level">
                        <Image src="/img/icons/level.svg" width={24} height={24} alt="" />
                        <span>Cấp 1</span>
                    </div>
                    <div className="map-coin-wrap" style={{backgroundImage: `url(/img/icons/Sky.png)`}}>
                        <div className="flex gap-2 align-items-center">
                            <Image src="/img/icons/dollar.svg" width={24} height={24} alt="" />
                            <span className="text-fuchsia-800 text-2xl">5,860.6</span>
                        </div>
                        <Image src="/img/icons/Map/default.png" width={140} height={170} alt="" className="map-icon-pen" />
                        <Image src="/img/icons/map_bottom.svg" width={120} height={35} alt="" className="map-icon-bottom" />
                    </div>
                </div>
                <div className="map-detail-bottom">

                </div>
            </div>
        </>
    );
}

export default MapDetailPage;