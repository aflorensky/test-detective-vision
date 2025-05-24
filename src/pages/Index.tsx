
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Shield, 
  Zap, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Clock,
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Спасибо!",
        description: "Мы отправим вам информацию о новых функциях",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative px-4 py-16 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Не гадай по полоскам — узнай точно
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Мы поможем понять, есть ли вторая полоска и что она значит в твоем случае
            </p>
          </div>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: <Zap className="w-4 h-4" />, text: "За минуту" },
              { icon: <Smartphone className="w-4 h-4" />, text: "С телефона" },
              { icon: <Shield className="w-4 h-4" />, text: "Безопасно" },
              { icon: <Heart className="w-4 h-4" />, text: "Бесплатно" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-blue-600">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              onClick={() => navigate('/scan')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Camera className="w-6 h-6 mr-3" />
              Сканировать тест
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Demo Image Placeholder */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
                <Camera className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">Пример интерфейса сканирования</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            Сервис не ставит медицинский диагноз. Окончательное решение можно получить только у врача.
          </p>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Результат теста не должен быть источником тревоги
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы знаем, как сложно бывает понять результат — особенно, когда это важно.
          </p>
          
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg italic text-gray-700 leading-relaxed">
                    "Я смотрела на тест и не могла понять — а потом загрузила фотографию и получила ответ."
                  </p>
                  <div className="flex items-center gap-1 mt-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">Анна, 28 лет</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Сервис работает только с тестами «Будьте уверены»
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Распознавание работает точно только с партнёрскими тестами — это важно.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              { title: "Тесты на беременность", icon: <Heart className="w-8 h-8" /> },
              { title: "Тесты на овуляцию", icon: <Zap className="w-8 h-8" /> }
            ].map((test, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{test.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{test.title}</h3>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Фото упаковки</span>
                  </div>
                  <p className="text-sm text-gray-600">Ищите эту упаковку в аптеке</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600">Поддерживается</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Предупреждение:</strong> Если вы используете другой тест, результат может не соответствовать действительности. Мы работаем над расширением поддерживаемых тестов.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Сканирование в 3 простых шага
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            От фото до результата — меньше минуты. Мы покажем, как это работает.
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Всё происходит прямо в браузере — быстро, безопасно и без регистрации.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Сделайте фото теста",
                description: "Чётко, на белом фоне",
                icon: <Camera className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "Нажмите «Сканировать»",
                description: "Фото анализируется за 2–3 секунды",
                icon: <Zap className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Узнайте результат",
                description: "Мы покажем, есть ли вторая полоска и что она значит",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white">{step.icon}</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-200 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Безопасность и приватность — наш приоритет
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Вам не нужно создавать аккаунт, вводить e-mail или сообщать личные данные. Просто результат — и всё.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Гарантия конфиденциальности:</strong> Сервис не сохраняет фотографии и не собирает персональные данные. Результат анализа видите только вы.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Development Plan */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            У нас есть план развития — и ты можешь на него повлиять
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Расскажи, что тебе нужно и мы постараемся это реализовать.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Поддержка новых тестов (другие бренды)",
              "Расшифровка по дням цикла (овуляция, фертильные дни)",
              "Календарь результатов",
              "Экспорт в PDF или заметки",
              "Напоминания и рекомендации",
              "Персональные рекомендации"
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <Card className="max-w-md mx-auto border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Оставь email — и получи ранний доступ к новым функциям
              </h3>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Введите ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                >
                  Получить ранний доступ
                </Button>
              </form>
              <p className="text-white/80 text-xs mt-4">
                Если ты оставишь email, мы направим тебе на почту опрос о том, какие функции тебе интересны, а также опрос о твоем опыте использования сканирования.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Остались вопросы?</h3>
            <p className="text-gray-300 mb-6">Мы всегда готовы помочь</p>
            <a 
              href="mailto:support@example.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>support@example.com</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <Button
              onClick={() => {
                const emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.placeholder = 'Ваш email';
                emailInput.className = 'px-4 py-2 rounded-l-lg border-0 bg-white';
                
                toast({
                  title: "Подписка на новости",
                  description: "Функция подписки будет добавлена позже",
                });
              }}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Подписаться на новости
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
