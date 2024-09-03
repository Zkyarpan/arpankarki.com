"use client";

import Card from "@/components/Card";
import Image from "next/image";
import MapImage from "@/assets/images/mapimg.jpg";

function MapComponent() {
  return (
    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 bg-gray-900 border border-gray-600">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.436941668243!2d85.32407357506402!3d27.717245124080415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e81a709a1%3A0x58ac7af00604134e!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1693651454255!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
        <Image
          src={MapImage}
          alt="arpan"
          className="rounded-full shadow-lg w-[30px] h-[30px]"
        />
      </div>
    </Card>
  );
}

export default MapComponent;
