import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Home, Utensils, Heart, TrendingUp, Search, Filter, Settings, Bell, X, Phone, Mail, FileText, Edit3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import MediaGallery from "@/components/MediaGallery";
import VideoPlayer from "@/components/VideoPlayer";

const FAMILIES = [
  { id: 1, name: "Familia García", house: "Tlalpan", days: 12, hospital: "Hosp. Infantil", status: "success", phone: "55-1234-5678", email: "garcia@example.com", diagnosis: "Leucemia", room: "102" },
  { id: 2, name: "Familia López", house: "Edomex", days: 4, hospital: "Hosp. Siglo XXI", status: "warning", phone: "55-8765-4321", email: "lopez@example.com", diagnosis: "Cardiopatía", room: "205" },
  { id: 3, name: "Familia Martínez", house: "Puebla", days: 21, hospital: "Hosp. del Niño", status: "danger", phone: "22-1122-3344", email: "martinez@example.com", diagnosis: "Oncología", room: "110" },
  { id: 4, name: "Familia Hernández", house: "Tlalpan", days: 2, hospital: "Inst. Nacional Pediatría", status: "success", phone: "55-9988-7766", email: "hernandez@example.com", diagnosis: "Nefrología", room: "301" },
  { id: 5, name: "Familia Pérez", house: "Edomex", days: 8, hospital: "Hosp. Siglo XXI", status: "success", phone: "55-4433-2211", email: "perez@example.com", diagnosis: "Neurología", room: "108" },
];

const OCCUPANCY_DATA = [
  { name: 'Lun', Tlalpan: 38, Edomex: 25, Puebla: 20 },
  { name: 'Mar', Tlalpan: 39, Edomex: 26, Puebla: 22 },
  { name: 'Mie', Tlalpan: 35, Edomex: 28, Puebla: 24 },
  { name: 'Jue', Tlalpan: 36, Edomex: 29, Puebla: 23 },
  { name: 'Vie', Tlalpan: 40, Edomex: 30, Puebla: 25 },
  { name: 'Sab', Tlalpan: 40, Edomex: 28, Puebla: 24 },
  { name: 'Dom', Tlalpan: 38, Edomex: 27, Puebla: 22 },
];

