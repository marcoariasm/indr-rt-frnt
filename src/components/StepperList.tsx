import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const steps = ["Planes y coberturas", "Resumen"];

type StepperListProps = {
  navigation: boolean;
  desktop: boolean;
};

const StepperList = ({ navigation, desktop = false }: StepperListProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/step-${currentStep - 1}`);
    }
  };

  return (
    <div>
      <nav className="flex">
        {!navigation &&
          steps.map((step, index) => (
            <Link key={index} to={`/step-${index + 1}`} className="flex gap-2">
              <div
                className={`${
                  currentStep === index + 1
                    ? "bg-blueberry-600 text-white"
                    : "border-neutrals-600 border-1 text-neutrals-600"
                } flex justify-center items-center rounded-full h-6 w-6`}
              >
                <span className="font-sm">{index + 1}</span>
              </div>
              <span className="text-black">{step}</span>
              <span className="first:flex pb-1 px-4">. . . .</span>
            </Link>
          ))}
      </nav>
      {navigation && !desktop && (
        <div className="mt-16 mb-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex gap-1 text-blueberry-600"
          >
            <img
              src="/assets/Icon-button.png"
              alt="volver"
              className="w-4.5 h-auto"
            />
            <span className="text-lg leading-5">Volver</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StepperList;
