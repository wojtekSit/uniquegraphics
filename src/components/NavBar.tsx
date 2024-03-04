'use client'
import Image from "next/image";
import Link from "next/link";
import LogoUnique from '../../public/svg/LogoUnique.svg'

export default function Navbar() {
    return (
        <div className="bg-gray-900 sticky top-0 left-0 z-30">
            <div className="flex justify-between items-center px-4 py-2 w-full lg:max-w-screen-lg lg:mx-auto">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                </div>
            </div>
        </div>
    )
}