
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Camera, CheckCircle, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent, type: 'plan' | 'footer') => {
    e.preventDefault();
    const emailValue = type === 'plan' ? email : footerEmail;
    if (emailValue) {
      toast({
        title: "Спасибо!",
        description: "Мы отправим вам информацию о новых функциях",
      });
      if (type === 'plan') setEmail("");
      else setFooterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Первый экран */}
      <section className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Не гадай по полоскам — узнай точно
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Мы поможем понять, есть ли вторая полоска и что она значит в твоем случае
        </p>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-md mx-auto">
          <div className="space-y-3 text-sm text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Работает только с тестами «Будьте уверены»</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Фото с телефона, без регистрации</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Бесплатно, онлайн, за минуту</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Работает прямо в браузере</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Фото остаётся только у тебя</span>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/scan/guide')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            Сканировать тест
          </Button>
        </div>

        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Сервис не ставит медицинский диагноз. Окончательное решение можно получить только у врача.
        </p>
      </section>

      {/* Почему это важно */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Результат тест не должен быть источником тревоги
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы знаем, как сложно бывает понять результат — особенно, когда это важно.
          </p>
          <blockquote className="text-lg italic text-blue-800 bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            "Я смотрела на тест и не могла понять — а потом загрузила фотографию и получила ответ."
          </blockquote>
        </div>
      </section>

      {/* Только с тестами «Будьте уверены» */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Сервис работает только с тестами «Будьте уверены»
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Распознавание работает точно только с партнёрскими тестами — это важно.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-pink-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-pink-600 font-bold">Тест на беременность</span>
                </div>
                <p className="text-sm text-gray-600">Тесты на беременность</p>
                <p className="text-xs text-green-600 font-medium mt-2">✓ поддерживается</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Тест на овуляцию</span>
                </div>
                <p className="text-sm text-gray-600">Тесты на овуляцию</p>
                <p className="text-xs text-green-600 font-medium mt-2">✓ поддерживается</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-sm text-gray-600 italic">
            Ищите эту упаковку в аптеке
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Предупреждение:</strong> Если вы используете другой тест, результат может не соответствовать действительности. Мы работаем над расширением поддерживаемых тестов.
            </p>
          </div>
        </div>
      </section>

      {/* Как работает */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Сканирование в 3 простых шага
          </h2>
          <p className="text-lg text-gray-600 mb-2 text-center">
            От фото до результата — меньше минуты. Мы покажем, как это работает.
          </p>
          <p className="text-sm text-gray-500 mb-12 text-center">
            Всё происходит прямо в браузере — быстро, безопасно и без регистрации.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Сделайте фото теста</h3>
              <p className="text-gray-600 text-sm">Чётко, на белом фоне.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded animate-pulse"></div>
              </div>
              <h3 className="font-bold text-lg mb-2">2. Нажмите "Сканировать"</h3>
              <p className="text-gray-600 text-sm">Фото анализируется за 2–3 секунды.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Узнайте результат</h3>
              <p className="text-gray-600 text-sm">Мы покажем, есть ли вторая полоска и что она значит.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Безопасность */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 max-w-2xl mx-auto">
            <Shield className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Безопасность и приватность — наш приоритет
              </h2>
              <p className="text-gray-600 mb-4">
                Вам не нужно создавать аккаунт, вводить e-mail или сообщать личные данные. Просто результат — и всё.
              </p>
              <p className="text-sm text-gray-500">
                Сервис не сохраняет фотографии и не собирает персональные данные. Результат анализа видите только вы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* План развития */}
      <section className="px-4 py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            У нас есть план развития — и ты можешь на него повлиять
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Расскажи, что тебе нужно и мы постараемся это реализовать.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Поддержка новых тестов (другие бренды)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Расшифровка по дням цикла (овуляция, фертильные дни)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Календарь результатов</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Экспорт в PDF или заметки</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Напоминания и рекомендации</span>
              </div>
            </div>
          </div>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                Оставь email — и получи ранний доступ к новым функциям
              </h3>
              <form onSubmit={(e) => handleEmailSubmit(e, 'plan')} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Введите ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Получить ранний доступ
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Если ты оставишь email, мы направим тебе на почту опрос о том, какие функции тебе интересны, а также опрос о твоем опыте использования сканирования.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 mb-2">Email для связи:</p>
              <a href="mailto:support@example.com" className="text-blue-400 hover:text-blue-300">
                support@example.com
              </a>
            </div>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Подписаться на новости
                </h3>
                <form onSubmit={(e) => handleEmailSubmit(e, 'footer')} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                  <Button type="submit" variant="secondary">
                    Подписаться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
