"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Байгалийн гаралтай бүтээгдэхүүн",
    description: "Бид бүтээгдэхүүн бүрийг нэмэлт хадгалалтын бодисгүйгээр байгалийн гаралтайгаар үйлдвэрлэдэг.",
  },
  {
    title: "Монгол уламжлалд тулгуурласан",
    description: "Манай бүтээгдэхүүнүүд нь Монголын олон зуун жилийн уламжлалт амтыг хадгалдаг.",
  },
  {
    title: "Анхааралтай үйлдвэрлэгдсэн",
    description: "Бүтээгдэхүүн бүрийг чанарын өндөр түвшинд, анхааралтай үйлдвэрлэдэг.",
  },
  {
    title: "Эрүүл, тэжээллэг",
    description: "Манай бүтээгдэхүүн нь тэжээллэг, эрүүл сонголтыг эрэлхийлж буй хэрэглэгчдэд тохиромжтой.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">ЯАГААД БИДНИЙГ СОНГОХ ВЭ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:scale-105 transition-transform">
                <CardContent className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="font-semibold text-lg">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}