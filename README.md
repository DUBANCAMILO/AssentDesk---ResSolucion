# AssetDesk — Sistema de Gestión de Activos TI

## Descripción General

AssetDesk es una plataforma web de gestión de inventario de activos tecnológicos diseñada para equipos de TI. Permite registrar, rastrear, dar de baja y auditar equipos de cómputo con soporte para escaneo QR, sincronización en tiempo real de técnicos, importación masiva desde Excel y generación de reportes en PDF.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v3 |
| Backend | Supabase (PostgreSQL + Realtime) |
| QR Generation | qrcode.react v4 |
| QR Decoding | jsQR v1.4 |
| Excel Import/Export | SheetJS (xlsx) v0.18 |
| PDF Export | jsPDF v4 |
| Gráficas | Recharts |
| Iconos | Lucide React |

---

## Instalación y Configuración

### 1. Variables de Entorno

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Aplicar Migraciones de Base de Datos

En el panel de Supabase → SQL Editor, ejecuta los archivos en orden:
1. `supabase/migrations/20260717021314_assetdesk_schema_v2.sql`
2. `supabase/migrations/20260717030000_fix_assets_status_column.sql`

### 4. Iniciar el Servidor

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:4028`

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                    # Dashboard principal
│   ├── tecnico/page.tsx            # Vista técnico de campo (QR + Realtime)
│   ├── bajas/page.tsx              # Gestión de bajas
│   ├── notificaciones/page.tsx     # Centro de notificaciones
│   ├── configuracion/page.tsx      # Configuración del sistema
│   ├── ip-management/page.tsx      # Gestión de IPs
│   ├── ticket-management-console/  # Consola de tickets
│   └── components/
│       ├── AssetRegistrationModal.tsx   # Registro de equipos
│       ├── AssetTableSection.tsx        # Tabla de inventario
│       ├── QRTechSheet.tsx              # Ficha técnica + QR + PDF
│       ├── BajaModal.tsx                # Modal de baja de activos
│       └── ExcelImportModal.tsx         # Importación masiva Excel/CSV
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Cliente Supabase (browser)
│   │   └── server.ts               # Cliente Supabase (server)
│   └── services/
│       └── assetService.ts         # Servicio CRUD de activos
└── components/
    ├── AppLayout.tsx               # Layout principal
    ├── Sidebar.tsx                 # Navegación lateral
    └── Topbar.tsx                  # Barra superior
```

---

## Módulos Principales

### 📦 Inventario (Dashboard)
- Tabla completa de activos con filtros por estado, área y sede
- Métricas en tiempo real (total, operativos, críticos, mantenimiento)
- Registro de nuevos equipos con foto, GPU, software, garantía
- Botón de baja con modal de confirmación

### 📱 Vista Técnico de Campo (`/tecnico`)
- **Escáner QR automático** con jsQR — decodifica sin intervención manual
- Sincronización en vivo de técnicos vía Supabase Realtime
- Búsqueda manual por placa de inventario
- Tarjeta de detalle completa con QR generado (qrcode.react)
- Lista de equipos prioritarios (críticos/mantenimiento)

### 🖨️ Ficha Técnica y Tickets
- **Ticket 12×30mm** — imprime en una sola hoja con `@page { size: 30mm 12mm }`
- **Ficha técnica completa** — impresión A4 con todas las especificaciones
- **Exportar PDF** — genera PDF descargable con jsPDF
- QR real generado con qrcode.react en la ficha

### 📊 Importación Masiva
- Soporte nativo para **Excel (.xlsx/.xls)** con SheetJS
- Soporte para **CSV** como alternativa
- Descarga de plantilla Excel con datos de ejemplo
- Vista previa con validación antes de importar
- Filtro por área antes de importar

### 🔔 Notificaciones
- Suscripción Realtime a cambios en activos
- Contador de no leídas en sidebar
- Marcar como leída / marcar todas

### ⚙️ Configuración
- Parámetros de organización, red, notificaciones e inventario
- Guardado individual por parámetro en Supabase

---

## Esquema de Base de Datos

### Tablas Principales

| Tabla | Descripción |
|-------|-------------|
| `assets` | Inventario completo de activos TI |
| `asset_history` | Historial de cambios por activo |
| `bajas` | Registro de activos dados de baja |
| `technicians` | Técnicos de campo (Realtime) |
| `notifications` | Notificaciones del sistema |
| `ip_addresses` | Pool de direcciones IP |
| `app_settings` | Configuración de la aplicación |

### Estados de Activos

| Estado | Descripción |
|--------|-------------|
| `operational` | Equipo operativo |
| `maintenance` | En mantenimiento |
| `critical` | Estado crítico |
| `decommissioned` | Dado de baja |

---

## Licencia

MIT — Uso libre para proyectos internos de gestión TI.