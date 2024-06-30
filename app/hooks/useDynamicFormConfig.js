import { useEffect, useMemo, useRef } from "react";
import { useWatch } from "react-hook-form";

function useDynamicFormConfig(initialConfig, control, unregister, register) {
  if (!control) {
    throw new Error("useDynamicFormConfig must be used within a FormProvider");
  }

  if (!unregister) {
    throw new Error("useDynamicFormConfig must be used within a FormProvider");
  }

  if (!register) {
    throw new Error("useDynamicFormConfig must be used within a FormProvider");
  }

  const fieldsToWatch = useMemo(
    () => initialConfig.filter((field) => field.watch).map((field) => field.id),
    [initialConfig],
  );

  const watchedFields = useWatch({ control, name: fieldsToWatch });

  console.log(watchedFields);

  const prevConfigRef = useRef(initialConfig);

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

    prevConfigRef.current.forEach((field) => {
      if (!currentConfig.find((f) => f.id === field.id)) {
        unregister(field.id);
      }
    });

    currentConfig.forEach((field) => {
      if (!prevConfigRef.current.find((f) => f.id === field.id)) {
        register(field.id);
      }
    });

    prevConfigRef.current = currentConfig;
  }, [config, register, unregister]);

  return config;
}

export default useDynamicFormConfig;
