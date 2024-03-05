
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaTiktok } from "react-icons/fa6";
import InfoSectionImg from '../../../public/svg/InfoSectionImg.svg'
import Image from 'next/image'
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Index')
  return (
    <div>
      <div className="MainImage border-b-2 border-blue-900">

      </div>
      <div className="SocialsTab my-10">
        <p className="mb-5">{t('sampletext')}</p>
        <ul>
          <li><FaSquareFacebook size={50} /></li>
          <li><FaSquareInstagram size={50} /></li>
          <li><FaSquareWhatsapp size={50} /></li>
          <li><FaTiktok size={50} /></li>
        </ul>
      </div>
      <div className="InfoSection border-t-2 border-blue-900 px-20">
        <div className="ContentWrapper">
          <p className="tracking-wider text-white">
            Witamy w polskim liderze projektowania grafik motocyklowych i quadów! Jesteśmy dumni z tego, że możemy nazwać się ekspertami w branży, będąc jednocześnie prekursorem i liderem na rodzimej scenie motocyklowej. Nasza firma łączy w sobie bogate doświadczenie, kreatywność oraz zaawansowane technologie, aby dostarczyć naszym klientom unikalne i niezapomniane projekty grafik.
          </p>
        </div>
        <div className="ImageWrapper">
          <Image
            priority
            src={InfoSectionImg}
            alt="InfoSectionImg"
          />
        </div>
      </div>
      <div className="Napis pl-20 mb-20">
        <h2 className="text-5xl bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
          Nasze ostatnie realizacje
        </h2>
      </div>
      <div className="PhotoGallery">
        <div className="carousel w-1/2">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/jpg/FANTIC43.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="jpg/QUAD43.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/jpg/yamaha43.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/jpg/WR43.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
