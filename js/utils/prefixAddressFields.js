export default function prefixAddressFields(
  prefix,
  address,
  useFallback = false,
) {
  if (useFallback) {
    // If visible flag is set to false, use company address fields for correspondent address
    return prefixAddressFields(prefix, companyDetails.companyAddress);
  }
  // Map the address object properties to the prefixed field names
  return Object.entries(address).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`${prefix}.${key}`]: value,
    }),
    {},
  );
}
