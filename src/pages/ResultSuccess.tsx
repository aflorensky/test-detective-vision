
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const ResultSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Спасибо!",
        description: "Мы отправим вам опрос о вашем опыте",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Навигация */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          На главную
        </Button>

        {/* Результат */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Результат распознан
          </h1>
        </div>

        {/* Фото теста */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">Ваше фото:</h3>
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Загруженное фото теста</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium">
                Обнаружена вторая полоска. Вероятный положительный результат.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Объяснение */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">Объяснение:</h3>
            <p className="text-gray-600 text-sm mb-4">
              Мы обнаружили вторую полоску. Это может указывать на положительный результат. 
              Для полной уверенности повторите тест через 24 часа или обратитесь к врачу.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Важно:</strong> Сканирование работает только с тестами "Будьте уверены". 
                Результат не является медицинским диагнозом.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email обратная связь */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">
              Расскажите о своём опыте
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Расскажи, как тебе результат. Мы отправим короткий опрос о твоем опыте — 
              он поможет нам сделать сервис лучше.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Получить опрос
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Действия */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/scan')}
            variant="outline"
            className="w-full"
          >
            Сканировать ещё один тест
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultSuccess;
