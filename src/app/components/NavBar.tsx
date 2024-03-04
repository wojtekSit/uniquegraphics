"use client";
import Link from 'next/link'
import Image from 'next/image';
import LogoUnique from '../../../public/svg/LogoUnique.svg'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className="navbar bg-black-100 border-b-2 border-blue-900">
                <div className="navbar-start">
                    <Image
                        priority
                        src={LogoUnique}
                        alt="logounique"
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-widest text-base">
                        <li className="mr-10">
                            <Link href="/">Strona główna</Link>
                        </li>
                        <li className="mr-10">
                            <Link href="/Informations">Informacje</Link>
                        </li>
                        <li className="mr-10">
                            <Link href="/FirmOffer">Oferta dla firm</Link>
                        </li>
                        <li className="mr-10">
                            <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU">Katalog</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end tracking-widest text-lg">
                    <div className="divider divider-primary lg:divider-horizontal"></div>
                    <p className='mr-10'>+48 508 570 291</p>
                </div>
            </div>
        </div>
    )
}
