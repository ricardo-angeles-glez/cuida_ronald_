import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, ArrowLeft, Search, CheckCircle2, Clock, AlertCircle, Send } from "lucide-react";

const HOUSES = [
  { id: 1, name: "Casa Tlalpan", capacity: 40, occupied: 35, status: "warning" },
  { id: 2, name: "Casa Estado de México", capacity: 30, occupied: 12, status: "success" },
  { id: 3, name: "Casa Puebla", capacity: 25, occupied: 24, status: "danger" },
];

export default function HospitalPortal() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ronald-gray font-body">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-ronald-dark transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-ronald-red" />
              <span className="font-heading font-bold text-lg text-ronald-dark">Portal Hospitales</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-ronald-dark">Hosp. Infantil de México</p>
              <p className="text-xs text-gray-500">Trabajador Social: Ana M.</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-ronald-red font-bold border border-red-100">
              AM
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h2 className="text-3xl font-heading font-bold text-ronald-dark">Disponibilidad en Tiempo Real</h2>
                <p className="text-gray-600 mt-1">Consulta la ocupación actual de las casas antes de solicitar.</p>
              </div>
              <Button onClick={() => setStep(2)} className="bg-ronald-red hover:bg-red-800 text-white rounded-xl h-12 px-6">
                Nueva Solicitud
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOUSES.map((house) => {
                const percentage = Math.round((house.occupied / house.capacity) * 100);
                const isHigh = percentage >= 90;
                const isMedium = percentage >= 75 && percentage < 90;
                
                return (
                  <Card key={house.id} className="border-none shadow-md rounded-2xl overflow-hidden">
                    <CardHeader className="pb-2 bg-white">
                      <CardTitle className="flex justify-between items-center font-heading text-lg">
                        {house.name}
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          isHigh ? 'bg-red-100 text-ronald-red' : 
                          isMedium ? 'bg-yellow-100 text-ronald-yellow' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {percentage}%
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="bg-white">
                      <div className="mt-2 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Habitaciones ocupadas</span>
                          <span className="font-bold text-ronald-dark">{house.occupied} / {house.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${isHigh ? 'bg-ronald-red' : isMedium ? 'bg-ronald-yellow' : 'bg-ronald-teal'}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-ronald-dark">Solicitudes Recientes</h3>
              <Card className="border-none shadow-md rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-bold">Paciente</th>
                        <th className="px-6 py-4 font-bold">Casa Asignada</th>
                        <th className="px-6 py-4 font-bold">Fechas</th>
                        <th className="px-6 py-4 font-bold">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-ronald-dark">Mateo García (8 años)</td>
                        <td className="px-6 py-4 text-gray-600">Casa Tlalpan</td>
                        <td className="px-6 py-4 text-gray-600">10 Abr - 15 Abr</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Confirmada</span>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-ronald-dark">Sofía López (5 años)</td>
                        <td className="px-6 py-4 text-gray-600">Casa Estado de México</td>
                        <td className="px-6 py-4 text-gray-600">12 Abr - 20 Abr</td>
                        <td className="px-6 py-4">
                          <span className="bg-yellow-100 text-ronald-yellow px-3 py-1 rounded-full text-xs font-bold">En Espera</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setStep(1)} className="rounded-full hover:bg-white">
                <ArrowLeft className="w-5 h-5 text-ronald-dark" />
              </Button>
              <div>
                <h2 className="text-3xl font-heading font-bold text-ronald-dark">Nueva Solicitud de Ingreso</h2>
                <p className="text-gray-600 mt-1">Complete los datos para pre-registrar a la familia.</p>
              </div>
            </div>

            <Card className="border-none shadow-lg rounded-3xl overflow-hidden">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-8 p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-ronald-dark border-b border-gray-100 pb-2">Datos del Paciente</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="childName" className="font-bold text-gray-700">Nombre Completo del Niño(a)</Label>
                        <Input id="childName" required placeholder="Ej. Juan Pérez" className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childAge" className="font-bold text-gray-700">Edad</Label>
                        <Input id="childAge" type="number" required placeholder="Ej. 7" className="rounded-xl h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis" className="font-bold text-gray-700">Diagnóstico Principal</Label>
                      <Input id="diagnosis" required placeholder="Ej. Leucemia Linfoblástica Aguda" className="rounded-xl h-12" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-ronald-dark border-b border-gray-100 pb-2">Datos del Familiar (Tutor)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tutorName" className="font-bold text-gray-700">Nombre Completo</Label>
                        <Input id="tutorName" required placeholder="Nombre del tutor" className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="relation" className="font-bold text-gray-700">Parentesco</Label>
                        <Input id="relation" required placeholder="Ej. Madre" className="rounded-xl h-12" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-bold text-gray-700">Teléfono Móvil (WhatsApp)</Label>
                        <Input id="phone" type="tel" required placeholder="10 dígitos" className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="font-bold text-gray-700">Estado de Procedencia</Label>
                        <Input id="state" required placeholder="Ej. Oaxaca" className="rounded-xl h-12" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-ronald-dark border-b border-gray-100 pb-2">Detalles de Estancia</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dateIn" className="font-bold text-gray-700">Fecha Estimada de Ingreso</Label>
                        <Input id="dateIn" type="date" required className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOut" className="font-bold text-gray-700">Fecha Estimada de Salida</Label>
                        <Input id="dateOut" type="date" required className="rounded-xl h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="house" className="font-bold text-gray-700">Casa Solicitada</Label>
                      <select id="house" className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                        <option value="">Seleccione una casa...</option>
                        <option value="1">Casa Tlalpan</option>
                        <option value="2">Casa Estado de México</option>
                        <option value="3">Casa Puebla</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 bg-gray-50 border-t border-gray-100 p-6">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="rounded-xl h-12 px-6 border-gray-300">Cancelar</Button>
                  <Button type="submit" disabled={isSubmitting} className="bg-ronald-red hover:bg-red-800 text-white rounded-xl h-12 px-8">
                    {isSubmitting ? "Procesando..." : "Enviar Solicitud"}
                    {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-lg mx-auto text-center space-y-8 py-16">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-ronald-dark">¡Solicitud Enviada!</h2>
              <p className="text-gray-600 mt-4 text-lg">
                La solicitud ha sido registrada en el sistema. La familia recibirá un SMS/WhatsApp con el enlace para completar su registro digital.
              </p>
            </div>
            <Card className="bg-white border-2 border-dashed border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-8">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Folio de seguimiento</p>
                <p className="text-4xl font-numbers font-bold text-ronald-blue tracking-wider">RMHC-8492</p>
              </CardContent>
            </Card>
            <Button onClick={() => setStep(1)} className="w-full h-14 text-lg rounded-xl bg-ronald-dark hover:bg-black text-white">
              Volver al Inicio
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
