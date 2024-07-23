
export function registerFields(fields, register) {
  fields.forEach((field) => {
    register(field.id);
  });
}

export function unregisterFields(fields, unregister) {
  fields.forEach((field) => {
    unregister(field.id);
  });
}