const HOUSES = [
  { id: "tlalpan", name: "Casa Tlalpan", capacity: 40, occupied: 38, staff: "Ana M., Luis R.", status: "Operativa", address: "Calle Principal 123, Tlalpan", phone: "55-1111-2222" },
  { id: "edomex", name: "Casa Estado de México", capacity: 30, occupied: 25, staff: "Carmen V.", status: "Operativa", address: "Av. Central 456, Toluca", phone: "72-3333-4444" },
  { id: "puebla", name: "Casa Puebla", capacity: 25, occupied: 20, staff: "Roberto G.", status: "Mantenimiento Parcial", address: "Blvd. Héroes 789, Puebla", phone: "22-5555-6666" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "families" | "houses" | "media">("overview");
  const [selectedFamily, setSelectedFamily] = useState<typeof FAMILIES[0] | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<typeof HOUSES[0] | null>(null);
  const [isEditingHouse, setIsEditingHouse] = useState(false);

  return (
    <div className="min-h-screen bg-ronald-dark text-gray-300 flex flex-col font-body relative">
      {/* Sidebar & Header layout */}
      <div className="flex flex-1">
        
        {/* Sidebar */}
        <aside className="w-64 bg-[#111111] border-r border-gray-800 hidden md:flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-ronald-red rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-white text-lg">Admin Panel</span>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
            >
              <TrendingUp className="w-4 h-4" />
              Vista General
            </button>
            <button 
              onClick={() => setActiveTab("families")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "families" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
            >
              <Users className="w-4 h-4" />
              Familias Activas
            </button>
            <button 
              onClick={() => setActiveTab("houses")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "houses" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
            >
              <Home className="w-4 h-4" />
              Gestión de Casas
            </button>
            <button 
              onClick={() => setActiveTab("media")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "media" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
            >
              <Heart className="w-4 h-4" />
              Galería Multimedia
            </button>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <Link to="/" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Salir al Menú
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#1A1A1A]">
          <header className="border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 z-10 bg-[#1A1A1A]/90 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <Link to="/" className="text-gray-400">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
              <h1 className="text-lg font-heading font-bold text-white">
                {activeTab === "overview" && "Vista General"}
                {activeTab === "families" && "Familias Activas"}
                {activeTab === "houses" && "Gestión de Casas"}
                {activeTab === "media" && "Galería Multimedia"}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:border-gray-500 w-64"
                />
              </div>
              <button className="p-1.5 bg-gray-800 border border-gray-700 rounded-md text-gray-400 hover:text-white">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </header>

          <div className="p-6 max-w-7xl mx-auto space-y-6">
            
            {activeTab === "overview" && (
              <>
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/50 border border-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Ocupación Global</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-numbers font-bold text-white">87%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Familias Atendidas</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-numbers font-bold text-white">142</span>
                      <span className="text-xs text-green-500">↑ 12%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Raciones Servidas</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-numbers font-bold text-white">5,250</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Alertas Bienestar</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-numbers font-bold text-ronald-red">3</span>
                      <span className="text-xs text-gray-500">Requieren atención</span>
                    </div>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-[#111111] border border-gray-800 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Ocupación por Casa (7 días)</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={OCCUPANCY_DATA}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                          <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                          <YAxis stroke="#666" axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333' }} />
                          <Line type="monotone" dataKey="Tlalpan" stroke="#C8102E" strokeWidth={2} dot={false} />
                          <Line type="monotone" dataKey="Edomex" stroke="#007A87" strokeWidth={2} dot={false} />
                          <Line type="monotone" dataKey="Puebla" stroke="#FFC72C" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-[#111111] border border-gray-800 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Actividad Reciente</h3>
                    <div className="space-y-4">
                      {[
                        { time: 'Hace 5 min', action: 'Nueva solicitud de ingreso', detail: 'Hospital Infantil de México -> Casa Tlalpan', type: 'info' },
                        { time: 'Hace 12 min', action: 'Check-in completado', detail: 'Familia Martínez (Hab. 104, Casa Edomex)', type: 'success' },
                        { time: 'Hace 45 min', action: 'Alerta de ocupación', detail: 'Casa Tlalpan al 95% de capacidad', type: 'warning' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                          <div className={`mt-1 w-2 h-2 rounded-full ${
                            item.type === 'info' ? 'bg-blue-500' : 
                            item.type === 'success' ? 'bg-green-500' : 'bg-ronald-yellow'
                          }`} />
                          <div>
                            <p className="font-medium text-gray-200 text-sm">{item.action}</p>
                            <p className="text-xs text-gray-500">{item.detail}</p>
                          </div>
                          <span className="ml-auto text-xs text-gray-600">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "families" && (
              <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="font-medium text-white">Directorio de Familias</h2>
                  <button className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-md transition-colors">
                    Exportar Reporte
                  </button>
                </div>
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-800/50 border-b border-gray-800">
                    <tr>
                      <th className="px-6 py-3 font-medium">Familia</th>
                      <th className="px-6 py-3 font-medium">Casa</th>
                      <th className="px-6 py-3 font-medium">Estancia</th>
                      <th className="px-6 py-3 font-medium">Hospital</th>
                      <th className="px-6 py-3 font-medium text-center">Bienestar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {FAMILIES.map((family) => (
                      <tr key={family.id} onClick={() => setSelectedFamily(family)} className="hover:bg-gray-800/30 transition-colors group cursor-pointer">
                        <td className="px-6 py-4 font-medium text-gray-200">{family.name}</td>
                        <td className="px-6 py-4 text-gray-400">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                            {family.house}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{family.days} días</td>
                        <td className="px-6 py-4 text-gray-400">{family.hospital}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <div className={`w-3 h-3 rounded-full ${
                              family.status === 'success' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' :
                              family.status === 'warning' ? 'bg-ronald-yellow shadow-[0_0_8px_rgba(255,199,44,0.4)]' :
                              'bg-ronald-red shadow-[0_0_8px_rgba(200,16,46,0.4)] animate-pulse'
                            }`} title={
                              family.status === 'success' ? 'Sin alerta' :
                              family.status === 'warning' ? 'Monitorear' :
                              'Alerta: Requiere apoyo'
                            }></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "houses" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HOUSES.map((house) => (
                  <div key={house.id} className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-heading font-bold text-lg text-white">{house.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${house.status === 'Operativa' ? 'bg-green-500/10 text-green-500' : 'bg-ronald-yellow/10 text-ronald-yellow'}`}>
                          {house.status}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Ocupación</span>
                            <span className="text-white font-medium">{house.occupied} / {house.capacity}</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-1.5">
                            <div className="bg-ronald-teal h-1.5 rounded-full" style={{ width: `${(house.occupied / house.capacity) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Staff en turno</p>
                          <p className="text-sm text-gray-300">{house.staff}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/30 flex gap-2 mt-auto">
                      <button onClick={() => { setSelectedHouse(house); setIsEditingHouse(true); }} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 rounded-md transition-colors">
                        Editar Info CMS
                      </button>
                      <button onClick={() => { setSelectedHouse(house); setIsEditingHouse(false); }} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 rounded-md transition-colors">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Family Details Modal */}
      {selectedFamily && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#111111]">
              <h3 className="font-heading font-bold text-white text-lg">Detalles de Familia</h3>
              <button onClick={() => setSelectedFamily(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold text-white">{selectedFamily.name}</h4>
                  <p className="text-gray-400">Habitación {selectedFamily.room} • Casa {selectedFamily.house}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedFamily.status === 'success' ? 'bg-green-500/20 text-green-400' :
                  selectedFamily.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {selectedFamily.status === 'success' ? 'Bienestar: Estable' :
                   selectedFamily.status === 'warning' ? 'Bienestar: Monitorear' :
                   'Bienestar: Alerta'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase">Hospital</p>
                  <p className="text-sm text-gray-200 font-medium">{selectedFamily.hospital}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase">Diagnóstico</p>
                  <p className="text-sm text-gray-200 font-medium">{selectedFamily.diagnosis}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase">Días de Estancia</p>
                  <p className="text-sm text-gray-200 font-medium">{selectedFamily.days} días</p>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-400">Contacto</h5>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-gray-500" /> {selectedFamily.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-gray-500" /> {selectedFamily.email}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-800">
                <button className="flex-1 bg-ronald-red hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Contactar
                </button>
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Ver Historial
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* House Details/Edit Modal */}
      {selectedHouse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#111111]">
              <h3 className="font-heading font-bold text-white text-lg">
                {isEditingHouse ? 'Editar Información CMS' : 'Detalles de Casa'}
              </h3>
              <button onClick={() => setSelectedHouse(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {isEditingHouse ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase mb-1">Nombre de la Casa</label>
                    <input type="text" defaultValue={selectedHouse.name} className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase mb-1">Dirección</label>
                    <input type="text" defaultValue={selectedHouse.address} className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase mb-1">Teléfono</label>
                    <input type="text" defaultValue={selectedHouse.phone} className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase mb-1">Estado</label>
                    <select className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500">
                      <option>Operativa</option>
                      <option>Mantenimiento Parcial</option>
                      <option>Cerrada</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                    <button onClick={() => setSelectedHouse(null)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm transition-colors">Cancelar</button>
                    <button onClick={() => setSelectedHouse(null)} className="px-4 py-2 bg-ronald-red hover:bg-red-700 text-white rounded-md text-sm transition-colors">Guardar Cambios</button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{selectedHouse.name}</h4>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${selectedHouse.status === 'Operativa' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {selectedHouse.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <Home className="w-4 h-4 text-gray-500 mt-0.5" /> 
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Dirección</p>
                        <p>{selectedHouse.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <Phone className="w-4 h-4 text-gray-500 mt-0.5" /> 
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Teléfono</p>
                        <p>{selectedHouse.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-gray-500 mt-0.5" /> 
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Staff Actual</p>
                        <p>{selectedHouse.staff}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-800">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Ocupación Actual</span>
                      <span className="text-white font-bold">{selectedHouse.occupied} / {selectedHouse.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-ronald-teal h-2 rounded-full" style={{ width: `${(selectedHouse.occupied / selectedHouse.capacity) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

            {activeTab === "media" && (
              <div className="p-6 space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Galería Multimedia</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ronald-red mb-4">Imágenes de Ejercicios</h3>
                      <MediaGallery category="exercises" />
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ronald-red mb-4">Videos de Ejercicios</h3>
                      <VideoPlayer category="exercises" />
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ronald-red mb-4">Videos de Onboarding</h3>
                      <VideoPlayer category="onboarding" />
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-ronald-red mb-4">Imágenes Generales</h3>
                      <MediaGallery category="hospitals" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
