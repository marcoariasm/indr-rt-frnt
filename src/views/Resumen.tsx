import { useEffect, useState } from "react";
import StepperList from "../components/StepperList";
import { useFormData } from "../context/FormProvider";

export default function Resumen() {
  const [_, setFinal] = useState();
  const { data } = useFormData();

  useEffect(() => {
    if (!data) return;
    setFinal(data);
    console.log("final->", data);
  }, [data]);

  return (
    <>
      <div className="container mx-auto px-3.5 md:px-0"></div>
      <div className="bg-neutrals-200 flex justify-center items-center h-14 text-blue-berry-600">
        <StepperList desktop={false} navigation={false} />
      </div>
      <div className="container px-3.5 md:px-10">
        <div className="flex flex-col bg-neutrals-100 px-10">
          <StepperList desktop={false} navigation={true} />
          <p className="font-semibold text-[40px] leading-10">
            Resumen del seguro
          </p>

          {/* card */}
          <div className="flex flex-col rounded-3xl p-4 my-6 bg-white shadow-lg">
            <span className="uppercase text-[10px] leading-4 text-neutrals-700 ">
              Precios calculados para:
            </span>
            <div className="flex items-center gap-3">
              <img
                src="/assets/gl_family-24x24.svg"
                alt="Icono de protección"
                className="w-7 h-7"
              />
              <span>{`${data.name} ${data.lastName}`}</span>
            </div>
            <div className="h-[1px] w-full my-4 mx-0.5 bg-neutrals-400 block" />
            <span>
              <strong>Responsable del pago:</strong>
              <p>DNI: {data.documentNumber}</p>
              <p>Celular: {data.cellphone}</p>
            </span>
            <span>
              <p>
                <strong>Plan elegido</strong>
              </p>
              <span>{data.plan.name}</span>
              <br />
              <span>Costo del Plan: ${data.plan.price} al mes</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
