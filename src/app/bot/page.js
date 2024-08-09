'use client';
import React from "react";
import Image from "next/image";
import MyNavbar from "../components";
import  MapShowListNft from "./map";
import Map_Modal from "../components/Map_Modal/modal";
import './bot.css';

export default function Map() {
   
    return (
        <div className="botApp-wrap">
            <MapShowListNft locations={[]} />
            <MyNavbar />
            <Map_Modal />
        </div>
    );
}
