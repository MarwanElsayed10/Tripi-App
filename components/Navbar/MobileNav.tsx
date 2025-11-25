import { navLinks } from "@/constant/NavLinks";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const navDelay = showNav ? "delay-300" : "delay-[0s]";

    return (
        <div>
            {/* Overlay */}
            <div
                onClick={closeNav}
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-49 bg-black opacity-70 w-full h-screen top-[12vh]`}
            />

            {/* NavLinks */}
            <div
                className={`text-white ${navOpen} ${navDelay} fixed top-[12vh] justify-start pt-8 flex flex-col h-full transform transition-all duration-500 w-[80%] sm:w-[40%] bg-rose-900 space-y-6 z-55`}
            >
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id}>
                            <p className="relative text-white text-[20px] mt-3 ml-12 font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-rose-500 after:w-full after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                                {link.label}
                            </p>
                        </Link>
                    );
                })}

                {/* Close button */}
                <CgClose
                    onClick={closeNav}
                    className="absolute top-[1.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default MobileNav;