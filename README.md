# TuCambio 💵🇻🇪

**TuCambio** es una aplicación móvil moderna, rápida y ligera desarrollada con **React Native** y **Expo** para la consulta de la tasa de cambio del dólar a bolívares (USD/VES) en Venezuela.

La aplicación consume datos en tiempo real de la API pública de [DolarApi](https://dolarapi.com/docs/venezuela/), proporcionando las cotizaciones más consultadas en el país de forma clara y accesible.

---

## 🚀 Características Principales

- **📊 Cotizaciones en Tiempo Real**:
  - **Dólar Oficial (BCV)**: Valor promedio y fecha de actualización oficial.
  - **Dólar Paralelo**: Cotización promedio del mercado no oficial.
- **🔄 Actualización Rápida**: Soporte para *pull-to-refresh* para refrescar las tasas en cualquier momento.
- **📴 Modo Offline (Caché Local)**: Si no tienes conexión a internet, la aplicación muestra la última cotización registrada con su respectiva marca de tiempo.
- **🧮 Calculadora / Conversor Integrado**: Convierte rápidamente montos de Dólares (USD) a Bolívares (VES) y viceversa utilizando la tasa oficial o paralela.
- **⚡ Rendimiento y Fluidez**: Optimizada para dispositivos Android con tiempos de carga mínimos e interfaz limpia.

---

## 🛠️ Stack Tecnológico

- **Framework**: [React Native](https://reactnative.dev/) (v0.88+)
- **Plataforma y Tooling**: [Expo SDK 58](https://expo.dev/)
- **Enrutamiento**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Almacenamiento Local**: AsyncStorage
- **Fuente de Datos**: [DolarApi Venezuela](https://ve.dolarapi.com/v1/dolares)

---

## 📦 Instalación y Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/drds212/TuCambio.git
   cd TuCambio
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npx expo start
   ```

4. **Ejecutar en Android**:
   - Presiona `a` en la terminal para abrir en un emulador Android o dispositivo conectado con depuración USB habilitada.
   - O escanea el código QR desde la aplicación **Expo Go**.

---

## 📋 Planificación del Proyecto

La documentación y seguimiento del desarrollo se encuentra en la carpeta [`agentes/`](./agentes/):
- [`agentes/planificacion.md`](./agentes/planificacion.md): Planificación del MVP, arquitectura técnica y requerimientos.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
