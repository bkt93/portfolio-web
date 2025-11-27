# Portfolio Web

Un portfolio moderno desarrollado con React, TypeScript y Tailwind CSS v3, con un diseño oscuro en tonalidades violetas y un efecto interactivo de fondo que responde al movimiento del mouse.

## 🚀 Características

- ⚡ **React + TypeScript**: Desarrollo moderno y tipado
- 🎨 **Tailwind CSS v3**: Estilos con la última versión
- 🌙 **Modo Oscuro**: Diseño oscuro con tonalidades violetas
- 🎯 **Fondo Interactivo**: Efecto de partículas que responden al mouse (similar a antigravity.google)
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ✨ **Animaciones**: Transiciones suaves con Framer Motion

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 📦 Build

Para crear una versión de producción:

```bash
npm run build
```

## 🎨 Personalización

### Colores

Los colores violetas están configurados en `tailwind.config.js`. Puedes modificar la paleta de colores en la sección `colors`.

### Contenido

Edita los componentes en `src/components/` para personalizar:
- Información personal (Hero.tsx)
- Sobre mí (About.tsx)
- Proyectos (Projects.tsx)
- Información de contacto (Contact.tsx)

### Efecto de Fondo

El efecto interactivo se puede ajustar en `src/components/InteractiveBackground.tsx`:
- Número de partículas: `particleCount`
- Velocidad y comportamiento de las partículas
- Colores y opacidad

## 📝 Licencia

MIT

