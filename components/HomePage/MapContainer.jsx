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

const MapContainer = () => {
  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({
    lat: 47.6062,
    lng: -122.176,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      setError("Google Maps API key is not configured");
      setIsLoading(false);
      return;
    }

    const loadLocation = async () => {
      try {
        const result = await getCoordinates(address.fullAddress(), apiKey);

        if (!result.success) {
          throw new Error(result.error.message || "Failed to load location");
        }

        setCenter(result.data);
        setError(null);
      } catch (err) {
        setError("Failed to load the map. Please try again later.");
        console.error("Map loading error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocation();
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">
        <p>Unable to load map due to missing configuration.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">
        <p>{error}</p>
        <p className="mt-2 text-sm">
          Please contact us at{" "}
          <Link
            href={`tel:${address.phone}`}
            className="text-red-600 hover:text-red-800"
          >
            {address.phone}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        clickableIcons={false}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: false,
          scaleControl: true,
        }}
      >
        <Marker
          position={center}
          onClick={() => setSelected(center)}
          animation={window.google?.maps.Animation.DROP}
        />

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
                  href={`tel:${address.phone}`}
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
                className="mt-2 rounded bg-cyan-600 px-4 py-2 text-center font-bold text-white transition-colors hover:bg-cyan-700"
                aria-label="Get directions to Prime Plus Mortgages"
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
