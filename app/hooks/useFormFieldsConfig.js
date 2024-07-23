import { unregisterFields } from "@/js/utils/formUtils";
import { useEffect, useMemo, useRef } from "react";
import { useWatch } from "react-hook-form";

function useFormFieldsConfig(initialConfig, control, unregister, register) {
  if (!control || !unregister || !register) {
    throw new Error("useDynamicFormConfig must be used within a FormProvider");
  }

  const watchedFieldIds = useMemo(
    () => initialConfig.filter((field) => field.watch).map((field) => field.id),
    [initialConfig],
  );

  const watchedFieldValues = useWatch({ control, name: watchedFieldIds });

  const prevConfigRef = useRef([]);

  const config = useMemo(() => {
    const updatedConfig = initialConfig.filter((field) => {
      if (field.dependent && typeof field.conditional === "function") {
        return field.conditional(
          watchedFieldValues[watchedFieldIds.indexOf(field.dependent)],
        );
      } else if (field.dependent && typeof field.dependent === "string") {
        return (
          watchedFieldValues[watchedFieldIds.indexOf(field.dependent)] ===
          field.conditional
        );
      }
      return true;
    });

    return updatedConfig;
  }, [initialConfig, watchedFieldValues, watchedFieldIds]);

  useEffect(() => {
    const currentFieldConfig = config;

    const fieldsToUnregister =
      prevConfigRef.current.filter(
        (field) => !currentFieldConfig.find((f) => f.id === field.id),
      ) || [];

    unregisterFields(fieldsToUnregister, unregister);

    // currentConfig.forEach((field) => {
    //   if (!prevConfigRef.current.find((f) => f.id === field.id)) {
    //     console.log("registering", field.id);
    //     register(field.id);
    //   }
    // });

    prevConfigRef.current = currentFieldConfig;
  }, [config, register, unregister]);

  return config;
}

export default useFormFieldsConfig;
