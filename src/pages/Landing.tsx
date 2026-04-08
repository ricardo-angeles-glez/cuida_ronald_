import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Smartphone, LayoutDashboard, Heart, LogIn, ArrowRight } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated authentication delay
    setTimeout(() => {
      setIsLoading(false);
      const lowerEmail = email.toLowerCase();
      
      // Role-based redirection logic based on email keywords
      if (lowerEmail.includes("admin") || lowerEmail.includes("staff")) {
        navigate("/admin");
      } else if (lowerEmail.includes("hospital") || lowerEmail.includes("social")) {
        navigate("/hospital");
      } else if (lowerEmail.includes("donante") || lowerEmail.includes("donor")) {
        navigate("/donor");
      } else {
        // Default to family app for any other email (or if empty)
        navigate("/family");
      }
    }, 800);
  };

  const quickLogin = (path: string, demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("demo123");
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-ronald-gray flex flex-col items-center justify-center p-4 font-body">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Branding & Info */}
        <div className="space-y-6 text-center md:text-left">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ronald_McDonald_House_Charities_logo.svg/1200px-Ronald_McDonald_House_Charities_logo.svg.png" 
            alt="RMHC Logo" 
            className="h-20 mx-auto md:mx-0 object-contain" 
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ronald-dark tracking-tight">
            Bienvenido a <br/><span className="text-ronald-red">CuidaRonald</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            La plataforma integral que conecta hospitales, familias y donantes para hacer más ligera la carga.
          </p>
        </div>

        {/* Right Column: Login Form & Demo Access */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-white pb-4 border-b border-gray-100">
              <CardTitle className="font-heading text-2xl text-center">Iniciar Sesión</CardTitle>
              <CardDescription className="text-center text-sm">
                Ingresa tus credenciales para acceder a tu portal
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 text-lg bg-ronald-red hover:bg-red-800 text-white rounded-xl mt-2"
                >
                  {isLoading ? "Verificando..." : (
                    <>Ingresar <LogIn className="w-5 h-5 ml-2" /></>
                  )}
                </Button>
              </form>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500 font-medium">Accesos Rápidos (Demo)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col gap-1 border-gray-200 hover:border-ronald-red hover:bg-red-50 rounded-xl"
                  onClick={() => quickLogin("/hospital", "social@hospital.com")}
                  type="button"
                >
                  <Building2 className="w-5 h-5 text-ronald-red" />
                  <span className="text-xs font-medium">Hospital</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col gap-1 border-gray-200 hover:border-ronald-teal hover:bg-teal-50 rounded-xl"
                  onClick={() => quickLogin("/family", "familia@gmail.com")}
                  type="button"
                >
                  <Smartphone className="w-5 h-5 text-ronald-teal" />
                  <span className="text-xs font-medium">Familia</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col gap-1 border-gray-200 hover:border-ronald-blue hover:bg-blue-50 rounded-xl"
                  onClick={() => quickLogin("/admin", "admin@casaronald.org")}
                  type="button"
                >
                  <LayoutDashboard className="w-5 h-5 text-ronald-blue" />
                  <span className="text-xs font-medium">Staff / Admin</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col gap-1 border-gray-200 hover:border-ronald-yellow hover:bg-yellow-50 rounded-xl"
                  onClick={() => quickLogin("/donor", "donante@empresa.com")}
                  type="button"
                >
                  <Heart className="w-5 h-5 text-ronald-yellow" />
                  <span className="text-xs font-medium">Donante</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
