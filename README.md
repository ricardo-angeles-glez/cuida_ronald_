<div align="center">
<h1>🏥 CuidaRonald v3</h1>
<p>Plataforma integral que conecta hospitales, familias y donantes para hacer más ligera la carga</p>
</div>

## 🎯 Descripción

CuidaRonald es una aplicación web moderna diseñada para facilitar el acceso y gestión de recursos para familias en tratamiento, hospitales, donantes y personal administrativo. La plataforma integra multimedia educativa, ejercicios recomendados, y herramientas de coordinación.

## ✨ Características

- **Portal de Familias**: Acceso a guías, ejercicios, videos tutoriales y recursos personalizados
- **Portal de Hospitales**: Gestión de familias activas y coordinación de estancias
- **Panel Administrativo**: Dashboard con estadísticas, gestión de casas y galería multimedia
- **Portal de Donantes**: Información sobre donaciones y impacto
- **Galería Multimedia**: Imágenes y videos organizados por categorías
- **Responsive Design**: Funciona perfectamente en móviles, tablets y desktop

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Gráficos**: Recharts
- **Animaciones**: Motion
- **Icons**: Lucide React

## 📦 Instalación

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cuidaronald.git
   cd cuidaronald
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` con tus valores de Gemini API Key si es necesario

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:3000`

## 🚀 Scripts disponibles

- `npm run dev` - Inicia servidor de desarrollo (puerto 3000)
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Preview de la build de producción
- `npm run lint` - Valida tipos con TypeScript

## 📁 Estructura del Proyecto

```
src/
├── pages/              # Páginas principales del app
│   ├── Landing.tsx
│   ├── FamilyApp.tsx
│   ├── HospitalPortal.tsx
│   ├── AdminDashboard.tsx
│   └── DonorPortal.tsx
├── components/         # Componentes reutilizables
│   ├── ui/             # Componentes UI base
│   ├── MediaGallery.tsx
│   └── VideoPlayer.tsx
├── lib/                # Utilidades
├── App.tsx
├── main.tsx
└── index.css
public/
└── media/              # Archivos multimedia (imágenes y videos)
    ├── images/
    │   ├── donations/
    │   ├── exercises/
    │   ├── families/
    │   ├── guides/
    │   ├── heroes/
    │   ├── hospitals/
    │   ├── houses/
    │   └── ui/
    └── videos/
        ├── exercises/
        ├── onboarding/
        └── tutorials/
```

## 🎬 Multimedia

La aplicación incluye galerías de imágenes y reproductores de video en:
- **FamilyApp**: Galería de ejercicios, guías y videos tutoriales
- **AdminDashboard**: Panel de gestión de multimedia

### Categorías de Media disponibles:

**Imágenes:**
- Donaciones
- Ejercicios
- Familias
- Guías
- Héroes
- Hospitales
- Casas
- UI

**Videos:**
- Ejercicios
- Onboarding
- Tutoriales

## 👥 Usuarios Demo

Para probar diferentes perfiles:

- **Admin** - Correo: `admin@test.com` - Acceso: `/admin`
- **Hospital** - Correo: `hospital@test.com` - Acceso: `/hospital`
- **Familia** - Correo: `familia@test.com` - Acceso: `/family`
- **Donante** - Correo: `donante@test.com` - Acceso: `/donor`

Contraseña demo: `demo123`

## 🌐 Despliegue en Vercel

1. Push tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en "New Project"
4. Selecciona tu repositorio de GitHub
5. Vercel autodetectará que es un proyecto Vite
6. Haz clic en "Deploy"

Vercel desplegará automáticamente los cambios cada vez que hagas push a main.

## 📄 Licencia

Este proyecto está bajo licencia Apache 2.0. Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

<div align="center">
Hecho con ❤️ para las familias de <a href="https://www.rmhc.org">Ronald McDonald House Charities</a>
</div>
