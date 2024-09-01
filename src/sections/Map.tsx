"use client";

import Card from "@/components/Card";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import Image from "next/image";
import ArpanImage from "@/assets/images/arpan.png";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 27.7172, // Example coordinates (San Francisco)
  lng: 85.324,
};

function MapComponent() {
  return (
    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <LoadScript googleMapsApiKey="AIzaSyBujjWu7AtcJNi3R5ct7fuLPewQZ4rUSSA">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
        <div className="absolute  inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20"></div>
        <Image src={ArpanImage} alt="arpan" />
      </div>
    </Card>
  );
}

export default MapComponent;
