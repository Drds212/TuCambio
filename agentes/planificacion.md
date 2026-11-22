# TuCambio - Planificación del Proyecto

Aplicación móvil para Android desarrollada con **React Native** y **Expo** para consultar la tasa de cambio del dólar a bolívares (USD/VES) en tiempo real utilizando la API pública de **DolarApi**.

---

## 1. Visión y Propósito
El objetivo de **TuCambio** es ofrecer a los usuarios en Venezuela una herramienta rápida, ligera, moderna y confiable para consultar la tasa de cambio del dólar (Oficial BCV y Paralelo), calcular conversiones inmediatas y poder acceder a la última cotización incluso sin conexión a internet.

---

## 2. Definición del MVP (Producto Mínimo Viable)

Para mantener el proyecto enfocado y avanzar paso a paso, el MVP se dividirá en las siguientes funciones esenciales:

### A. Pantalla Principal de Cotizaciones
- **Tarjetas de Cotización**:
  - **Dólar Oficial (BCV)**: valor promedio y fecha de última actualización reportada por el BCV.
  - **Dólar Paralelo**: valor promedio y fecha de última actualización del mercado paralelo.
  - Diferencial porcentual o brecha entre ambas tasas (opcional pero muy útil para el usuario).
- **Acciones y Estados**:
  - *Pull-to-refresh* (deslizar hacia abajo para refrescar las tasas al instante).
  - Estado de carga (*loading spinner/skeleton*).
  - Estado de error amigable con botón de reintentar si no hay conexión o falla el servicio.

### B. Modo Offline y Caché Local
- Almacenamiento local (usando `@react-native-async-storage/async-storage`):
  - Guarda la última cotización obtenida con éxito.
  - Si el usuario abre la app sin internet, muestra la última tasa guardada con un indicador claro (*"Modo sin conexión - Cotización del [Fecha/Hora]"*).

### C. Calculadora / Conversor Rápido
- Entrada numérica intuitiva con selector bidireccional:
  - Dólares (USD) a Bolívares (VES).
  - Bolívares (VES) a Dólares (USD).
- Selector rápido de tasa para el cálculo: Oficial (BCV) o Paralelo.

### D. Compartir Tasa (Utilidad Adicional)
- Botón rápido para copiar al portapapeles o compartir la cotización formateada por WhatsApp u otras apps.

---

## 3. Fuente de Datos (API)

