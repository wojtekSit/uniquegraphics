"use client";
import Link from 'next/link'
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaTiktok } from "react-icons/fa6";
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";


export default function Footer() {
    return (
        <div className='Footer'>
            <footer className="footer p-10 bg-gray text-base-content">
                <nav>
                    <h6 className="footer-title">Dane Kontaktowe</h6>
                    <div className='grid grid-flow-row'>
                        <span className=""><CiLocationOn size={25} />Większyce zamkowa 4</span>
                        <span className=""><CiPhone size={25} />+48 508 570 2291</span>
                        <span className=""><CiMail size={25} />Ugraphics99@gmail.com</span>
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
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareFacebook size={50} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareInstagram size={50} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaSquareWhatsapp size={50} /></Link>
                        <Link href="https://drive.google.com/drive/folders/1X_KE1MfTXSugQNiO3Hy71jtR0mPBp7MU"><FaTiktok size={50} /></Link>
                    </div>
                </nav>
            </footer>

        </div>
    )
}
