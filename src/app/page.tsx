"use client"

import { useState } from "react"
import { Moon, Sun, Music, Clock, TrendingUp, BookOpen, Users, Play, Pause, Volume2, Star, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export default function SonoTranquilo() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([70])
  const [selectedSound, setSelectedSound] = useState("rain")

  // Dados simulados de sono
  const sleepData = {
    lastNight: { hours: 7.5, quality: 85 },
    weekAverage: { hours: 7.2, quality: 78 },
    goal: 8
  }

  const sounds = [
    { id: "rain", name: "Chuva Suave", icon: "🌧️", premium: false },
    { id: "ocean", name: "Ondas do Mar", icon: "🌊", premium: false },
    { id: "forest", name: "Floresta Noturna", icon: "🌲", premium: false },
    { id: "white", name: "Ruído Branco", icon: "📻", premium: false },
    { id: "piano", name: "Piano Relaxante", icon: "🎹", premium: true },
    { id: "meditation", name: "Meditação Guiada", icon: "🧘", premium: true },
  ]

  const routineActivities = [
    { id: 1, name: "Meditação", duration: "10 min", completed: true },
    { id: 2, name: "Leitura", duration: "20 min", completed: true },
    { id: 3, name: "Exercícios de Respiração", duration: "5 min", completed: false },
    { id: 4, name: "Alongamento Suave", duration: "10 min", completed: false },
  ]

  const sleepTips = [
    {
      title: "Ambiente Escuro",
      description: "Mantenha o quarto completamente escuro para melhor produção de melatonina",
      icon: Moon
    },
    {
      title: "Temperatura Ideal",
      description: "A temperatura ideal para dormir é entre 18-22°C",
      icon: Sun
    },
    {
      title: "Rotina Consistente",
      description: "Vá para a cama e acorde no mesmo horário todos os dias",
      icon: Clock
    },
  ]

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Moon className="w-10 h-10 text-purple-300" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            Sono Tranquilo
          </h1>
          <Sparkles className="w-8 h-8 text-purple-300" />
        </div>
        <p className="text-purple-200/80 text-lg">Melhore sua qualidade de sono com práticas personalizadas</p>
      </header>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/10 backdrop-blur-sm mb-8">
          <TabsTrigger value="dashboard" className="data-[state=active]:bg-purple-500/50">
            <TrendingUp className="w-4 h-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="sounds" className="data-[state=active]:bg-purple-500/50">
            <Music className="w-4 h-4 mr-2" />
            Sons
          </TabsTrigger>
          <TabsTrigger value="routine" className="data-[state=active]:bg-purple-500/50">
            <Clock className="w-4 h-4 mr-2" />
            Rotina
          </TabsTrigger>
          <TabsTrigger value="tips" className="data-[state=active]:bg-purple-500/50">
            <BookOpen className="w-4 h-4 mr-2" />
            Dicas
          </TabsTrigger>
          <TabsTrigger value="community" className="data-[state=active]:bg-purple-500/50">
            <Users className="w-4 h-4 mr-2" />
            Comunidade
          </TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center gap-2">
                  <Moon className="w-5 h-5" />
                  Última Noite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{sleepData.lastNight.hours}h</div>
                <Progress value={sleepData.lastNight.quality} className="mb-2" />
                <p className="text-sm text-purple-200/70">Qualidade: {sleepData.lastNight.quality}%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Média Semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{sleepData.weekAverage.hours}h</div>
                <Progress value={sleepData.weekAverage.quality} className="mb-2" />
                <p className="text-sm text-purple-200/70">Qualidade: {sleepData.weekAverage.quality}%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Meta Diária
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{sleepData.goal}h</div>
                <Progress value={(sleepData.lastNight.hours / sleepData.goal) * 100} className="mb-2" />
                <p className="text-sm text-purple-200/70">
                  {sleepData.lastNight.hours >= sleepData.goal ? "Meta atingida! 🎉" : "Continue tentando"}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Relatório Semanal</CardTitle>
              <CardDescription className="text-purple-200/70">
                Seus padrões de sono nos últimos 7 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, index) => (
                  <div key={day} className="flex items-center gap-4">
                    <span className="text-purple-200 w-12">{day}</span>
                    <Progress value={Math.random() * 100} className="flex-1" />
                    <span className="text-purple-200 w-16 text-right">
                      {(6 + Math.random() * 2).toFixed(1)}h
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sounds Tab */}
        <TabsContent value="sounds" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Biblioteca de Sons Relaxantes</CardTitle>
              <CardDescription className="text-purple-200/70">
                Escolha sons que ajudam você a adormecer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sounds.map((sound) => (
                  <Card
                    key={sound.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedSound === sound.id
                        ? "bg-purple-500/30 border-purple-400"
                        : "bg-white/5 border-purple-300/20"
                    }`}
                    onClick={() => setSelectedSound(sound.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-2">{sound.icon}</div>
                      <h3 className="text-white font-semibold mb-1">{sound.name}</h3>
                      {sound.premium && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
                          Premium
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Player de Áudio</h3>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-purple-500 hover:bg-purple-600"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Volume2 className="w-5 h-5 text-purple-300" />
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-purple-200 w-12 text-right">{volume[0]}%</span>
                </div>

                <div className="text-center text-purple-200/70 text-sm">
                  {isPlaying ? `Tocando: ${sounds.find(s => s.id === selectedSound)?.name}` : "Selecione um som e pressione play"}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Routine Tab */}
        <TabsContent value="routine" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Rotina Noturna Personalizada</CardTitle>
              <CardDescription className="text-purple-200/70">
                Crie hábitos relaxantes antes de dormir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {routineActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Switch checked={activity.completed} />
                    <div>
                      <h3 className={`text-white font-semibold ${activity.completed ? "line-through opacity-50" : ""}`}>
                        {activity.name}
                      </h3>
                      <p className="text-purple-200/70 text-sm">{activity.duration}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-purple-300/30 text-purple-200">
                    Iniciar
                  </Button>
                </div>
              ))}

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                + Adicionar Nova Atividade
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Timer de Sono</CardTitle>
              <CardDescription className="text-purple-200/70">
                Configure um lembrete para sua hora de dormir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-white">22:30</div>
                <p className="text-purple-200/70">Hora ideal para dormir</p>
                <Button className="bg-purple-500 hover:bg-purple-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Configurar Alarme
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tips Tab */}
        <TabsContent value="tips" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sleepTips.map((tip, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:bg-white/15 transition-all">
                <CardHeader>
                  <CardTitle className="text-purple-200 flex items-center gap-2">
                    <tip.icon className="w-5 h-5" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200/80">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Artigos sobre Higiene do Sono</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Como criar o ambiente perfeito para dormir",
                "A ciência por trás dos ciclos de sono",
                "Alimentos que ajudam (e atrapalham) o sono",
                "Exercícios de respiração para relaxamento profundo"
              ].map((article, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between"
                >
                  <span className="text-white">{article}</span>
                  <Badge className="bg-purple-500/30 text-purple-200">Ler</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Comunidade de Suporte</CardTitle>
              <CardDescription className="text-purple-200/70">
                Compartilhe experiências e aprenda com outros usuários
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { user: "Maria S.", message: "Consegui dormir 8h seguidas pela primeira vez em meses! 🎉", likes: 24 },
                { user: "João P.", message: "Os sons de chuva são incríveis, recomendo muito!", likes: 18 },
                { user: "Ana L.", message: "Alguém tem dicas para acordar mais disposto?", likes: 12 },
              ].map((post, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold">{post.user}</h4>
                    <span className="text-purple-200/70 text-sm">{post.likes} ❤️</span>
                  </div>
                  <p className="text-purple-200/80">{post.message}</p>
                </div>
              ))}

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                + Compartilhar Sua Experiência
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-purple-200">Pergunte aos Especialistas</CardTitle>
              <CardDescription className="text-purple-200/70">
                Tire suas dúvidas com profissionais do sono
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
                      Especialista
                    </Badge>
                    <span className="text-white font-semibold">Dr. Carlos Silva</span>
                  </div>
                  <p className="text-purple-200/80 text-sm">
                    Neurologista especializado em medicina do sono
                  </p>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Fazer uma Pergunta
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Premium Banner */}
      <div className="max-w-7xl mx-auto mt-8">
        <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md border-yellow-400/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              ✨ Desbloqueie Recursos Premium
            </h3>
            <p className="text-purple-200/80 mb-4">
              Acesse meditações exclusivas, insights detalhados e muito mais
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500 font-semibold">
              Assinar Premium - R$ 19,90/mês
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
