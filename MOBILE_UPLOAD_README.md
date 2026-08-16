# AssetDesk Field — paquete móvil para subir al repositorio

Este ZIP contiene una copia completa de AssetDesk con el primer parche de adaptación móvil.

## Cambios incluidos

- `src/components/MobileBottomNav.tsx`: navegación inferior para móviles.
- `src/components/AppLayout.tsx`: integra la navegación móvil y reserva espacio inferior.
- `src/components/Sidebar.tsx`: sidebar administrativo oculto en pantallas pequeñas.
- `public/manifest.json`: manifest PWA actualizado para AssetDesk Field.
- `src/app/layout.tsx`: idioma HTML en español.
- `capacitor.config.ts`: configuración inicial para Android/Capacitor.
- `docs/MOBILE_PATCH.md`: alcance y pasos antes de compilar el APK.
- `docs/DATA_CONNECTION.md`: conexión única entre web, móvil y Supabase.
- `.env.example`: plantilla sin secretos para configurar el mismo backend.

## Cómo subirlo a GitHub

1. Descarga y descomprime este ZIP.
2. Entra al repositorio `DUBANCAMILO/assetdesk`.
3. Crea una rama nueva, por ejemplo `mobile-field-preview`.
4. Sube el contenido de esta carpeta al repositorio, conservando las rutas.
5. No subas ningún archivo `.env` con claves privadas.
6. Abre un Pull Request hacia `main`.
7. Revisa primero la interfaz en un teléfono Android.

## Antes de compilar el APK

- Instalar dependencias del proyecto.
- Añadir las dependencias de Capacitor.
- Decidir si el APK usará una URL web alojada o una exportación estática.
- Configurar permisos de cámara.
- Revisar Supabase Auth, Storage y políticas RLS.
- Probar QR, fotos, PDF, compartir y modo offline.

Este paquete es una base de interfaz y empaquetado móvil. Todavía no contiene un APK compilado ni cambia la base de datos.
