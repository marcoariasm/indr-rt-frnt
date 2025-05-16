import { useForm } from "react-hook-form";
import { useFormData } from "../context/FormProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const { data, updateFormData } = useFormData();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      documentType: data.documentType,
      documentNumber: data.documentNumber,
      cellphone: data.celphone,
      name: data.name,
      lastName: data.lastName,
      birthDay: data.birthDay,
      plan: data.plan,
      check1: data.check1,
      check2: data.check2,
    },
  });
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveData = (values: any) => {
    updateFormData(values);
    navigate("/step-1");
    return data;
  };

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  return (
    <div className="container mx-auto px-3.5 md:px-0 relative h-full">
      <div className="py-6 md:py-18">
        {/* hero mobile */}
        <div className="flex flex-row gap-3 md:hidden justify-between">
          <div className="flex flex-col text-grey-100 py-[30px] px-3 md:hidden max-w-[336px]">
            <p className="flex items-center text-xs font-semibold bg-aqua w-fit rounded-sm p-2 h-5.5">
              Seguro Salud Flexible
            </p>
            <span className="text-3xl font-semibold">
              Creado para tí y tu familia
            </span>
          </div>
          <img
            src="/assets/Hero.png"
            alt="Foto de una familia"
            className="w-40 h-auto md:w-auto md:h-auto object-contain"
          />
        </div>
        <div className="h-[1px] w-full my-6 mx-0.5 bg-grey-30 block md:hidden"></div>
        <div className="flex flex-row gap-12 justify-evenly">
          {/* hero desktop */}
          <img
            src="/assets/Hero.png"
            alt="Foto de una familia"
            className="hidden md:block w-[480px] h-auto md:w-auto md:h-auto object-contain"
          />
          <div className="max-w-[352px]">
            <div className="flex-col text-grey-100 py-[30px] hidden md:flex">
              <p className="flex items-center text-xs font-semibold bg-gradient-to-r from-emerald-300 to-lime-300 w-fit rounded-sm p-2 h-5.5">
                Seguro Salud Flexible
              </p>
              <span className="text-[32px] leading-[40px] font-bold mt-4">
                Creado para tí y tu familia
              </span>
            </div>
            <span className="text-sm">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </span>

            <form
              className="max-w-[336px] md:max-w-[352px] flex flex-col space-y-4"
              onSubmit={handleSubmit(saveData)}
            >
              <div className="flex flex-row mt-4.5">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  {...(register("documentType"), { required: true })}
                >
                  <option value="DNI">DNI</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <input
                  id="documentNumber"
                  name="documentNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nro. de documento"
                  {...(register("documentNumber"), { required: true })}
                  onChange={(e) =>
                    updateFormData({ documentNumber: e.target.value })
                  }
                />
              </div>
              <input
                id="cellphone"
                name="cellphone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Celular"
                {...(register("cellphone"), { required: true })}
                onChange={(e) => updateFormData({ cellphone: e.target.value })}
              ></input>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="check1"
                    aria-describedby="remember"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    {...(register("check1"), { required: true })}
                    onChange={(e) => updateFormData({ check1: e.target.value })}
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Acepto la Política de Privacidad
                  </label>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Acepto la Política Comunicaciones Comerciales
                  </label>
                </div>
              </div>
              <a href="#" className="underline">
                Aplican Términos y condiciones
              </a>
              <button
                className="rounded-full flex bg-grey-100 text-grey-10 py-3 px-10 w-fit mt-4.5"
                type="submit"
              >
                Cotiza aquí
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
