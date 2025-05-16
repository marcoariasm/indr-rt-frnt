import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepperList from "../components/StepperList";
import { useFormData } from "../context/FormProvider";
import { useFetch } from "../hooks/useFetch";

type PlanType = "me" | "somebody";

type User = {
  name: string;
  lastName: string;
  birthDay: string;
};

export default function Planes() {
  const [user, setUser] = useState<User>();
  const [planType, setPlanType] = useState<PlanType>();
  const [plans, setPlans] = useState<number[] | null>(null);

  const plansResponse = useFetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );

  const { data, updateFormData } = useFormData();

  const userResponse = useFetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!userResponse) return;
    setUser(userResponse.data);
  }, [userResponse]);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!planType) return;
    if (planType === "me") {
      setPlans([0, 1, 2]);
    } else {
      setPlans([3, 4]);
    }
  }, [planType]);

  const handleNextStep = (idPlan: number) => {
    if (!user) return;
    updateFormData({ name: user.name });
    updateFormData({ lastName: user.lastName });
    updateFormData({ plan: plansResponse.data.list[idPlan] });
    navigate("/step-2");
  };

  return (
    <div className="min-h-full">
      <div className="bg-neutrals-200 flex justify-center items-center h-14 text-blueberry-600">
        <StepperList navigation={false} desktop={true} />
      </div>
      <div className="bg-neutrals-100">
        <div className="container mx-auto px-3.5 md:px-0">
          <StepperList desktop={false} navigation={true} />
          <div className="flex flex-col justify-center items-center py-10">
            <p className="text-[40px] leading-[48px] font-semibold">
              {user && user.name}, ¿Para quién deseas cotizar?
            </p>
            <span>
              Selecciona la opción que se ajuste más a tus necesidades.
            </span>
            <div className="flex flex-col md:flex-row gap-6">
              {/* card */}
              <div
                className={`flex flex-col rounded-3xl py-10 px-6 my-6 bg-white shadow-xl md:max-w-[256px] relative
                ${planType === "me" ? "border-3 border-grey-100" : ""}`}
                onClick={() => setPlanType("me")}
              >
                <div className="flex justify-between">
                  <img
                    src="/assets/IcProtectionLight.svg"
                    alt="Icono de protección"
                    className="w-10 h-10"
                  />
                  <img
                    src={
                      planType === "me"
                        ? `/assets/atoms_radio_button_web-checked.svg`
                        : "/assets/atoms_radio_button_web.svg"
                    }
                    alt="checkbox-empty"
                    className="absolute top-4 right-6"
                  />
                </div>
                <span className="text-xl font-bold leading-7 my-2">
                  Para mí
                </span>
                <span className="text-xs leading-5">
                  Cotiza tu seguro de salud y agrega familiares si así lo
                  deseas.
                </span>
              </div>
              {/* card */}
              <div
                className={`flex flex-col rounded-3xl py-10 px-6 my-6 bg-white shadow-xl md:max-w-[256px] relative
                ${planType === "somebody" ? "border-3 border-grey-100" : ""}`}
                onClick={() => setPlanType("somebody")}
              >
                <div className="flex justify-between">
                  <img
                    src="/assets/IcAddUserLight.svg"
                    alt="Icono de protección"
                    className="w-10 h-10"
                  />
                  <img
                    src={
                      planType === "somebody"
                        ? `/assets/atoms_radio_button_web-checked.svg`
                        : "/assets/atoms_radio_button_web.svg"
                    }
                    alt="checkbox-empty"
                    className="absolute top-4 right-6"
                  />
                </div>
                <span className="text-xl font-bold leading-7 my-2">
                  Para alguien más
                </span>
                <span className="text-xs leading-5">
                  Realiza una cotización para uno de tus familiares o cualquier
                  persona.
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              {/* card */}
              {plans &&
                plans.map((planId) => {
                  if (!plansResponse.data.list) return;
                  return (
                    <div className="flex flex-col rounded-3xl py-10 px-6  bg-white shadow-lg max-w-[288px]">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-2xl leading-8 font-semibold mb-6">
                            {plansResponse.data.list[planId].name}
                          </span>
                          <span className="uppercase text-sm text-neutrals-600">
                            Costo del Plan
                          </span>
                          <span className="text-[20px] leading-7">
                            ${plansResponse.data.list[planId].price} al mes
                          </span>
                        </div>
                        <img
                          src="/assets/IcHomeLight.svg"
                          alt="Icono de protección"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="h-[1px] w-full my-6 mx-0.5 bg-neutrals-400 block"></div>
                      <ul className="list-disc list-item ml-4 leading-7 text-neutrals-700">
                        {plansResponse.data.list[planId].description.map(
                          (item: string) => (
                            <li key={item}>{item}</li>
                          )
                        )}
                      </ul>
                      <button
                        className="rounded-full flex bg-red-rimac-500 text-grey-10 py-3 px-10 h-12 text-lg leading-5 mt-10 justify-center items-center"
                        onClick={() => handleNextStep(planId)}
                      >
                        Seleccionar Plan
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
