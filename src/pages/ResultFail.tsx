
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const ResultFail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  
  const attempts = location.state?.attempts || 1;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Спасибо!",
        description: "Мы отправим вам опрос о проблемах с распознаванием",
      });
      setEmail("");
    }
  };

  const getErrorMessage = () => {
    const messages = [
      "Мы не смогли распознать результат — фото было слишком размытым.",
      "На фото не видно теста полностью.",
      "Сервис работает только с тестами 'Будьте уверены'.",
      "Недостаточно освещения для точного распознавания.",
      "Тест сфотографирован под углом, нужна съёмка строго сверху."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-4 py-8">
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
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Не удалось распознать
          </h1>
          
          <p className="text-sm text-gray-500">
            Попытка {attempts} из 3
          </p>
        </div>

        {/* Объяснение причины */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">Причина:</h3>
            <p className="text-gray-600 text-sm">
              {getErrorMessage()}
            </p>
          </CardContent>
        </Card>

        {/* Советы */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">Советы для улучшения:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Попробуйте сфотографировать тест на белом фоне
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Убедитесь, что освещение хорошее и нет теней
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Держите камеру строго над тестом
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Проверьте, что у вас тест 'Будьте уверены'
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Предупреждение о лимите попыток */}
        {attempts >= 2 && (
          <Card className="mb-6 bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <p className="text-sm text-yellow-800">
                После следующей неудачной попытки мы покажем подробную инструкцию по фотографированию.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Email обратная связь */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-medium text-gray-900 mb-3">
              Сообщите о проблеме
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Если у вас возникли сложности — мы хотим об этом узнать. 
              Оставьте email, и мы пришлём короткий опрос.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="outline" className="w-full">
                Получить опрос
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Действия */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/scan')}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Попробовать ещё раз
          </Button>
          
          <Button
            onClick={() => navigate('/scan/guide', { state: { from: 'fail' } })}
            variant="outline"
            className="w-full"
          >
            Посмотреть инструкцию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultFail;
