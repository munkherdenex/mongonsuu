"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, FileText } from "lucide-react";

export default function BrochureSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/brochure.jpg"
                  alt="Манай танилцуулга"
                  width={320}
                  height={420}
                  className="object-cover w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Манай танилцуулга</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Монгол Сүүний үйлдвэрийн бүтэн мэдээллийг агуулсан танилцуулга. Бидний бүтээгдэхүүн, 
                үйлдвэрлэлийн үйл явц, чанарын стандартын талаар дэлгэрэнгүй мэдээлэл олох боломжтой.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">PDF форматаар</h3>
                </div>
              </div>
            </div>

            <Link
              href="/MungunSuu_Brochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>PDF хүлээн авах</span>
            </Link>

            <p className="text-sm text-gray-500">
              PDF файл: ~2MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
