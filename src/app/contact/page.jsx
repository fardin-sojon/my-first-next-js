"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function Contact() {
  const contactInfo = [
    { title: "Address", value: "123 Main Street, Rajshahi, Bangladesh" },
    { title: "Phone", value: "+880 1650 23**36" },
    { title: "Email", value: "info@shopease.com" },
    { title: "Office Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
  ];

  const rajshahiPosition = [24.3745, 88.6042];

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {info.title}
                </h3>
                <p className="text-gray-700">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Right - Map */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-center">Google Map</h3>
            <div className="h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden">
              <MapContainer
                center={rajshahiPosition}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={rajshahiPosition}>
                  <Popup>Rajshahi, Bangladesh</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
