import { useFormContext } from "react-hook-form";
import { useSaveAndRestore } from "./useSaveAndRestore";

export default function useComponentUnregister( formFieldsArray ) {
  const { saveAndClearCurrentValues, restorePreviousValues } =
    useSaveAndRestore(formFieldsArray);
  const { unregister, setValue } = useFormContext();

  const handleCheckboxChange = (event, setVisible, checkbox) => {
    const checked = event.target.checked;
    setValue(checkbox, checked);
    setVisible(checked);
    if (!checked) {
      saveAndClearCurrentValues();
      formFieldsArray.forEach((field) => {
        unregister(field);
      });
    } else {
      restorePreviousValues();
    }
  };

  return { handleCheckboxChange };
}
