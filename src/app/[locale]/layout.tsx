import Footer from '@/components/Footer';
import "../globals.css";
import Navbar from '@/components/NavBar';

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}