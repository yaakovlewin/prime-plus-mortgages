export default function getDefaultValues(
  config
) {
  return config.reduce((acc, field) => {
    acc[field.id] = field.defaultValue;
    return acc;
  }, {});
}
