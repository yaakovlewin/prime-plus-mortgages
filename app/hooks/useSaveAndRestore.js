import { useCallback, useRef } from "react";
import { useFormContext } from "react-hook-form";

export const useSaveAndRestore = (fieldNames) => {
  const { setValue, getValues } = useFormContext();
  const previousData = useRef({});

  const restorePreviousValues = useCallback(() => {
    Object.entries(previousData.current).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [setValue]);

  const saveAndClearCurrentValues = useCallback(() => {
    previousData.current = {};
    fieldNames.forEach((field) => {
      previousData.current[field] = getValues(field);
    });
  }, [getValues, fieldNames]);

  return {
    restorePreviousValues,
    saveAndClearCurrentValues,
  };
};
