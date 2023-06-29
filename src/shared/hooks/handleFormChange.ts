import { useState } from "react";

export const useHandleFormChange = (initialValue: {}) => {
  const [formState, setFormState] = useState(initialValue);

  const handleFormChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  return { formState, setFormState, handleFormChange };
};