- **Proveedor**: [DolarApi Venezuela](https://dolarapi.com/docs/venezuela/)
- **Base URL**: `https://ve.dolarapi.com`
- **Endpoints clave**:
  - `GET /v1/dolares`: Retorna el listado completo de tasas de dólares (oficial y paralelo).
  - `GET /v1/dolares/oficial`: Tasa oficial BCV.
  - `GET /v1/dolares/paralelo`: Tasa mercado paralelo.
- **Formato de Respuesta**:
  ```json
  [
    {
      "fuente": "oficial",
      "nombre": "Oficial",
      "compra": 0,
      "venta": 0,
      "promedio": 48.15,
      "fechaActualizacion": "2026-04-10T14:00:00.000Z"
    },
    {
      "fuente": "paralelo",
      "nombre": "Paralelo",
      "compra": 0,
      "venta": 0,
      "promedio": 58.20,
      "fechaActualizacion": "2026-04-10T13:45:00.000Z"
    }
  ]
  ```
- **Ventajas**: Pública, gratuita, no requiere API key y soporte de CORS.

---

## 4. Arquitectura Técnica Propuesta

```text
TuCambio/
├── src/
│   ├── app/
│   │   ├── _layout.tsx           # Configuración del layout y navegación principal
│   │   ├── index.tsx             # Pantalla principal (tasas + calculadora)
│   │   └── settings.tsx          # Opciones (opcional: preferencias, tema)
│   ├── components/
│   │   ├── RateCard.tsx          # Tarjeta visual para cada tasa (BCV, Paralelo)
│   │   ├── CurrencyConverter.tsx # Módulo de conversión rápida
│   │   ├── LastUpdatedBadge.tsx  # Etiqueta con fecha/hora de actualización
│   │   └── ErrorState.tsx        # Vista de fallo con botón de reintento
│   ├── services/
│   │   └── dolarApi.ts           # Llamadas HTTP a ve.dolarapi.com
│   ├── storage/
│   │   └── cacheStorage.ts       # Lectura/escritura de tasas en AsyncStorage
│   ├── hooks/
│   │   └── useDolarRates.ts      # Hook que orquesta fetch, caché, estados de carga y refresco
│   ├── types/
│   │   └── dolar.ts              # Modelos TypeScript de datos
│   └── constants/
│       └── theme.ts              # Paleta de colores, tipografía y espaciado
├── agentes/
│   └── planificacion.md          # Este documento de planificación y seguimiento
└── package.json
```

---

## 5. Ruta de Trabajo y Ejecución

*Nota: La ruta de trabajo, prioridades y orden de ejecución son definidos directamente por el usuario paso a paso.*

- [x] **Paso 1 (Usuario)**: Configuración del repositorio y README.
  - Actualizado [README.md](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/README.md) con la descripción completa de TuCambio, stack y características.
  - Rama renombrada a `main` y cambios confirmados en git local.
  - Vinculado y subido con éxito al repositorio remoto en GitHub: [https://github.com/Drds212/TuCambio](https://github.com/Drds212/TuCambio).
- [x] **Paso 2 (Usuario)**: Limpieza del template inicial de Expo.
  - Eliminados componentes de demostración (`src/components/`, `src/constants/`, `src/hooks/`, `src/global.css`).
  - Eliminada pantalla demo `src/app/explore.tsx` y script de reseteo `scripts/reset-project.js`.
  - Eliminados assets e imágenes no utilizados del template en `assets/images/` preservando iconos y splash oficial.
  - Configurado layout minimalista en [`src/app/_layout.tsx`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/app/_layout.tsx) con `<Stack>` y `<StatusBar>`.
  - Configurada pantalla base limpia en [`src/app/index.tsx`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/app/index.tsx).
  - Verificación de TypeScript exitosa (`tsc --noEmit` sin errores).
- [x] **Paso 3 (Usuario)**: Configuración e implementación de la paleta Dark desde el inicio.
  - Creado módulo centralizado de tokens de color en [`src/constants/colors.ts`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/constants/colors.ts) (fondo oscuro `#0B0F19`, superficies `#151D2F`/`#162035`, acentos verde esmeralda `#10B981`, azul oficial BCV `#38BDF8` y dorado paralelo `#FBBF24`).
  - Actualizado layout en [`src/app/_layout.tsx`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/app/_layout.tsx) con `<StatusBar style="light" />` y fondo oscuro en `contentStyle`.
  - Diseñada la cabecera e interfaz base en [`src/app/index.tsx`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/app/index.tsx) con soporte para `SafeAreaView`.
  - Verificación de TypeScript exitosa (`tsc --noEmit` sin errores).
- [x] **Paso 4 (Usuario)**: Rediseño a Módulo Principal (Hero Card) con selector interactivo.
  - Se sustituyeron las dos tarjetas separadas por un **módulo principal único** con mayor jerarquía visual y protagonismo de la tasa.
  - Implementado selector tipo *segmented control* interactivo para alternar dinámicamente entre **BCV Oficial** (azul `#38BDF8`) y **Paralelo** (dorado `#FBBF24`).
  - Ajustada la posición del selector debajo de la tarjeta principal para un flujo visual más ergonómico.
  - Conservados los textos de referencia personalizados por el usuario ("Promedio paralelo").
  - Verificación de TypeScript exitosa (`tsc --noEmit` sin errores).
- [x] **Paso 5 (Usuario)**: Arquitectura y separación de responsabilidades para DolarApi.
  - **Tipos TypeScript**: Creado [`src/types/dolar.ts`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/types/dolar.ts) con las interfaces `DolarRateResponse`, `DolarRatesMap` y `RateCategory`.
  - **Servicio API puro**: Creado [`src/services/dolarApi.ts`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/services/dolarApi.ts) aislado de la interfaz, con manejo de timeout (`AbortController`), control de errores HTTP y mapeo normalizado.
  - **Hook personalizado**: Creado [`src/hooks/useDolarRates.ts`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/hooks/useDolarRates.ts) para encapsular estados de carga (`isLoading`, `isRefreshing`), errores y función de refresco.
  - **Integración en UI**: Conectado el hook en [`src/app/index.tsx`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/src/app/index.tsx) con soporte para pull-to-refresh (`RefreshControl`), formateo numérico local en bolívares y fechas legibles.
  - Verificación de TypeScript exitosa (`tsc --noEmit` sin errores).
- [x] **Paso 6 (Usuario)**: Configuración para exportación e instalación de APK Android (.apk).
  - Configurado identificador de paquete único Android en [`app.json`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/app.json): `"package": "com.drds212.tucambio"`.
  - Creado archivo [`eas.json`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/eas.json) con perfil `preview`.
- [x] **Paso 7 (Usuario)**: Compilación automatizada en la nube sin requerir cuenta de Expo (GitHub Actions).
  - Creado flujo en [`.github/workflows/build-android.yml`](file:///c:/Users/Usuario/Documents/docs/dev/proyectos-con-js/app-tasa-de-cambio/TuCambio/.github/workflows/build-android.yml) para ejecutar `npx expo prebuild` y compilar el `.apk` nativo mediante Gradle en las máquinas virtuales gratuitas de GitHub (Ubuntu con JDK 17 y Android SDK preinstalados).
  - El APK resultante queda disponible para descarga directa en la pestaña **Actions** del repositorio de GitHub sin registros ni herramientas locales.
- [ ] **Siguiente paso**: *(Pendiente de confirmación de descarga y prueba del APK por el usuario)*



