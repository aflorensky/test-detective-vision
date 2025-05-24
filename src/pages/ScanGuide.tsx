
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Camera, Sun, Focus, Square, ArrowDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ScanGuide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  
  const fromScan = location.state?.from === 'scan';

  const steps = [
    {
      icon: <Square className="w-16 h-16 text-blue-600" />,
      title: "Только тест \"Будьте уверены\"",
      description: "Мы можем распознать только наши тесты.",
      subtitle: "Убедись, что у тебя именно такой тест."
    },
    {
      icon: <Sun className="w-16 h-16 text-yellow-600" />,
      title: "Хорошее освещение",
      description: "Естественный свет или лампа. Без теней.",
      subtitle: "Избегай бликов и темноты."
    },
    {
      icon: <Focus className="w-16 h-16 text-green-600" />,
      title: "Четкое фото",
      description: "Камера сфокусирована, тест в центре.",
      subtitle: "Размытие может помешать распознаванию."
    },
    {
      icon: <Square className="w-16 h-16 text-gray-600" />,
      title: "Белый фон",
      description: "Используй белую бумагу, салфетку или стол.",
      subtitle: "Контраст помогает нам точнее работать."
    },
    {
      icon: <ArrowDown className="w-16 h-16 text-purple-600" />,
      title: "Съёмка строго сверху",
      description: "Держи камеру перпендикулярно тесту.",
      subtitle: "Под углом полоски могут исказиться."
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/scan');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Навигация назад */}
        {fromScan && (
          <Button
            variant="ghost"
            onClick={() => navigate('/scan')}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к сканированию
          </Button>
        )}

        {/* Индикатор прогресса */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentStep
                    ? 'bg-blue-600'
                    : index < currentStep
                    ? 'bg-blue-300'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Контент шага */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            {currentStepData.icon}
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {currentStepData.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            {currentStepData.description}
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            {currentStepData.subtitle}
          </p>
          
          {/* Демонстрационное изображение */}
          <div className="w-full h-48 bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400">Демонстрация шага {currentStep + 1}</span>
          </div>
        </div>

        {/* Навигация */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Button>
          
          <span className="text-sm text-gray-500">
            {currentStep + 1} из {steps.length}
          </span>
          
          <Button
            onClick={nextStep}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            {currentStep === steps.length - 1 ? (
              <>
                <Camera className="w-4 h-4" />
                Перейти к сканированию
              </>
            ) : (
              <>
                Вперёд
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanGuide;
