'use client';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import '@/app/bot/bot.css';
import BackButton from "@/app/components/back";
import { useToast } from 'rc-toastr';
import { FiCopy } from "react-icons/fi";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { TelegramProvider, useTelegram } from "./lib/TelegramProvider";
import { useTonConnect } from "@/app/tonConnect";

const shortenString = (str, frontLen = 6, backLen = 4) => {
    if (!str) return "";
    return `${str.slice(0, frontLen)}...${str.slice(-backLen)}`;
};

export default function ProfilePage() {

    
    const [totalPoints, setTotalPoints] = useState(1000);

    const { toast } = useToast();

    const { tonConnectUI, isInitialized } = useTonConnect();
    const [currentAcc, setCurrentAcc] = useState('');


    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            toast.success('Copy success!');
        } catch (err) {
            toast.success('Copy fail!');
        }
    };

    const connectTon = async () => {
        if (isInitialized && tonConnectUI) {
            try {
                const isConnected = tonConnectUI.connected;
                
                if (!isConnected) {
                    const connectedWallet = await tonConnectUI.connectWallet();
                    const currentAccount = tonConnectUI.account;
                    const address = currentAccount && new window.TonWeb.utils.Address(currentAccount.address);
                    const nonBounceableAddress = address && address.toString(true, true, false);
                    console.log(nonBounceableAddress)
                    setCurrentAcc(nonBounceableAddress);
                    toast.success('Connect wallet success!');
                } else {
                    console.log('Wallet is already connected.');
                }
            } catch (error) {
                console.error('Error connecting TON wallet:', error);
            }
        }
    };

    const disconnectTon = async () => {
        if (isInitialized && tonConnectUI.connected) {
            // Ngắt kết nối ví
            await tonConnectUI.disconnect();
            setCurrentAcc(null); // Reset lại trạng thái tài khoản
            console.log('Wallet disconnected.');
        }
    };

    useEffect(() => {
        const checkWalletConnection = async () => {
            console.log(tonConnectUI)
            if (tonConnectUI) {
                console.log(12)
                if (tonConnectUI.connected) {
                    const currentAccount = tonConnectUI.account;
                    console.log(tonConnectUI.account)
                    if (currentAccount) {
                        const address = new window.TonWeb.utils.Address(currentAccount.address);
                        const nonBounceableAddress = address.toString(true, true, false);
                        setCurrentAcc(nonBounceableAddress);
                    }
                }
            }
        };
        checkWalletConnection();
    }, []);

    return (
        <TelegramProvider>
            <div className="profile-wrap">
                <BackButton />
                <div className="profile-top">
                    <div className="box-profile-avatar text-center">
                        <Image src="/img/stats/Avatar.png" width={90} height={90} alt=""/>
                    </div>
                </div>
                <div className="profile-main p-4">
                    <div className="profile-name text-white text-center text-2xl">Mr. Tuong</div>  
                    <div className="code-wrap text-white text-center mt-4">Code: WMSTOS</div>
                    <div className="flex gap-2 align-items-center justify-center mb-4 mt-4">
                        <Image src="/img/icons/dollar.svg" width={36} height={36} alt="" />
                        <span className="text-gradient text-4xl">{totalPoints.toFixed(1)}</span>
                    </div>
                    <div className="profile-info flex gap-4 align-items-center justify-center p-4">
                        <div className="profile-info-item text-center">
                            <span className="text-slate-200">Est.</span>
                            <h3 className="text-white text-2xl">250m</h3>
                        </div>
                        <div className="profile-info-item text-center">
                            <span className="text-slate-200">Transfers</span>
                            <h3 className="text-white text-2xl">50000</h3>
                        </div>
                        <div className="profile-info-item text-center">
                            <span className="text-slate-200">Friends</span>
                            <h3 className="text-white text-2xl">30</h3>
                        </div>
                    </div>
                    <div className="invite-link-wrap gradient-border p-4 mb-4 mt-4">
                        <div className="flex gap-2 items-center" onClick={() => connectTon()}>
                            <Image src="/img/profile/TON.svg" width={40} height={40} alt=""/>
                            {
                                currentAcc ?
                                <div className="flex gap-2 items-center justify-between flex-1">
                                    <a className="text-warning mt-0">{shortenString(currentAcc)}</a>
                                    <Button color="primary" className="bg-gradient rounded-full" onClick={() => disconnectTon()}>
                                        Disconnect
                                    </Button>
                                </div>
                                :
                                <div>
                                    <h3 className="text-white">TON Wallet</h3>
                                    <span className="text-slate-400">Connect your TON Wallet</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="invite-link-wrap gradient-border p-4">
                        <div className="flex gap-2 items-center">
                            <Image src="/img/invite/link.svg" width={40} height={40} alt=""/>
                            <div>
                                <h3 className="text-white">Invite Link</h3>
                                <span className="text-slate-400">Invite your friends and get bonuses!</span>
                            </div>
                        </div>
                        <div className="invite-link flex items-center justify-between p-4 mt-4">
                            <span className="text-white">https://t.me/meetgoapp_bot/launch....</span>
                            <FiCopy className="text-warning" onClick={() => copyToClipBoard('https://t.me/meetgoapp_bot/launch')} />
                        </div>
                        <Button color="primary" className="bg-gradient rounded-full mt-4 w-full">
                            Invite Friends
                        </Button>
                    </div>
                </div>
            </div>
        </TelegramProvider>
    );
}
