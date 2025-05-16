import { createContext, useContext, useState } from "react";

type FormData = {
  documentType: string;
  documentNumber: string;
  cellphone: string;
  name: string;
  lastName: string;
  birthDay: string;
  plan: Plan;
  check1: boolean;
  check2: boolean;
};

type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormContext = createContext<any>(null);

export const useFormData = () => useContext(FormContext);

export const FormDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<FormData>({
    documentType: "DNI",
    documentNumber: "",
    cellphone: "",
    name: "",
    lastName: "",
    birthDay: "",
    plan: {} as Plan,
    check1: false,
    check2: false,
  });

  const updateFormData = (newData: Partial<FormData>) => {
    console.log("prev->", newData);
    setData((prev) => ({ ...prev, ...newData }));
    console.log("data->", data);
  };

  return (
    <FormContext.Provider value={{ data, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
