"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import WhyChooseUs from "../components/ui/why-choose-us";
import BrochureSection from "../components/ui/brochure-section";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Map = dynamic(() => import("@/components/ui/map"), { ssr: false });

export default function HomePage() {
  const galleryImages = [
    "/aaruul.JPG",
    "/bagts.jpg",
    "/butter.jpg",
    "/suu.jpg",
    "/shar_tos_ger.jpg",
    "/Aaruul_tavag.jpg",
  ];
  return (
    <div>
      <section id="about" className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Бидний тухай</h1>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          2022 онд байгуулагдсан манай үйлдвэр нь Монголын цагаан идээний эртний уламжлалын баялаг амт,
          тэжээллэг чанарыг дэлхийд хүргэх зорилготой. Манай бүтээгдэхүүнүүд нь Монголын олон зуун
          жилийн ёс заншлыг дээдлэн, амт бүрийг аль болох жинхэнэ, байгалийн гаралтай байлгах үүднээс
          урласан.
          <br /><br />
          Манай бүтээгдэхүүний төрөлд монголын уламжлалт цагаан идээний төрөл бүрийн амттанууд
          багтсан бөгөөд тус бүрдээ анхаарал тавьж, чанарыг эрхэмлэн хийдэг. Цөцгийтэй тараг, сүүн
          ааруулнаас эхлээд баялаг цөцгийн тос, шар тос хүртэл нэмэлт хадгалалтын бодис агуулаагүй,
          тэжээллэг сонголтуудыг эрэлхийлдэг хүмүүст бидний бүтээгдэхүүн маш тохиромжтой.
        </p>
      </section>
      <WhyChooseUs />

      {/* <BrochureSection /> */}

      <section id="gallery" className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Зургийн сан</h2>

        <PhotoProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="relative w-full h-40 cursor-pointer overflow-hidden rounded-lg shadow">
                  <Image
                    src={src}
                    alt={`gallery-${index}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </section>


      <section id="location" className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Байршил</h2>
        <Map />
      </section>

      <section id="contact" className="py-12 bg-gradient-to-br">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Холбогдох</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Утас</p>
                <a href="tel:+97691196159" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  +976 9119-6159
                </a>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-gray-600">И-мэйл</p>
                <a href="mailto:munkherdenex@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  munkherdenex@gmail.com
                </a>
              </div>
            </div> */}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <a
              href="https://www.facebook.com/MungunSuu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/mongon_suu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-pink-50 transition-all"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}