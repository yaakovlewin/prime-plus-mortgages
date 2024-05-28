import { ADDRESS_FIELDS } from "@/js/config/addressFieldsConfig";
import { useCallback, useRef } from "react";
import { useFormContext } from "react-hook-form";

export const useAddress = () => {
  const { setValue, getValues, unregister } = useFormContext();
  const previousAddressData = useRef({});

  const restorePreviousValues = useCallback(() => {
    Object.entries(previousAddressData.current).forEach(([key, value]) => {
      setValue(`correspondentAddress.${key}`, value);
    });
  }, [setValue]);

  const saveAndClearCurrentValues = useCallback(() => {
    previousAddressData.current = ADDRESS_FIELDS.reduce((acc, field) => {
      acc[field] = getValues(`correspondentAddress.${field}`);
      return acc;
    }, {});
    ADDRESS_FIELDS.forEach((field) => {
      unregister(`correspondentAddress.${field}`);
    });
  }, [getValues, unregister]);

  return {
    restorePreviousValues,
    saveAndClearCurrentValues,
  };
};
