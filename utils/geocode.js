class GeocodingError extends Error {
  constructor(message, type) {
    super(message);
    this.name = "GeocodingError";
    this.type = type;
  }
}

const getCoordinates = async (address, apiKey) => {
  try {
    // Input validation
    if (!address || typeof address !== "string") {
      throw new GeocodingError("Invalid address provided", "INVALID_INPUT");
    }
    if (!apiKey || typeof apiKey !== "string") {
      throw new GeocodingError("Invalid API key", "INVALID_INPUT");
    }

    // Make the API request
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address.trim(),
      )}&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    // Handle HTTP errors
    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        throw new GeocodingError("Rate limit exceeded", "RATE_LIMIT");
      } else if (status === 403) {
        throw new GeocodingError(
          "Invalid API key or request denied",
          "AUTH_ERROR",
        );
      } else {
        throw new GeocodingError(
          `API request failed with status ${status}`,
          "REQUEST_FAILED",
        );
      }
    }

    const result = await response.json();

    // Handle API-specific errors
    if (result.status !== "OK") {
      throw new GeocodingError(
        `Geocoding failed: ${result.status}${
          result.error_message ? ` - ${result.error_message}` : ""
        }`,
        "API_ERROR",
      );
    }

    // Validate response structure
    if (
      !result.results?.[0]?.geometry?.location ||
      typeof result.results[0].geometry.location.lat !== "number" ||
      typeof result.results[0].geometry.location.lng !== "number"
    ) {
      throw new GeocodingError(
        "Invalid response format from API",
        "INVALID_RESPONSE",
      );
    }

    // Return successful result
    return {
      success: true,
      data: result.results[0].geometry.location,
      formattedAddress: result.results[0].formatted_address,
    };
  } catch (error) {
    // Log error for monitoring but return structured error object
    console.error("Geocoding error:", {
      message: error.message,
      type: error instanceof GeocodingError ? error.type : "UNKNOWN",
      stack: error.stack,
    });

    // Return structured error object
    return {
      success: false,
      error: {
        message: error.message,
        type: error instanceof GeocodingError ? error.type : "UNKNOWN",
      },
    };
  }
};

export default getCoordinates;
