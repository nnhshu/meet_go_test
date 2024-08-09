'use client';
import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox } from "@nextui-org/react";

function Map_Modal() {
    const modalPlacement = "center";
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dontShow, setDontShow] = useState(false);

    useEffect(() => {
        const dontShowModal = localStorage.getItem('dontShowModal') === 'true';
        setDontShow(dontShowModal);
        if (!dontShowModal) {
            onOpen();
        }
    }, [onOpen]);

    const handleClose = () => {
        onClose();
        if (dontShow) {
            localStorage.setItem('dontShowModal', 'true');
        } else {
            localStorage.removeItem('dontShowModal');
        }
    };

    const handleCheckboxChange = () => {
        setDontShow(!dontShow);
    };

    return (
        <>
            <Modal
                size="xs"
                isOpen={isOpen}
                placement={modalPlacement}
                className="modal-wrap"
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-center">
                            To start playing, please click on the location icons as shown below
                        </ModalHeader>
                        <ModalBody>
                            <div className="map-modal-box">
                                <div className="box-left">
                                    <img src="/img/icons/Map/coin.svg" />
                                    <span>80.0000</span>
                                </div>
                                <div className="box-right">
                                    <img src="/img/icons/Map/gps.svg" />
                                    <span>20m</span>
                                </div>
                            </div>
                            <div className="map-modal-content">
                                <img src="/img/icons/Map/default.svg" className="pin-top" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="340" height="126" viewBox="0 0 340 126" fill="none">
                                    <path d="M0 126L167 0L340 126H0Z" fill="url(#paint0_linear_8102_3922)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_8102_3922" x1="170" y1="0" x2="170" y2="126" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4F468F" />
                                            <stop offset="1" stopColor="#332C63" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <img src="/img/icons/Map/map_popup.svg" className="map-bottom" />
                            </div>
                        </ModalBody>
                        <ModalFooter className="justify-center">
                            <Button className="btn-play text-white" onPress={handleClose}>
                                Start Playing
                            </Button>
                        </ModalFooter>
                        <div className="text-white d-block text-center mb-3">
                            <Checkbox
                                isSelected={dontShow}
                                onChange={handleCheckboxChange}
                                color="primary"
                            >
                                <span className="text-white">Don't show</span>
                            </Checkbox>
                        </div>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Map_Modal;
