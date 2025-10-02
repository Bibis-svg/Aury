import "/src/styles/step-progress.css";
import { BsList, BsHandbag, BsBoxSeam, BsCheckCircle } from "react-icons/bs";

export default function StepProgress({ currentStep }) {
  const steps = [
    { id: 1, label: "Selecionar item", icon: <BsList /> },
    { id: 2, label: "Sacola", icon: <BsHandbag /> },
    { id: 3, label: "Informações de entrega", icon: <BsBoxSeam /> },
    { id: 4, label: "Finalizado", icon: <BsCheckCircle /> },
  ];

  return (
    <div className="step-progress-container">
      <div className="step-progress">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${currentStep >= step.id ? "active" : ""} ${
              currentStep === step.id ? "current" : ""
            }`}
          >
            <div className="step-icon">{step.icon}</div>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}