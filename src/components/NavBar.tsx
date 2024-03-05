'use client'
import Image from "next/image";
import { Link } from "../navigation";
import LogoUnique from '../../public/svg/LogoUnique.svg'
import pl from '../../public/svg/pl.svg'
import de from '../../public/svg/de.svg'
import gb from '../../public/svg/gb.svg'
import LangSwitch from "./LanguageSwitcher";


export default function Navbar() {
    return (
        <div className="bg-black sticky top-0 left-0 z-30">
            <div className="flex justify-between items-center px-4 py-2 w-full lg:max-w-screen-lg lg:mx-auto">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
                        <li>
                            <Link href="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link href="/informations">Informacje</Link>
                        </li>
                        <li>
                            <Link href="/firm-offer">Oferta dla firm</Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU">Katalog</a>
                        </li>
                        <div className="h-px w-full bg-gray-600"></div>
                        <div className="flex flex-row my-2">
                            <Image
                                priority
                                src={pl}
                                alt="pl"
                                className="h-4 w-auto mx-5"
                            />
                            <Image
                                priority
                                src={gb}
                                alt="gb"
                                className="h-4 w-auto"
                            />
                            <Image
                                priority
                                src={de}
                                alt="de"
                                className="h-4 w-auto mx-5 "
                            />
                        </div>
                    </ul>
                </div>
                <Image
                    priority
                    src={LogoUnique}
                    alt="logounique"
                    className="h-12 w-auto"
                />
                <div className="hidden lg:flex lg:gap-6 lg:items-center text-sm">
                    <Link href="/">Strona główna</Link>
                    <Link href="/informations">Informacje</Link>
                    <Link href="/firm-offer">Oferta dla firm</Link>
                    <a href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU">Katalog</a>
                    <div className="w-px h-6 bg-gray-600"></div>
                    <a href='tel:+48508570291'>+48 508 570 291</a>
                    <div className="w-px h-6 bg-gray-600"></div>
                    <LangSwitch />
                </div>
            </div>
        </div>
    )
}
