export const contactInfo = {
  email: "info@primeplusemortgages.co.uk",
  phone: "+44 7530 473 141",
  address: "31 Gainsborough Street",
  city: "Salford",
  postcode: "M7 4AL",
  country: "UK",
  company: "Prime Plus Mortgages Ltd",
  fullAddress: function () {
    return `${this.address} ${this.city}, ${this.postcode}, ${this.country}`;
  },
  googleMapsLink: function () {
    const encodedAddress = encodeURIComponent(this.fullAddress());
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  },
};
