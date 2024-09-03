"use client";

import { useEffect, useRef } from "react";
import Card from "@/components/Card";
import Image from "next/image";
import MapImage from "@/assets/images/mapimg.jpg";

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target.querySelector("iframe");
            if (iframe && iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <Card
      className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 bg-gray-900 border border-gray-600"
      ref={mapRef}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.436941668243!2d85.32407357506402!3d27.717245124080415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e81a709a1%3A0x58ac7af00604134e!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1693651454255!5m2!1sen!2sus&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry|color:0x757575&style=feature:administrative|element:labels.text.fill|color:0x8a8a8a&style=feature:landscape|element:geometry|color:0x383838&style=feature:poi|element:geometry|color:0x606060&style=feature:poi.park|element:geometry|color:0x2c2c2c&style=feature:road|element:geometry|color:0x383838&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9a9a9a&style=feature:road.highway|element:geometry|color:0x3c3c3c&style=feature:road.highway.controlled_access|element:geometry|color:0x4e4e4e&style=feature:road.highway.controlled_access|element:geometry.stroke|color:0x212a37&style=feature:transit|element:geometry|color:0x2f3948&style=feature:water|element:geometry|color:0x222d34"
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
