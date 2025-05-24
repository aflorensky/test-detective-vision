
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Scan = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      simulateScan(file);
    }
  };

  const handleCameraCapture = () => {
    // В реальном приложении здесь был бы доступ к камере
    toast({
      title: "Камера",
      description: "Откройте камеру для съёмки теста",
    });
    // Симуляция захвата с камеры
    const mockFile = new File([''], 'camera-capture.jpg', { type: 'image/jpeg' });
    simulateScan(mockFile);
  };

  const simulateScan = (file: File) => {
    setIsLoading(true);
    
    // Симуляция процесса сканирования
    setTimeout(() => {
      setIsLoading(false);
      // Случайный результат для демонстрации
      const success = Math.random() > 0.3; // 70% успеха
      
      if (success) {
        navigate('/result/success', { state: { file } });
      } else {
        const newFailedAttempts = failedAttempts + 1;
        setFailedAttempts(newFailedAttempts);
        
        if (newFailedAttempts >= 3) {
          // Автоматический переход на обучение после 3 неудач
          navigate('/scan/guide', { state: { from: 'scan', autoRedirect: true } });
        } else {
          navigate('/result/fail', { state: { attempts: newFailedAttempts } });
        }
      }
    }, 2000);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            На главную
          </Button>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Загрузите фото или сфотографируйте тест
          </h1>
        </div>

        {/* Кнопки действий */}
        <div className="space-y-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <Button
                onClick={handleCameraCapture}
                disabled={isLoading}
                className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700"
              >
                <Camera className="w-6 h-6 mr-3" />
                📷 Сделать фото
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Button
                onClick={openFileDialog}
                disabled={isLoading}
                variant="outline"
                className="w-full h-16 text-lg border-2"
              >
                <Upload className="w-6 h-6 mr-3" />
                🖼️ Загрузить из галереи
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileUpload}
                className="hidden"
              />
            </CardContent>
          </Card>
        </div>

        {/* Инструкция */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">Инструкция:</h3>
            <p className="text-sm text-gray-600 mb-4">
              Убедитесь, что фото сделано при хорошем освещении и строго сверху. 
              Возможные ошибки будут показаны после распознования фотографии.
            </p>
            <Button
              variant="link"
              onClick={() => navigate('/scan/guide', { state: { from: 'scan' } })}
              className="p-0 h-auto text-blue-600 hover:text-blue-700"
            >
              Как правильно фотографировать →
            </Button>
          </CardContent>
        </Card>

        {/* Статус загрузки */}
        {isLoading && (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Анализируем фотографию...</p>
              <p className="text-sm text-gray-500 mt-2">Обычно это занимает 2-3 секунды</p>
            </CardContent>
          </Card>
        )}

        {/* Предупреждение о неудачах */}
        {failedAttempts > 0 && !isLoading && (
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <p className="text-sm text-yellow-800">
                Попыток: {failedAttempts}/3. 
                {failedAttempts === 2 && " При следующей неудаче мы покажем подробную инструкцию."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Scan;
