'use client';
import React from "react";
import Image from "next/image";
import '@/app/bot/bot.css';
import BackButton from "@/app/components/back";

export default function ProfilePage() {
   
    return (
        <div className="ranking-wrap p-4">
            <Image src="/img/bg_top_stats.png" width={600} height={400} alt="" className="ranking-wrap-img" />
            <BackButton />
            <div className="ranking-top">
                <div className="ranking-top-item">
                    <div className="box-rank-stt">
                        <div className="box-rank-avatar">
                            <Image src="/img/stats/Avatar.png" width={52} height={52} alt=""/>
                        </div>
                        <span>Amelia S</span>
                    </div>
                    <Image src="/img/stats/rank_2.png" width={87} height={125} alt=""/>
                </div>
                <div className="ranking-top-item">
                    <div className="box-rank-stt">
                        <div className="box-rank-avatar rank-first relative">
                            <Image src="/img/stats/Icon_Crown.svg" width={24} height={24} alt="" className="crown"/>
                            <Image src="/img/stats/Outline.svg" width={64} height={64} alt="" className="outline_first"/>
                            <Image src="/img/stats/Avatar.png" width={64} height={64} alt=""/>
                        </div>
                        <span>Amelia S</span>
                    </div>
                    <Image src="/img/stats/rank_1.png" width={87} height={146} alt=""/>
                </div>
                <div className="ranking-top-item">
                    <div className="box-rank-stt">
                        <div className="box-rank-avatar">
                            <Image src="/img/stats/Avatar.png" width={52} height={52} alt=""/>
                        </div>
                        <span>Amelia S</span>
                    </div>
                    <Image src="/img/stats/rank_3.png" width={87} height={91} alt=""/>
                </div>
            </div>
            <div className="current-ranking">
                <div className="ranking-stt">12</div>
                <div className="ranking-content">
                    <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                    <div className="ranking-text ">
                        <p className="text-white font-bold block">Tuong Pham</p>
                        <div className="flex gap-2 items-center">
                            <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                            <span className="text-gradient">80,000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ranking-list mt-5 p-4 max-h-80 overflow-y-scroll">
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ranking-box flex gap-4 items-center mb-5">
                    <div className="ranking-stt">12</div>
                    <div className="ranking-content">
                        <Image src="/img/stats/Avatar.png" width={48} height={48} alt="" />
                        <div className="ranking-text ">
                            <p className="text-white font-bold block">Tuong Pham</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/img/icons/dollar.svg" width={16} height={16} alt=""/>
                                <span className="text-gradient">80,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
