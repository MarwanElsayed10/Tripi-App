"use client";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/constant/NavLinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

type Props = {
    openNav: () => void;
};

export default function Nav({ openNav }: Props) {
    const [bgNav , setBgNav] = useState(false);

    useEffect(()=> {
        const handler = () => {
            if(window.scrollY >= 90) setBgNav(true);
            if(window.scrollY < 90) setBgNav(false);
        };
        window.addEventListener("scroll", handler);
        return ()=> window.removeEventListener("scroll",handler);
    },[]);
    
    return (
        <div className={` ${bgNav ? "bg-blue-950 shadow-2xl" : "fixed"} fixed w-full h-[12vh] transition-all duration-200 z-100`}>
            <div className="flex items-center justify-between h-full w-[95%] xl:w-[85%] mx-auto">
                {/* Logo */}
                <div onClick={()=>{window.location.reload()}} className="flex items-center space-x-2 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center justify-center flex-col w-10 h-10 rounded-full bg-rose-500">
                        <TbAirBalloon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Tripi</h1>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center md:space-x-3.5 lg:space-x-8">
                    {navLinks.map((link) => {
                        return (
                            <Link
                                href={link.url}
                                key={link.id}
                                className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-rose-500 after:w-full after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Button */}
                <div className="flex items-center space-x-4 ">
                    <Link href="#news-letter">
                        <button  className="md:px-10 md:py-2.5 px-8 py-2 text-white font-medium text-base hover:scale-110 bg-rose-500 hover:bg-rose-600 transition-all duration-200 rounded-lg cursor-pointer">
                            Book Now
                        </button>
                    </Link>
                </div>

                {/* Burger Menu */}
                <HiBars3BottomRight
                    onClick={openNav}
                    className="w-10 h-10 hover:scale-120 transition-all duration-300 cursor-pointer text-white md:hidden"
                />
            </div>
        </div>
    );
}