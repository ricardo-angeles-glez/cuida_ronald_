# Media Assets - Cuida Ronald

Este directorio contiene los archivos multimedia (imágenes y videos) utilizados en la plataforma.

## Estructura de Carpetas

```
media/
├── images/
│   ├── heroes/          # Imágenes hero para landing pages
│   ├── houses/         # Fotos de las casas Ronald
│   ├── hospitals/      # Hospitales aliados
│   ├── families/       # Fotos de familias (con permisos)
│   ├── donations/      # Imágenes de donaciones/gracias
│   ├── exercises/       # Imágenes para ejercicios de respiración
│   ├── guides/          # Imágenes para guías del sitio
│   └── ui/              # Elementos UI, placeholders, icons custom
└── videos/
    ├── exercises/       # Videos de ejercicios de respiración
    ├── tutorials/        # Tutoriales para usuarios
    └── onboarding/      # Videos de introducción/onboarding
```

---

## Guía de Imágenes: Coloca tus archivos aquí

### 📍 Página Principal (Landing) - `app/page.tsx`

|Placeholder|Label sugerida|Archivo a crear|Ubicación|
|-----------|--------------|---------------|---------|
|Hero Section|Familia llegando a Casa Ronald|`hero-familia-llegando.webp`|`media/images/heroes/`|
|Módulo Guía Ronald|Familia llegando a Casa|`card-guia-ronald.webp`|`media/images/guides/`|
|Módulo Respira|Escena de calma/meditación|`card-respira-meditacion.webp`|`media/images/exercises/`|
|Módulo Impacto|Imagen de impacto real|`card-impacto-donacion.webp`|`media/images/donations/`|
|Casa CDMX Tlalpan|Casa Ronald Tlalpan|`card-casa-tlalpan.webp`|`media/images/houses/`|
|Casa Tlalnepantla|Casa Ronald Tlalnepantla|`card-casa-tlalnepantla.webp`|`media/images/houses/`|
|Casa Puebla|Casa Ronald Puebla|`card-casa-puebla.webp`|`media/images/houses/`|

### 📍 Donar - `(public)/donate/page.tsx`

|Placeholder|Label sugerida|Archivo a crear|Ubicación|
|-----------|--------------|---------------|---------|
|Hero Donar|Ilustración: Manos sosteniendo una casa|`hero-donar-manos.webp`|`media/images/heroes/`|

### 📍 Catálogo Donante - `(donor)/donor/catalog/page.tsx`

|Placeholder|Label sugerida|Archivo a crear|Ubicación|
|-----------|--------------|---------------|---------|
|Hero Catálogo|Ilustración: Manos sosteniendo una casa|`hero-catalogo.webp`|`media/images/heroes/`|

### 📍 Onboarding Familia - `(family)/family/onboarding/[step]/page.tsx`

|Placeholder|Label sugerida|Archivo a crear|Ubicación|
|-----------|--------------|---------------|---------|
|Onboarding Paso|Ilustración de llegada|`onboarding-bienvenida.webp`|`media/images/guides/`|

### 📍 Superadmin Casas - `(superadmin)/superadmin/casas/page.tsx`

|Placeholder|Label sugerida|Archivo a crear|Ubicación|
|-----------|--------------|---------------|---------|
|Mapa Casa|Mapa visual de la casa|`mapa-casa-svg.svg` o `mapa-casa.png`|`media/images/houses/`|

### 📍 Mapa Interactivo de Casa Ronald - `casas/[slug]/page.tsx`

El mapa de la Casa Ronald ahora es un **componente React interactivo**:

|Archivo|Descripción|Ubicación|
|-------|-----------|---------|
|`HouseMap.tsx`|Componente principal del mapa con 4 zonas, selector de niveles, filtros por zona y panel de detalle|`apps/web/components/map/`|
|`page.tsx`|Página completa con header, info cards y mapa|`apps/web/app/casas/tlalpan/page.tsx`|

**Zonas implementadas:**
- **Zona Privada** (rojo): 40 Habitaciones familiares (Nivel 1)
- **Zona Social** (amarillo): Cocina, Comedor, Sala de Estar (Planta Baja)
- **Zona de Soporte** (teal): Ludoteca, Cómputo/SEP, Talleres
- **Zona de Servicio** (azul): Recepción, Trabajo Social, Lavandería, Transporte

**Espacios incluidos:**
| ID | Espacio | Zona | Nivel |
|----|---------|------|-------|
| PB-01 | Recepción | Servicio | PB |
| PB-02 | Cocina (30-40 alacenas) | Social | PB |
| PB-03 | Comedor comunitario | Social | PB |
| PB-04 | Sala de Estar | Social | PB |
| PB-05 | Ludoteca | Soporte | PB |
| PB-06 | Trabajo Social | Servicio | PB |
| P1-01 | Habitaciones (40 privadas) | Privado | 1 |
| P1-02 | Lavandería | Servicio | 1 |
| P4-01 | Cómputo / SEP | Soporte | 4 |
| P4-02 | Talleres | Soporte | 4 |
| EXT-01 | Transporte a hospitales | Servicio | - |

---

## Especificaciones Técnicas

### Imágenes

| Tipo | Tamaño recomendado | Formato | Peso máx |
|------|-------------------|---------|----------|
| Hero | 1920x1080 | WEBP | 200KB |
| Card | 800x600 | WEBP | 80KB |
| Square | 600x600 | WEBP | 60KB |
| Background | 1920x1080 | WEBP | 150KB |

### Videos

| Tipo | Duración | Formato | Peso máx |
|------|----------|---------|----------|
| Ejercicios | 30-120s | MP4/WebM | 10MB |
| Tutoriales | 60-180s | MP4/WebM | 25MB |
| Onboarding | 30-60s | MP4/WebM | 8MB |

---

## Nombre de Archivos Sugeridos

```
# Formato: [tipo]-[descripcion]-[variante].[ext]

# Heroes
hero-familia-llegando.webp
hero-donar-manos.webp
hero-catalogo.webp
hero-onboarding-bienvenida.webp

# Houses/Casas
card-casa-tlalpan.webp
card-casa-tlalnepantla.webp
card-casa-puebla.webp
mapa-casa-tlalpan.svg

# Exercises/Respira
card-respira-meditacion.webp
card-respira-box-breathing.webp
card-respira-coherencia.webp

# Donations/Impacto
card-impacto-donacion.webp
hero-impacto-transparencia.webp

# Guides
card-guia-ronald.webp
card-guia-checklist.webp
card-guia-directorio.webp
```

---

## Notas para Offline (PWA)

- Las imágenes en `images/ui/` y `images/heroes/` son esenciales y se cachean primero
- Videos de exercises deben optimizarse para streaming offline
- Considerar formatos WebP/AVIF para reducir tamaño

## Próximos Pasos

1. Agregar imágenes a las carpetas correspondientes
2. Actualizar el componente `PlaceholderImage` para cargar las imágenes reales
3. Configurar Next.js Image optimization si es necesario