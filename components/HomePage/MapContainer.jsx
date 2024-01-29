"use client";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import getCoordinates from "@/utils/geocode";
import Link from "next/link";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

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

    getCoordinates("7 Bevendon Sq, Salford M7 4TP, UK", apiKey)
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
                7 Bevendon Sq,
                <br />
                Salford M7 4TP, UK
                <br />
                <Link
                  href="tel:+44 161 818 8824"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  +44 161 818 8824
                </Link>
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=31+Gainsborough+St%2C+Salford+M7+4AL%2C+UK",
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
