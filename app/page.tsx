import Image from "next/image";
import Map from "@/components/ui/map";


export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
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



      {/* Gallery Section */}
      <section id="gallery" className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="w-full h-40 bg-gray-200 rounded" />
          <div className="w-full h-40 bg-gray-200 rounded" />
          <div className="w-full h-40 bg-gray-200 rounded" />
          <div className="w-full h-40 bg-gray-200 rounded" />
          <div className="w-full h-40 bg-gray-200 rounded" />
          <div className="w-full h-40 bg-gray-200 rounded" />
        </div>
      </section>


      {/* Location Section */}
      <section id="location" className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Location</h2>
        <Map />
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Phone: +976 XXXX-XXXX</p>
        <p className="text-gray-700">Email: example@gmail.com</p>
      </section>
    </div>
  );
}