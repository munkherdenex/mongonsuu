"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import WhyChooseUs from "../components/ui/why-choose-us";

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
        <h2 className="text-2xl font-semibold mb-6 text-center">Location</h2>
        <Map />
      </section>

      <section id="contact" className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Phone: +976 9119-6159</p>
        <p className="text-gray-700">Email: munkherdenex@gmail.com</p>
      </section>
    </div>
  );
}