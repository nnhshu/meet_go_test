'use client';
import React from "react";
import { FiAlignRight } from "react-icons/fi";

import Image from "next/image";
import './landing.css';
import { Tabs, Tab, Card, CardBody, CardHeader, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";

export default function Landing() {
    const [isVertical, setIsVertical] = React.useState(true);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About us",
        "Features",
        "Product Ecosystem",
        "Tokenomics",
        "Resources",
    ];
    return (
        <>
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                isBlurred={false}
                maxWidth="full"
                className="bg-transparent container mx-auto md:flex md:items-center header-main fixed top-0 left-0 right-0 z-50 md:py-4 py-0"
            >
                <NavbarContent className="md:flex md:pr-3 pr-0" justify="start">
                    <NavbarBrand>
                        <Image alt="" src="/img/logo.png" width={130} height={30} />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden md:flex gap-4 w-full justify-end" justify="end">
                    <NavbarItem>
                        <Link className="block p-0 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" href="#">
                            About us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="block p-0 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" href="#" aria-current="page">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="block p-0 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" href="#">
                            Product Ecosystem
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="block p-0 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" href="#">
                            Tokenomics
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="block p-0 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" href="#">
                            Resources
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <button className="py-2 px-6 rounded-full btn-contact sm:inline-block hidden"><span>Contact us</span></button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className="md:hidden" justify="end">
                    <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} onChange={() => setIsMenuOpen(!isMenuOpen)} />
                </NavbarContent>
                <NavbarMenu className="w-full">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-white mb-5 mt-5"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            {/* <header className="">
                <div className="">

                </div>
                <nav className="text-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <a href="#" className="font-bold text-xl text-indigo-600">
                                <Image alt="" src="/img/logo.png" width={130} height={30} />
                            </a>
                            <button
                                className="border border-solid border-gray-600 px-3 py-1 rounded text-white opacity-1 hover:opacity-75 md:hidden"
                                id="navbar-toggle"
                            >
                                <FiAlignRight size={24} />
                            </button>
                        </div>
                        <div
                            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                            id="navbar-collapse"
                        >
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" >
                                About us
                            </a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" >
                                Features
                            </a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" >
                                Product Ecosystem
                            </a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" >
                                Tokenomics
                            </a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" >
                                Resources
                            </a>
                        </div>
                        <button className="py-2 px-6 rounded-full btn-contact sm:inline-block hidden"><span>Contact us</span></button>
                    </div>
                </nav>
            </header> */}
            <section className="banner pt-28">
                <div className="container px-4 mx-auto">
                    <div className="columns-1">
                        <div className="banner-top pt-5 w-full text-center">
                            <h1 className="text-white mb-4 sm:w-1/2 w-full text-3xl md:text-5xl font-bold leading-normal md:leading-normal">The value of <strong>encounter</strong></h1>
                            <span className="text-white mb-4 md:w-1/2 w-full">Meetgo is a face-to-face meeting platform to exchange work and life.</span>
                            <button className="py-3 px-6 rounded-full btn-main text-white hover:opacity-75">Introduction Video</button>
                            <Image alt="" className="mt-7" src="/img/img_banner.png" width={1024} height={1024} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners sm:pt-28 sm:pb-28 pt-10 pb-10">
                <div className="container px-4 mx-auto">
                    <div className="columns-1">
                        <h5 className="text-white text-center mb-7">Trusted by Customers & Partners</h5>
                        <div className="grid grid-cols-2 md:grid-cols-5 sm:gap-6 gap-4">
                            <Image alt="" src="/img/partners/1.png" width={200} height={40} />
                            <Image alt="" src="/img/partners/2.png" width={200} height={40} />
                            <Image alt="" src="/img/partners/3.png" width={200} height={40} />
                            <Image alt="" src="/img/partners/4.png" width={200} height={40} />
                            <Image alt="" src="/img/partners/5.png" width={200} height={40} />
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto flex gap-8 mt-10 sm:flex-row flex-col">
                    <div className="columns-2 flex flex-col gap-8">
                        <div className="p-4 sm:p-10 card-bg-item flex items-center justify-between w-full sm:flex-row flex-col-reverse">
                            <div className="card-item-left sm:mt-0 mt-5">
                                <h3 className="text-white text-2xl mb-2">Meetgo – Let's meet</h3>
                                <p className="text-slate-400 font-light text-sm w-full">Meetgo is a reason for people to meet and exchange work and life directly to receive bonus points, as well as encourage users to network and create new relationships and new values.</p>
                            </div>
                            <Image alt="" src="/img/program/img_1.png" width={158} height={150} />
                        </div>
                        <div className="p-4 sm:p-10 card-bg-item flex items-center justify-between w-full sm:flex-row flex-col-reverse">
                            <div className="card-item-left sm:mt-0 mt-5">
                                <h3 className="text-white text-2xl mb-2">MeetSME – Marketing for SME</h3>
                                <p className="text-slate-400 font-light text-sm w-full">The solution includes software and applications for businesses, used in operations to attract customers, increase sales through a management platform as well as create new solutions to develop new customers.</p>
                            </div>
                            <Image alt="" src="/img/program/SME-1.png" width={158} height={150} />
                        </div>
                    </div>
                    <div className="columns-1 gap-8">
                        <div className="p-4 sm:p-10 card-bg-item flex items-center justify-between flex-col min-h-full">
                            <Image alt="" src="/img/program/MeetNFT.png" width={400} height={356} />
                            <div className="card-item-left sm:mt-0 mt-5">
                                <h3 className="text-white text-2xl mb-2">Meet Location – Meet Together</h3>
                                <p className="text-slate-400 font-light text-sm">A physical location confirmed and certified through MeetGo's Meet Location in the digital space (Metaverse). Used for investors to receive bonus points for encouraging the MeetGo user community to visit store locations according to GPS, in order to improve business efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us sm:pt-28 sm:pb-28 pt-10 pb-10">
                <div className="container px-4 mx-auto flex gap-8 mt-10">
                    <div className="columns-1 flex flex-col gap-8 md:pr-24 pr-0">
                        <span className="text-white">ABOUT US</span>
                        <h2 className="font-bold text-3xl mb-2">LocaGo represents a pioneering platform within the Web3 GeoEconomy</h2>
                        <p className="text-white font-light w-full">Leveraging Blockchain, VR, AI, and 3D technologies to seamlessly connect users with local businesses.</p>
                        <p className="text-white font-light w-full">Through the innovative use of LocaNFTs, LocaGo incentivizes user engagement, exploration, and rewards, thus catalyzing economic growth and fostering community development.</p>
                        <div className="flex items-center gap-16">
                            <div className="flex items-center gap-3 text-white">
                                <h3 className="number">12K+</h3>
                                <span>User <br />Global</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <h3 className="number">8+</h3>
                                <span>Project <br />Created</span>
                            </div>
                        </div>
                    </div>
                    <div className="columns-1 gap-8 hidden sm:block">
                        <Image alt="" src="/img/about.png" width={1024} height={1024} />
                    </div>
                </div>
                <div className="container px-4 mx-auto grid sm:grid-cols-4 grid-cols-2 gap-8 mt-10">
                    <div className="columns-1">
                        <div className="box-item flex flex-col gap-3 p-2 transition-all">
                            <Image alt="" src="/img/icons/computer-vision.png" width={48} height={48} />
                            <h3 className="text-white font-bold text-2xl mb-2">Vision</h3>
                            <p className="text-slate-400 font-light text-sm">A global leader in enhancing real-world experiences and integrating Blockchain into everyday operations.</p>
                        </div>
                    </div>
                    <div className="columns-1">
                        <div className="box-item flex flex-col gap-3 p-2 transition-all">
                            <Image alt="" src="/img/icons/milestones.png" width={48} height={48} />
                            <h3 className="text-white font-bold text-2xl mb-2">Mission</h3>
                            <p className="text-slate-400 font-light text-sm">Deploy AI, AR, VR, Big Data, and Blockchain to empower businesses and strengthen human connections.</p>
                        </div>
                    </div>
                    <div className="columns-1">
                        <div className="box-item flex flex-col gap-3 p-2 transition-all">
                            <Image alt="" src="/img/icons/target.png" width={48} height={48} />
                            <h3 className="text-white font-bold text-2xl mb-2">Goals</h3>
                            <p className="text-slate-400 font-light text-sm">Unite 100M users and 1M businesses across 50 countries by 2027, building vibrant communities worldwide.</p>
                        </div>
                    </div>
                    <div className="columns-1">
                        <div className="box-item flex flex-col gap-3 p-2 transition-all">
                            <Image alt="" src="/img/icons/philosophy.png" width={48} height={48} />
                            <h3 className="text-white font-bold text-2xl mb-2">Philosophy</h3>
                            <p className="text-slate-400 font-light text-sm">Simplify technology for universal accessibility, enabling effortless engagement via blockchain.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sm:pt-28 sm:pb-28 pt-10 pb-10">
                <div className="container px-4 mx-auto mt-10">
                    <div className="columns-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 mb-8 sm-mb-0">
                        <div className="flex justify-center items-center">
                            <Image alt="" className="w-1/2" src="/img/innovate.png" width={1024} height={1024} />
                        </div>
                        <div className="right grow">
                            <h2 className="text-3xl sm:text-5xl mb-2 text-white mb-5 font-bold leading-normal">Revolutionizes the connection through its innovative</h2>
                            <p className="text-white font-light w-ful mb-5">LocaGo creates a seamless blend of digital and physical realms, fostering an ecosystem where Digital Citizens and Businesses converge through LocaNFTs.</p>
                            <button className="py-3 px-6 rounded-full btn-main text-white hover:opacity-75">Learn more</button>
                        </div>
                    </div>
                    <div className="columns-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16">
                        <div className="right grow">
                            <h2 className="text-3xl sm:text-5xl mb-2 text-white mb-5 font-bold leading-normal">LocaGo Economy regulated by LCB rewards and LCG governance token</h2>
                            <p className="text-white font-light w-ful mb-5">LocaGo's tokenomics aim to create a balanced and sustainable economic mechanism, encouraging active participation from the user and business community while generating value for both LCG and LCB.</p>
                            <ul className="list-disc ps-5">
                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                <li className="text-white">Token Name: <b>LCG</b></li>
                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image alt="" className="grow" src="/img/img_12.png" width={551} height={597} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="features sm:pt-28 sm:pb-28 pt-10 pb-10">
                <h2 className="text-3xl sm:text-5xl mb-2 text-white text-center mb-5 font-bold leading-normal">Features</h2>
                <div className="container px-4 mx-auto mt-10">
                    <div className="columns-1">
                        <div className="features-container text-white sm:p-8 p-4">
                            <Tabs aria-label="Options" isVertical={isVertical} className="flex-col bg-transparent">
                                <Tab key="LocaMemory" title="LocaMemory" className="text-white">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-4xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="LoveLock" title="LoveLock">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-5xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="Message" title="Message">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-5xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="3d" title="3D Message">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-5xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="Daily" title="Daily Deals">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-5xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="LocaAI" title="LocaAI">
                                    <Card>
                                        <CardBody>
                                            <Image alt="" className="grow" src="/img/feature_1.png" width={1024} height={597} />
                                            <h2 className="text-3xl sm:text-5xl mt-5 text-white mb-5 font-bold leading-normal">LocaMemory</h2>
                                            <ul className="list-disc ps-5">
                                                <li className="text-white">Total Supply: <b>21 Billion LCG</b></li>
                                                <li className="text-white">Token Name: <b>LCG</b></li>
                                                <li className="text-white">Blockchain: <b>Binance Smart Chain (BSC)</b></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            <section className="roadmap sm:pt-28 sm:pb-28 pt-10 pb-10">
                <h2 className="text-3xl sm:text-5xl mb-2 text-white text-center mb-5 font-bold leading-normal">Roadmap</h2>
                <div className="container mx-auto">
                    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="col-start-1 col-end-5 ml-auto">
                                <div className="roadmap-item flex sm:flex-row flex-col items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <Image alt="" src="/img/icons/roadmap_1.svg" width={110} height={100} />
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">Loca AI features to support tourism</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>AI-powered assistant for travel</li>
                                                <li>Multilingual translation via AI for chat and calls</li>
                                                <li>Connecting with local residents for guided tours</li>
                                                <li>Recommending local eateries</li>
                                                <li>Planning travel itineraries</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">1</div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">2</div>
                            </div>
                            <div className="col-start-6 col-end-10">
                                <div className="roadmap-item flex sm:flex-row flex-col-reverse items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">AR features to encourage tourism</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>Highlight tourist spots with AR events in each city</li>
                                                <li>Motivate visits with LoveLock feature</li>
                                                <li>Reward exploration with discovery gift boxes</li>
                                                <li>Enable digital check-ins and 3D engravings</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Image alt="" src="/img/icons/roadmap_2.svg" width={110} height={100} />
                                </div>
                            </div>
                        </div>
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="col-start-1 col-end-5 ml-auto">
                                <div className="roadmap-item flex sm:flex-row flex-col items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <Image alt="" src="/img/icons/roadmap_3.svg" width={110} height={100} />
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">Connecting local businesses features</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>Distributing vouchers for local businesses including dining, accommodation, and souvenirs</li>
                                                <li>AR showcasing virtual shops and booths</li>
                                                <li>Integration for bookign flights, hotels, and tours</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">3</div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">4</div>
                            </div>
                            <div className="col-start-6 col-end-10">
                                <div className="roadmap-item flex sm:flex-row flex-col-reverse items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">Local economic platform</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>Expanding Local Industries: Real Estate, Repair Services, Convenience Stores</li>
                                                <li>Facilitating trade through virtual real estate buildings</li>
                                                <li>Introducing products through AR and VR</li>
                                                <li>Augmented reality shopping experiences</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Image alt="" src="/img/icons/roadmap_4.svg" width={110} height={100} />
                                </div>
                            </div>
                        </div>
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="col-start-1 col-end-5 ml-auto">
                                <div className="roadmap-item flex sm:flex-row flex-col items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <Image alt="" src="/img/icons/roadmap_5.svg" width={110} height={100} />
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">Guiding users to promote local bussinesses</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>Drop Message: Location-based messaging (text, image, video)</li>
                                                <li>3D Message: Location-based 3D messaging</li>
                                                <li>LoveLock: 3D love locks</li>
                                                <li>LocaGift: Location-based gifting for loved ones</li>
                                                <li>LocaMemory: Location-based photo albums</li>
                                                <li>DailyDeal: Recording commitments on blockchain</li>
                                                <li>DailyTask: Daily tasks to earn LCG</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">5</div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-line-roadmap pointer-events-none" />
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center flex items-center justify-center roadmap-number">6</div>
                            </div>
                            <div className="col-start-6 col-end-10">
                                <div className="roadmap-item flex sm:flex-row flex-col-reverse items-center justify-center gap-6 p-4 rounded-xl my-4 ">
                                    <div className="roadmap-right">
                                        <h3 className="font-semibold text-lg mb-1">Guiding users to promote local businesses</h3>
                                        <div className="text-left">
                                            <ul className="text-slate-400 list-disc ps-5">
                                                <li>Encouraging check-ins at businesses</li>
                                                <li>Promoting 5-stars reviews and comments on Google Maps</li>
                                                <li>Sharing positive experiences at businesses</li>
                                                <li>Sharing on platforms like Facebook</li>
                                                <li>Encouraging purchases and discounts through D-LocaVoucher</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Image alt="" src="/img/icons/roadmap_6.svg" width={110} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog sm:pt-28 sm:pb-28 pt-10 pb-10">
                <div className="container px-4 mx-auto mt-10">
                    <h2 className="text-3xl md:text-5xl mb-2 text-white text-left mb-5 font-bold leading-normal">Our Latest News</h2>
                    <div className="gap-8 grid grid-cols-1 sm:grid-cols-3">
                        <Card className="blog-item">
                            <CardHeader className="flex gap-3">
                                <Image alt=""
                                    alt="nextui logo"
                                    height={1024}
                                    radius="sm"
                                    src="/img/blog_1.png"
                                    width={1024}
                                />
                            </CardHeader>
                            <CardBody className="px-3 p-6 block">
                                <div className="date-time flex items-center gap-2">
                                    NEWS • July 10, 2024
                                </div>
                                <h3 className="text-white font-bold mb-3 mt-3">This Web3 GeoEconomy platform is redefining the way businesses interact with consumers</h3>
                                <Link
                                    href="#"
                                    className="py-3 px-6 rounded-full btn-main-outline text-white inline-block hover:opacity-75"
                                >
                                    View Details
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className="blog-item">
                            <CardHeader className="flex gap-3">
                                <Image alt=""
                                    alt="nextui logo"
                                    height={1024}
                                    radius="sm"
                                    src="/img/blog_2.png"
                                    width={1024}
                                />
                            </CardHeader>
                            <CardBody className="px-3 p-6 block">
                                <div className="date-time flex items-center gap-2">
                                    NEWS • July 10, 2024
                                </div>
                                <h3 className="text-white font-bold mb-3 mt-3">This Web3 GeoEconomy platform is redefining the way businesses interact with consumers</h3>
                                <Link
                                    href="#"
                                    className="py-3 px-6 rounded-full btn-main-outline text-white inline-block hover:opacity-75"
                                >
                                    View Details
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className="blog-item">
                            <CardHeader className="flex gap-3">
                                <Image alt=""
                                    alt="nextui logo"
                                    height={1024}
                                    radius="sm"
                                    src="/img/blog_3.png"
                                    width={1024}
                                />
                            </CardHeader>
                            <CardBody className="px-3 p-6 block">
                                <div className="date-time flex items-center gap-2">
                                    NEWS • July 10, 2024
                                </div>
                                <h3 className="text-white font-bold mb-3 mt-3">This Web3 GeoEconomy platform is redefining the way businesses interact with consumers</h3>
                                <Link
                                    href="#"
                                    className="py-3 px-6 rounded-full btn-main-outline text-white inline-block hover:opacity-75"
                                >
                                    View Details
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
            <footer className="home-footer">
                <div className="container bg-gradient px-4 mx-auto mt-10 sm:rounded-2xl rounded-0">
                    <div className="columns-2  sm:px-12 pt-6 items-center flex sm:flex-row flex-col justify-between">
                        <div className="flex flex-col gap-4 sm:mb-0 mb-5">
                            <h3 className="text-white md:text-4xl text-2xl">Download the LocaGo App now!</h3>
                            <p className="text-white">Explore a New Life Full of Convenience and Unique Experiences!</p>
                            <div className="flex items-center justify-start gap-8">
                                <Link href="#">
                                    <Image alt=""
                                        alt="Apple"
                                        height={52}
                                        radius="sm"
                                        src="/img/Button/App Store.svg"
                                        width={170}
                                    />
                                </Link>
                                <Link href="#">
                                    <Image alt=""
                                        alt="CH Play"
                                        height={52}
                                        radius="sm"
                                        src="/img/Button/Google Play.svg"
                                        width={170}
                                    />
                                </Link>
                            </div>
                        </div>
                        <Image alt=""
                            alt="Apple"
                            height={209}
                            radius="sm"
                            src="/img/iphone_footer.png"
                            width={310}
                        />
                    </div>
                </div>
                <div className="footer-bottom sm:mt-20 mt-10 sm:pb-0 pb-10">
                    <div className="container px-4 mx-auto">
                        <div className="columns-1 sm:px-12 p-0 sm:items-center items-start flex justify-between sm:flex-row flex-col">
                            <a href="#" className="font-bold text-xl text-indigo-600 sm:mb-0 mb-5">
                                <Image alt="" src="/img/logo.png" width={130} height={30} />
                            </a>
                            <div className="flex-col gap-8 sm:items-start items-start flex justify-between">
                                <ul className="flex gap-2 sm:items-center items-start justify-end md:justify-start sm:flex-row flex-col">
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            Explore
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            Product Ecosystem
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            Tokenomics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            Whitepaper
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            Audit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white text-sm" href="#">
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="flex gap-2 sm:items-center items-start justify-end sm:flex-row flex-col">
                                    <li>
                                        <Link className="text-white flex gap-2 items-center text-sm" href="#">
                                            <Image alt=""
                                                alt="Apple"
                                                height={24}
                                                radius="sm"
                                                src="/img/icons/location_pin.svg"
                                                width={24}
                                            />
                                            <span>7th Floor CharmVit Building No. 117 Tran Duy Hung, Cau Giay, Hanoi</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white flex gap-2 items-center text-sm" href="#">
                                            <Image alt=""
                                                alt="Apple"
                                                height={24}
                                                radius="sm"
                                                src="/img/icons/call.svg"
                                                width={24}
                                            />
                                            <span>(+84) 097. 2217 .999</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white flex gap-2 items-center text-sm" href="#">
                                            <Image alt=""
                                                alt="Apple"
                                                height={24}
                                                radius="sm"
                                                src="/img/icons/email.svg"
                                                width={24}
                                            />
                                            <span>info@meetgo.vn</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="columns-2 sm:px-12 p-0 flex mt-10 sm:items-center items-start justify-end md:justify-between sm:flex-row flex-col">
                            <p className="text-white text-sm">© 2024 by LCM Technology PTE. All rights reserved.</p>
                            <ul className="flex gap-2 sm:items-center items-start justify-end sm:flex-row flex-col">
                                <li>
                                    <Link className="text-white text-sm" href="#">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-sm" href="#">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
