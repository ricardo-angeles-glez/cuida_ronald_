import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowRight, ShieldCheck, CreditCard, ChevronLeft, CheckCircle2 } from "lucide-react";

export default function DonorPortal() {
  const [view, setView] = useState<"catalog" | "checkout" | "success">("catalog");
  const [selectedItem, setSelectedItem] = useState<{ title: string; price: number; type: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = (item: { title: string; price: number; type: string }) => {
    setSelectedItem(item);
    setView("checkout");
  };

  const processPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setView("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ronald-gray font-body flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-ronald-red fill-ronald-red" />
            <span className="font-heading font-bold text-xl text-ronald-red">ImpactoRonald</span>
          </div>
          <Link to="/">
            <Button variant="ghost" className="text-ronald-dark">Volver al Menú</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12">
        {view === "catalog" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-ronald-dark">
                Tu impacto es real y medible.
              </h1>
              <p className="text-lg text-gray-600">
                Cada peso donado tiene un destino específico. Conoce exactamente a quién ayudas y cómo tu aportación cambia la vida de una familia hoy.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 py-6 border-y border-gray-200">
              <div className="flex items-center gap-2 text-ronald-dark">
                <ShieldCheck className="w-5 h-5 text-ronald-blue" />
                <span className="font-medium">Transparencia Radical</span>
              </div>
              <div className="flex items-center gap-2 text-ronald-dark">
                <Heart className="w-5 h-5 text-ronald-red" />
                <span className="font-medium">Impacto Directo</span>
              </div>
              <div className="flex items-center gap-2 text-ronald-dark">
                <CreditCard className="w-5 h-5 text-ronald-blue" />
                <span className="font-medium">Pago Seguro</span>
              </div>
            </div>

            {/* Impact Catalog */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden rounded-2xl">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                    alt="Habitación cálida" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute bottom-4 left-4 bg-white text-ronald-dark hover:bg-white">Hospedaje</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">1 Noche de Hospedaje</CardTitle>
                  <CardDescription className="text-base">Para una familia de hasta 4 personas.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-numbers text-3xl font-bold text-ronald-dark">$1,040 <span className="text-sm text-gray-500 font-body font-normal">MXN</span></p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Meta mensual</span>
                        <span className="font-medium text-ronald-dark">12 de 30 noches</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ronald-teal h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-ronald-red focus:ring-ronald-red w-4 h-4" />
                      <span>Hacer donación mensual</span>
                    </label>
                    <Button 
                      className="w-full bg-ronald-red hover:bg-red-800 text-white h-12 text-lg rounded-xl"
                      onClick={() => handleDonate({ title: "1 Noche de Hospedaje", price: 1040, type: "noche" })}
                    >
                      Donar Noche <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden rounded-2xl">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" 
                    alt="Comida caliente" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute bottom-4 left-4 bg-white text-ronald-dark hover:bg-white">Alimentación</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">1 Comida Caliente</CardTitle>
                  <CardDescription className="text-base">Nutrición balanceada para un cuidador.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-numbers text-3xl font-bold text-ronald-dark">$150 <span className="text-sm text-gray-500 font-body font-normal">MXN</span></p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Meta mensual</span>
                        <span className="font-medium text-ronald-dark">85 de 200 comidas</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ronald-yellow h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-ronald-red focus:ring-ronald-red w-4 h-4" />
                      <span>Hacer donación mensual</span>
                    </label>
                    <Button 
                      className="w-full bg-ronald-red hover:bg-red-800 text-white h-12 text-lg rounded-xl"
                      onClick={() => handleDonate({ title: "1 Comida Caliente", price: 150, type: "comida" })}
                    >
                      Donar Comida <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden rounded-2xl">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" 
                    alt="Transporte seguro" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute bottom-4 left-4 bg-white text-ronald-dark hover:bg-white">Transporte</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">1 Traslado Seguro</CardTitle>
                  <CardDescription className="text-base">Viaje redondo Casa-Hospital-Casa.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-numbers text-3xl font-bold text-ronald-dark">$300 <span className="text-sm text-gray-500 font-body font-normal">MXN</span></p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Meta mensual</span>
                        <span className="font-medium text-ronald-dark">40 de 100 traslados</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-ronald-blue h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-ronald-red focus:ring-ronald-red w-4 h-4" />
                      <span>Hacer donación mensual</span>
                    </label>
                    <Button 
                      className="w-full bg-ronald-red hover:bg-red-800 text-white h-12 text-lg rounded-xl"
                      onClick={() => handleDonate({ title: "1 Traslado Seguro", price: 300, type: "traslado" })}
                    >
                      Donar Traslado <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {view === "checkout" && selectedItem && (
          <div className="max-w-2xl mx-auto space-y-8">
            <Button variant="ghost" onClick={() => setView("catalog")} className="-ml-4 text-gray-500">
              <ChevronLeft className="w-5 h-5 mr-1" /> Volver al catálogo
            </Button>
            
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-heading font-bold text-ronald-dark">Completar Donación</h2>
              <p className="text-gray-600">Estás a un paso de generar un impacto real.</p>
            </div>

            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Resumen</p>
                  <h3 className="text-xl font-heading font-bold text-ronald-dark">{selectedItem.title}</h3>
                </div>
                <div className="text-right">
                  <p className="font-numbers text-2xl font-bold text-ronald-dark">${selectedItem.price} MXN</p>
                </div>
              </div>
              <CardContent className="p-6">
                <form onSubmit={processPayment} className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-ronald-dark">Tus Datos</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nombre</Label>
                        <Input required placeholder="Ej. Ana" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label>Apellidos</Label>
                        <Input required placeholder="Ej. Martínez" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Correo Electrónico</Label>
                      <Input type="email" required placeholder="Para enviarte tu recibo deducible" className="rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-ronald-dark">Método de Pago</h4>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1 border-2 border-ronald-blue bg-blue-50 rounded-xl p-3 text-center cursor-pointer">
                        <CreditCard className="w-6 h-6 text-ronald-blue mx-auto mb-1" />
                        <span className="text-sm font-medium text-ronald-blue">Tarjeta</span>
                      </div>
                      <div className="flex-1 border border-gray-200 rounded-xl p-3 text-center cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium text-gray-600 block mt-1">SPEI</span>
                      </div>
                      <div className="flex-1 border border-gray-200 rounded-xl p-3 text-center cursor-pointer hover:bg-gray-50">
                        <span className="text-sm font-medium text-gray-600 block mt-1">OXXO</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Número de Tarjeta</Label>
                      <Input required placeholder="0000 0000 0000 0000" className="rounded-xl font-numbers" maxLength={19} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Vencimiento</Label>
                        <Input required placeholder="MM/AA" className="rounded-xl font-numbers" maxLength={5} />
                      </div>
                      <div className="space-y-2">
                        <Label>CVC</Label>
                        <Input required placeholder="123" type="password" className="rounded-xl font-numbers" maxLength={4} />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full bg-ronald-blue hover:bg-blue-800 text-white h-14 text-lg rounded-xl mt-6"
                  >
                    {isProcessing ? "Procesando pago..." : `Donar $${selectedItem.price} MXN`}
                  </Button>
                  <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Pago procesado de forma segura por MercadoPago
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {view === "success" && selectedItem && (
          <div className="max-w-xl mx-auto text-center space-y-8 py-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-bold text-ronald-dark">¡Gracias por tu apoyo!</h2>
              <p className="text-xl text-gray-600">
                Tu donación de <strong>{selectedItem.title}</strong> ha sido procesada con éxito.
              </p>
            </div>
            
            <Card className="bg-white border-none shadow-lg rounded-2xl text-left overflow-hidden">
              <div className="bg-ronald-red text-white p-6">
                <h3 className="font-heading font-bold text-xl">Tu Impacto</h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700">
                  Gracias a ti, una familia podrá enfocarse en lo más importante: la salud de su hijo.
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Recibo Deducible</p>
                  <p className="font-medium text-ronald-dark">Enviado a tu correo electrónico.</p>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Te notificaremos cuando tu donación sea asignada a una familia específica.
                </p>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setView("catalog")} 
              variant="outline"
              className="h-12 px-8 rounded-xl border-gray-300"
            >
              Volver al Inicio
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

