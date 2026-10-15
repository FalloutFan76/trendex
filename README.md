# TrenDéx — starter móvil

Este es un prototipo inicial en HTML, CSS y JavaScript sin framework.

## Abrirlo
- Para una prueba rápida en ordenador, abre `index.html`.
- Para probar la cámara en un móvil, publícalo en un sitio HTTPS. Los navegadores suelen bloquear la cámara en páginas HTTP normales.
- La cámara requiere permiso del usuario.

## Incluye
- Catálogo de ejemplo para FGC, Rodalies, Metro, Tram y tren turístico.
- Búsqueda y filtros.
- Fichas con tres misiones comunes y dos específicas.
- Cámara integrada y captura directa.
- Vista de colección, progreso y modo oscuro.
- Validación estricta de fecha EXIF para algunas fotos JPEG importadas.

## Limitaciones importantes de esta primera versión
1. **No hay sincronización en la nube todavía.** El progreso se guarda localmente en el navegador. La siguiente fase será configurar Supabase Auth, una base de datos y almacenamiento privado con políticas de acceso.
2. La lectura EXIF del prototipo es deliberadamente conservadora y no reconoce todos los formatos/variantes de cámara. Si no se puede verificar la fecha, rechaza la foto.
3. La fecha EXIF puede modificarse y no es una prueba antifraude. Para uso personal sirve como comprobación razonable, pero no demuestra de forma criptográfica cuándo se tomó una foto.
4. El catálogo es una muestra para diseñar la experiencia, no una lista ferroviaria exhaustiva ni una fuente de datos verificada.
5. Las fotos se guardan como datos locales en el navegador; muchas fotos grandes pueden agotar el almacenamiento. Antes de usarlo como colección real, conectaremos almacenamiento en la nube.

## Próximos pasos
1. Crear un repositorio de GitHub.
2. Publicar el prototipo mediante HTTPS.
3. Crear un proyecto Supabase.
4. Configurar autenticación, tablas, reglas de acceso (RLS) y almacenamiento privado.
5. Ampliar y revisar el catálogo ferroviario y las misiones.

No publiques claves secretas de Supabase en el código del navegador. En el frontend solo se utiliza una publishable/anon key con RLS bien configurado; nunca la service-role key.
