import { unregisterFields } from "@/js/utils/formUtils";
import { useEffect, useMemo, useRef } from "react";
import { useWatch } from "react-hook-form";

function useDynamicFormConfig(initialConfig, control, unregister, register) {
  if (!control || !unregister || !register) {
    throw new Error("useDynamicFormConfig must be used within a FormProvider");
  }

  const fieldsToWatch = useMemo(
    () => initialConfig.filter((field) => field.watch).map((field) => field.id),
    [initialConfig],
  );

  const watchedFields = useWatch({ control, name: fieldsToWatch });

  const prevConfigRef = useRef([]);

  const config = useMemo(() => {
    const newConfig = initialConfig.filter((field) => {
      if (field.dependent && typeof field.conditional === "function") {
        return field.conditional(
          watchedFields[fieldsToWatch.indexOf(field.dependent)],
        );
      } else if (field.dependent && typeof field.dependent === "string") {
        return (
          watchedFields[fieldsToWatch.indexOf(field.dependent)] ===
          field.conditional
        );
      }
      return true;
    });

    return newConfig;
  }, [initialConfig, watchedFields, fieldsToWatch]);

  useEffect(() => {
    const currentConfig = config;

    const fieldsToUnregister =
      prevConfigRef.current.filter(
        (field) => !currentConfig.find((f) => f.id === field.id),
      ) || [];

    unregisterFields(fieldsToUnregister, unregister);

    // currentConfig.forEach((field) => {
    //   if (!prevConfigRef.current.find((f) => f.id === field.id)) {
    //     console.log("registering", field.id);
    //     register(field.id);
    //   }
    // });

    prevConfigRef.current = currentConfig;
  }, [config, register, unregister]);

  return config;
}

export default useDynamicFormConfig;
