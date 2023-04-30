import { useState } from "react";

function useForm<TFormData extends object>({
  defaultValues,
}: {
  defaultValues: TFormData;
}) {
  const [formData, setFormData] = useState<TFormData>(defaultValues);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(old => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    submitFn: (data: TFormData) => Promise<void>,
  ) => {
    e.preventDefault();
    submitFn(formData);
  };

  return {
    handleSubmit,
    onFieldChange,
    formData,
  };
}

export default useForm;
