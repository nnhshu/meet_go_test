'use client';
import React from "react";
import Image from "next/image";
import '@/app/bot/bot.css';
import BackButton from "@/app/components/back";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

import { FiCopy } from "react-icons/fi";

export default function InvitePage() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

   
    return (
        <React.Fragment>
            <div className="invite-wrap p-4 overflow-y-scroll	">
                <BackButton />
                <div className="invite-title text-center pt-10 mb-10">
                    <h2 className="text-white text-2xl">Invite Friends</h2>
                    <span className="text-white">Invite friends to get more bonues.</span>
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
                        <span className="text-white">https://t.me/locagoapp_bot/launch....</span>
                        <FiCopy className="text-warning" />
                    </div>
                    <Button color="primary" className="bg-gradient rounded-full mt-4 w-full">
                        Invite Friends
                    </Button>
                </div>
                <div className="invite-friend mt-4">
                    <h2 className="text-white text-xl">Friends List</h2>
                    <div className="invite-friend-container mt-4 p-4 rounded-xl bg-slate-900">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/img/invite/Avatar.png" width={48} height={48} alt=""/>
                            <div>
                                <h3 className="text-white">Marie L.</h3>
                                <span className="text-slate-400 text-sm">10 rides completed  |  Est. 20m</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/img/invite/Avatar.png" width={48} height={48} alt=""/>
                            <div>
                                <h3 className="text-white">Marie L.</h3>
                                <span className="text-slate-400 text-sm">10 rides completed  |  Est. 20m</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/img/invite/Avatar.png" width={48} height={48} alt=""/>
                            <div>
                                <h3 className="text-white">Marie L.</h3>
                                <span className="text-slate-400 text-sm">10 rides completed  |  Est. 20m</span>
                            </div>
                        </div>
                    </div>
                    <div className="invite-box flex items-center justify-between gap-2 gradient-border p-4" onClick={onOpen}>
                        <Image src="/img/invite/invite_icon.svg" width={40} height={40} alt=""/>
                        <div className="flex-1">
                            <h3 className="text-white">Add referral person</h3>
                            <span className="text-slate-400 text-sm">Referrer information code</span>
                        </div>
                        <Image src="/img/invite/chevron_right.svg" width={24} height={24} alt=""/>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="bg-modal">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-white">Add referral person</ModalHeader>
                            <ModalBody>
                                <Input type="text" label="Referrer information code" className="bg-dark" />
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button variant="light" className="rounded-full text-white bg-black" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" className="bg-gradient rounded-full" onPress={onClose}>
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}
