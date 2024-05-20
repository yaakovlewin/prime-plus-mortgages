import createAddressConfig from "@/js/config/addressFieldsConfig";
import getDefaultValues from "@/js/utils/getDefaultValues";
import { useFormContext } from "react-hook-form";
import FormField from "../dynamicComponents/FormField";

const AddressForm = ({ prefix, isVisible }) => {
  const addressConfig = createAddressConfig(prefix, isVisible);
  const defaultValues = getDefaultValues(addressConfig);

  const {
    register,
    formState: { errors },
  } = useFormContext({ defaultValues });

  return (
    <>
      {addressConfig.map((field) => (
        <FormField
          key={field.id}
          field={field}
          register={register}
          errors={errors}
        />
      ))}
    </>
  );
};

export default AddressForm;
