import { useEffect, useMemo, useRef } from "react";
import { useWatch } from "react-hook-form";

function useDynamicFormConfig(initialConfig, control, unregister, register) {
  const fieldsToWatch = useMemo(
    () =>
      initialConfig
        .filter((field) => field.type === "select" && field.watch)
        .map((field) => field.id),
    [initialConfig],
  );

  const watchedFields = useWatch({ control, name: fieldsToWatch });

  const prevConfigRef = useRef(initialConfig);

  const config = useMemo(() => {
    const newConfig = initialConfig.filter((field) => {
      if (
        field.conditional &&
        watchedFields[fieldsToWatch.indexOf(field.conditional)] !==
          field.conditionValue
      ) {
        return false;
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
