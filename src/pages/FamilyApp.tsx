import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { Home, Calendar, BookOpen, Wind, MapPin, Phone, ChevronRight, CheckCircle2, Wifi, VolumeX, Shirt, Clock, ChevronLeft, Bell, Menu, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MediaGallery from "@/components/MediaGallery";
import VideoPlayer from "@/components/VideoPlayer";

export default function FamilyApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [mood, setMood] = useState<string | null>(null);
  const [breathingPhase, setBreathingPhase] = useState("Inhala");
  const [subView, setSubView] = useState<"route" | "emergency" | "week-calendar" | null>(null);

  const completeOnboarding = () => {
    setShowOnboarding(false);
    setActiveTab("home");
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-ronald-gray flex justify-center font-body">
        <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col">
          <div className="flex-1 flex flex-col p-6 items-center justify-center text-center">
            {/* Progress Bar */}
            <div className="absolute top-8 left-0 w-full px-6 flex gap-2">
              {[1, 2, 3].map(step => (
                <div key={step} className={`h-2 flex-1 rounded-full ${step <= onboardingStep ? 'bg-ronald-red' : 'bg-gray-200'}`} />
              ))}
            </div>

            {onboardingStep === 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                  <Home className="w-16 h-16 text-ronald-red" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-ronald-dark">Tu habitación te espera</h2>
                <p className="text-gray-600 text-lg">
                  Estás aquí. Eso ya es mucho. Hemos preparado un espacio seguro y cálido para ti y tu familia.
                </p>
                <Button className="w-full h-14 text-lg bg-ronald-red hover:bg-red-800 text-white rounded-xl mt-8" onClick={() => setOnboardingStep(2)}>
                  Continuar
                </Button>
              </motion.div>
            )}

            {onboardingStep === 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center mx-auto">
                  <Wind className="w-16 h-16 text-ronald-teal" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-ronald-dark">Toma un respiro</h2>
                <p className="text-gray-600 text-lg">
                  Sabemos que son días difíciles. En la sección "Respira" encontrarás ejercicios simples para encontrar calma cuando lo necesites.
                </p>
                <Button className="w-full h-14 text-lg bg-ronald-red hover:bg-red-800 text-white rounded-xl mt-8" onClick={() => setOnboardingStep(3)}>
                  Continuar
                </Button>
              </motion.div>
            )}

            {onboardingStep === 3 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-16 h-16 text-ronald-blue" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-ronald-dark">Estamos para ayudarte</h2>
                <p className="text-gray-600 text-lg">
                  Consulta nuestra guía rápida para conocer los horarios, servicios y reglas de convivencia de la Casa.
                </p>
                <Button className="w-full h-14 text-lg bg-ronald-red hover:bg-red-800 text-white rounded-xl mt-8" onClick={completeOnboarding}>
                  Comenzar
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const renderSubView = () => {
    if (subView === "route") {
      return (
        <div className="p-4 space-y-6 pb-24">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 bg-white rounded-full shadow-sm">
              <ChevronLeft className="w-5 h-5 text-ronald-dark" />
            </button>
            <h2 className="text-xl font-heading font-bold text-ronald-dark">Ruta al Hospital</h2>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <div className="h-48 bg-gray-200 rounded-xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Mapa" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-ronald-blue text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 15 min en transporte
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-bold text-ronald-dark">Horarios de Transporte (Van de la Casa)</h3>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">Salida a Hospital</span>
                <span className="text-ronald-blue font-bold">07:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-700">Regreso a Casa</span>
                <span className="text-ronald-blue font-bold">18:00 PM</span>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">Por favor, estar en recepción 10 minutos antes de la salida.</p>
            </div>
          </div>
        </div>
      );
    }

    if (subView === "emergency") {
      return (
        <div className="p-4 space-y-6 pb-24">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 bg-white rounded-full shadow-sm">
              <ChevronLeft className="w-5 h-5 text-ronald-dark" />
            </button>
            <h2 className="text-xl font-heading font-bold text-ronald-red">Emergencia</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-ronald-red text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
              <Phone className="w-12 h-12" />
              <span className="font-heading font-bold text-xl">Llamar a Recepción</span>
              <span className="text-sm opacity-80">Disponible 24/7</span>
            </button>

            <button className="w-full bg-white border-2 border-ronald-red text-ronald-red p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
              <Phone className="w-8 h-8" />
              <span className="font-heading font-bold text-lg">Llamar a Ambulancia (911)</span>
            </button>

            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 mt-6">
              <h3 className="font-bold text-ronald-dark mb-2">Protocolo de Evacuación</h3>
              <p className="text-sm text-gray-700">En caso de sismo o incendio, mantén la calma y dirígete al punto de encuentro en el patio central. No uses los elevadores.</p>
            </div>
          </div>
        </div>
      );
    }

    if (subView === "week-calendar") {
      return (
        <div className="p-4 space-y-6 pb-24">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 bg-white rounded-full shadow-sm">
              <ChevronLeft className="w-5 h-5 text-ronald-dark" />
            </button>
            <h2 className="text-xl font-heading font-bold text-ronald-dark">Calendario de la Semana</h2>
          </div>

          <div className="space-y-6">
            {[
              { day: "Lunes 12", events: [{ time: "08:00", title: "Desayuno", type: "food" }, { time: "17:00", title: "Taller de Manualidades", type: "activity" }] },
              { day: "Martes 13", events: [{ time: "08:00", title: "Desayuno", type: "food" }, { time: "16:00", title: "Visita de Voluntarios", type: "activity" }] },
              { day: "Miércoles 14", events: [{ time: "08:00", title: "Desayuno", type: "food" }, { time: "19:00", title: "Cena Especial", type: "food" }] },
            ].map((day, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-ronald-dark border-b pb-2 mb-3">{day.day}</h3>
                <div className="space-y-3">
                  {day.events.map((ev, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`px-2 py-1 rounded text-xs font-bold ${ev.type === 'food' ? 'bg-ronald-yellow/20 text-ronald-dark' : 'bg-ronald-teal/20 text-ronald-teal'}`}>
                        {ev.time}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{ev.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-ronald-gray flex justify-center font-body">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col">
        
        {/* Header */}
        {activeTab !== "respira" && !subView && (
          <header className="bg-ronald-red text-white p-4 sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-heading font-bold text-lg">Familia García</h1>
                <p className="text-red-100 text-sm">Casa Tlalpan</p>
              </div>
            </div>
          </header>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto pb-24 ${activeTab === 'respira' && !subView ? 'bg-ronald-dark' : ''}`}>
          
          {subView ? renderSubView() : (
            <>
              {activeTab === "home" && (
                <div className="p-4 space-y-6">
                  {/* Digital ID Card */}
                  <Card className="bg-gradient-to-br from-ronald-red to-red-900 text-white border-none shadow-lg overflow-hidden relative rounded-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <p className="text-red-100 text-xs uppercase tracking-wider font-bold">Tarjeta Digital</p>
                          <h2 className="text-2xl font-heading font-bold mt-1">Mateo García</h2>
                          <p className="text-red-100">Habitación 204</p>
                        </div>
                        <div className="bg-white p-2 rounded-xl">
                          <QRCodeSVG value="RMHC-8492-MATEO" size={64} />
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm border-t border-red-500/50 pt-4">
                        <div>
                          <p className="text-red-200 text-xs">Ingreso</p>
                          <p className="font-medium">10 Abr 2026</p>
                        </div>
                        <div>
                          <p className="text-red-200 text-xs">Salida Est.</p>
                          <p className="font-medium">15 Abr 2026</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button onClick={() => setSubView("route")} variant="outline" className="h-24 flex flex-col gap-2 border-gray-200 rounded-2xl hover:bg-gray-50">
                      <MapPin className="w-8 h-8 text-ronald-blue" />
                      <span className="text-sm font-medium text-ronald-dark">Ruta a Hospital</span>
                    </Button>
                    <Button onClick={() => setSubView("emergency")} variant="outline" className="h-24 flex flex-col gap-2 border-gray-200 rounded-2xl hover:bg-gray-50">
                      <Phone className="w-8 h-8 text-ronald-orange" />
                      <span className="text-sm font-medium text-ronald-dark">Emergencia</span>
                    </Button>
                  </div>

                  {/* Today's Schedule */}
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="font-heading font-bold text-ronald-dark text-lg">Hoy en la Casa</h3>
                      <button onClick={() => setSubView("week-calendar")} className="text-sm text-ronald-blue font-medium">Ver semana</button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-12 text-center">
                          <p className="text-sm font-bold text-ronald-dark">08:00</p>
                        </div>
                        <div className="w-1 h-10 bg-ronald-yellow rounded-full"></div>
                        <div>
                          <p className="font-medium text-ronald-dark">Desayuno</p>
                          <p className="text-sm text-gray-500">Comedor Principal</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-12 text-center">
                          <p className="text-sm font-bold text-ronald-dark">14:00</p>
                        </div>
                        <div className="w-1 h-10 bg-ronald-yellow rounded-full"></div>
                        <div>
                          <p className="font-medium text-ronald-dark">Comida</p>
                          <p className="text-sm text-gray-500">Comedor Principal</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-12 text-center">
                          <p className="text-sm font-bold text-ronald-dark">17:00</p>
                        </div>
                        <div className="w-1 h-10 bg-ronald-teal rounded-full"></div>
                        <div>
                          <p className="font-medium text-ronald-dark">Taller de Arte</p>
                          <p className="text-sm text-gray-500">Sala de Juegos</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-12 text-center">
                          <p className="text-sm font-bold text-ronald-dark">19:00</p>
                        </div>
                        <div className="w-1 h-10 bg-ronald-yellow rounded-full"></div>
                        <div>
                          <p className="font-medium text-ronald-dark">Cena</p>
                          <p className="text-sm text-gray-500">Comedor Principal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "respira" && (
                <div className="min-h-full flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
                  >
                    <source src="https://videos.pexels.com/video-files/3571373/3571373-sd_640_360_30fps.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute top-8 text-center w-full px-6 z-20">
                    <h2 className="font-heading text-2xl text-white/90">Respira</h2>
                    <p className="text-white/60 text-sm mt-1">Sigue el círculo</p>
                  </div>

                  <div className="relative w-64 h-64 flex items-center justify-center mt-12 z-10">
                    <motion.div
                      animate={{ scale: [0.6, 1.4, 1.4, 0.6, 0.6] }}
                      transition={{ duration: 16, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" }}
                      onUpdate={(latest) => {
                        const s = latest.scale as number;
                        if (s > 1.3) setBreathingPhase("Mantén");
                        else if (s < 0.7) setBreathingPhase("Mantén");
                        else if (s > 1.0 && breathingPhase !== "Mantén") setBreathingPhase("Inhala");
                        else if (s < 1.0 && breathingPhase !== "Mantén") setBreathingPhase("Exhala");
                      }}
                      className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-ronald-teal to-teal-400 opacity-80 blur-sm"
                    />
                    <span className="relative z-10 font-instruction text-2xl tracking-widest text-white">{breathingPhase}</span>
                  </div>

                  <div className="absolute bottom-32 w-full px-6 text-center z-20">
                    <p className="text-white/60 text-sm mb-4">¿Cómo te sientes hoy?</p>
                    <div className="flex justify-center gap-4">
                      {['😭', '😢', '😐', '🙂', '😄'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => setMood(emoji)}
                          className={`text-4xl transition-transform ${mood === emoji ? 'scale-125' : 'opacity-50 hover:opacity-100'}`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                    {mood && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-ronald-teal text-sm mt-4">
                        Registrado. Tu diario es privado.
                      </motion.p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "guide" && (
                <div className="p-4 space-y-6 pb-24">
                  <h2 className="text-2xl font-heading font-bold text-ronald-dark mb-4">Información Útil</h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full mt-1">
                        <Wifi className="w-6 h-6 text-ronald-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ronald-dark text-lg">Internet WiFi</h3>
                        <p className="text-gray-600 mt-1">Red: <span className="font-mono bg-gray-100 px-1 rounded">CasaRonald_Invitados</span></p>
                        <p className="text-gray-600">Contraseña: <span className="font-mono bg-gray-100 px-1 rounded">Familia2026</span></p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                      <div className="bg-purple-50 p-3 rounded-full mt-1">
                        <VolumeX className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ronald-dark text-lg">Horario de Silencio</h3>
                        <p className="text-gray-600 mt-1">De <strong>22:00 PM</strong> a <strong>06:00 AM</strong>.</p>
                        <p className="text-sm text-gray-500 mt-1">Por favor, respeta el descanso de las demás familias.</p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                      <div className="bg-teal-50 p-3 rounded-full mt-1">
                        <Shirt className="w-6 h-6 text-ronald-teal" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ronald-dark text-lg">Lavandería</h3>
                        <p className="text-gray-600 mt-1">Abierta de <strong>08:00 AM</strong> a <strong>20:00 PM</strong>.</p>
                        <p className="text-sm text-gray-500 mt-1">Anota tu turno en la pizarra de la entrada.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                      <div className="bg-yellow-50 p-3 rounded-full mt-1">
                        <Clock className="w-6 h-6 text-ronald-yellow" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ronald-dark text-lg">Horarios de Comida</h3>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>Desayuno: 08:00 - 09:30 AM</li>
                          <li>Comida: 14:00 - 15:30 PM</li>
                          <li>Cena: 19:00 - 20:30 PM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="p-4 pb-24 space-y-8">
                  <h2 className="text-2xl font-heading font-bold text-ronald-dark">Galería Multimedia</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-ronald-dark mb-4">Ejercicios Recomendados</h3>
                      <MediaGallery category="exercises" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-ronald-dark mb-4">Videos Tutoriales</h3>
                      <VideoPlayer category="tutorials" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-ronald-dark mb-4">Guías Visuales</h3>
                      <MediaGallery category="guides" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "calendar" && (
                <div className="p-4">
                  <h2 className="text-2xl font-heading font-bold text-ronald-dark mb-4">Próxima Visita</h2>
                  <Card className="rounded-2xl border-none shadow-sm bg-gray-50">
                    <CardContent className="p-8 text-center space-y-4">
                      <Calendar className="w-16 h-16 text-ronald-red/50 mx-auto" />
                      <p className="text-gray-600 text-lg">¿Necesitas programar una nueva estancia?</p>
                      <Button className="w-full h-14 text-lg bg-ronald-red hover:bg-red-800 text-white rounded-xl">Solicitar Reservación</Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </>
          )}
        </main>

        {/* Bottom Navigation */}
        <nav className="bg-white border-t border-gray-200 absolute bottom-0 w-full pb-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="flex justify-around p-2">
            <button 
              onClick={() => { setActiveTab("home"); setSubView(null); }}
              className={`flex flex-col items-center p-2 min-w-[64px] ${activeTab === "home" && !subView ? "text-ronald-red" : "text-gray-400"}`}
            >
              <Home className="w-6 h-6" />
              <span className="text-[11px] mt-1 font-medium">Inicio</span>
            </button>
            <button 
              onClick={() => { setActiveTab("guide"); setSubView(null); }}
              className={`flex flex-col items-center p-2 min-w-[64px] ${activeTab === "guide" && !subView ? "text-ronald-red" : "text-gray-400"}`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-[11px] mt-1 font-medium">Guía</span>
            </button>
            <button 
              onClick={() => { setActiveTab("respira"); setSubView(null); }}
              className={`flex flex-col items-center p-2 min-w-[64px] ${activeTab === "respira" && !subView ? "text-ronald-teal" : "text-gray-400"}`}
            >
              <Wind className="w-6 h-6" />
              <span className="text-[11px] mt-1 font-medium">Respira</span>
            </button>
            <button 
              onClick={() => { setActiveTab("gallery"); setSubView(null); }}
              className={`flex flex-col items-center p-2 min-w-[64px] hidden ${activeTab === "gallery" && !subView ? "text-ronald-red" : "text-gray-400"}`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-[11px] mt-1 font-medium">Galería</span>
            </button>
            <button 
              onClick={() => { setActiveTab("calendar"); setSubView(null); }}
              className={`flex flex-col items-center p-2 min-w-[64px] ${activeTab === "calendar" && !subView ? "text-ronald-red" : "text-gray-400"}`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-[11px] mt-1 font-medium">Reservas</span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Navigation back to landing (outside mobile view) */}
      <div className="fixed top-4 left-4 hidden md:block">
        <Link to="/">
          <Button variant="outline" className="bg-white shadow-sm border-gray-200 text-ronald-dark">
            Volver al Menú Principal
          </Button>
        </Link>
      </div>
    </div>
  );
}
