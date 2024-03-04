"use client";
import Link from 'next/link'
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaTiktok } from "react-icons/fa6";
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";


export default function Footer() {
    return (
        <div className='bg-gray-900'>
            <footer className="footer p-10 bg-gray text-base-content">
                <nav>
                    <h6 className="footer-title">Dane Kontaktowe</h6>
                    <div className='flex flex-col gap-3'>
                        <span className="flex items-center gap-3"><CiLocationOn size={25} />Większyce zamkowa 4</span>
                        <span className="flex items-center gap-3"><CiPhone size={25} />+48 508 570 2291</span>
                        <span className="flex items-center gap-3"><CiMail size={25} />Ugraphics99@gmail.com</span>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Firma</h6>
                    <a className="link link-hover">Regulamin</a>
                    <a className="link link-hover">Polityka zwrotów</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Obserwuj po więcej</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareFacebook size={40} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareInstagram size={40} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareWhatsapp size={40} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaTiktok size={40} /></Link>
                    </div>
                </nav>
            </footer>

        </div>
    )
}
