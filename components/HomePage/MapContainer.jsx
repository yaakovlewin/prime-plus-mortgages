"use client";
import { contactInfo } from "@/js/contactInfo";
import getCoordinates from "@/utils/geocode";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const address = contactInfo;

const googleMapsAddress = address.fullAddress().replace(/ /g, "+");

const MapContainer = () => {
  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({
    lat: 47.6062,
    lng: -122.176,
  });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("Missing Google Maps API Key");
      return;
    }

    getCoordinates(address.fullAddress(), apiKey)
      .then((location) => {
        const { lat, lng } = location;
        setCenter({ lat, lng });
      })
      .catch((err) => console.error(err));
  }, [apiKey]);

  if (!apiKey) return null;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        clickableIcons={false}
      >
        <Marker position={center} onClick={() => setSelected(center)} />

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div className="rounded-lg bg-cyan-100 p-2 text-center">
              <h2 className="text-center text-lg font-bold leading-5 text-sky-900">
                Prime Plus Mortgages
              </h2>
              <p className="text-center">
                {address.address}
                <br />
                {address.city}, {address.postcode}, {address.country}
                <br />
                <Link
                  href="tel:+44 161 818 8824"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  {address.phone}
                </Link>
              </p>
              <button
                onClick={() =>
                  window.open(
                    address.googleMapsLink(),
                    "_blank",
                    "noopener noreferrer",
                  )
                }
                className="mt-2 rounded bg-cyan-600 px-4 py-2 text-center font-bold  text-white hover:bg-cyan-700"
              >
                Get Directions
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
