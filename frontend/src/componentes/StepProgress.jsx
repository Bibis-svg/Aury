import "/src/styles/step-progress.css"

export default function StepProgress({ currentStep }) {
  const steps = [
    { id: 1, label: "Selecionar item", icon: "☰" },
    { id: 2, label: "Sacola", icon: "🛍️" },
    { id: 3, label: "Informações de entrega", icon: "📦" },
    { id: 4, label: "Finalizado", icon: "✓" },
  ]

  return (
    <div className="step-progress">
      {steps.map((step) => (
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
  )
}
