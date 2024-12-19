"use client";
import { contactSchema, submitContactForm } from "@/js/services/contactService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useContactForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await submitContactForm(data);

    if (result.success) {
      reset();
      router.push("/success?type=contact");
    } else {
      // Handle field-specific errors
      Object.entries(result.errors).forEach(([field, message]) => {
        setError(field, {
          type: "manual",
          message,
        });
      });
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
  };
};
