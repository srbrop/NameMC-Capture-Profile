# NameMC-Capture.js 📸✨

Este proyecto es un *script* de automatización de código abierto (*Open Source*) diseñado para creadores de contenido y coleccionistas de Minecraft. Permite tomar una captura de pantalla en ultra alta resolución y perfectamente recortada de tu perfil de **NameMC**. El bot calcula matemáticamente los bordes exactos de los píxeles para capturar solo tu nombre de usuario, tu render de skin en 3D y tu mosaico del historial de skins, omitiendo cualquier elemento innecesario de la página web.

El script fue creado como la herramienta compañera perfecta para [**SkinsArts Studio**](https://srbrop.github.io/SkinsArts-Studio/), permitiendo exhibir tus mosaicos de "Skins Arts" sin fisuras.

---

## 🛑 REQUISITO CRÍTICO DE ENTORNO

Para garantizar la estabilidad de `NameMC-Capture.js` y evitar bloqueos de permisos o congelamientos de red, **debes alojar el archivo en una carpeta estrictamente fuera de entornos de nube (como OneDrive, Google Drive o Dropbox)**. Se recomienda crear una carpeta local tradicional en tu Disco `C://` o en tu Escritorio (siempre que no esté sincronizado).

---

## 🛠️ Guía de Instalación Paso a Paso

### Paso 1: Instalar Node.js
1. Descarga e instala la versión recomendada (LTS) desde el sitio web oficial: [nodejs.org](https://nodejs.org/).
2. Sigue el asistente de instalación de Windows dejando todas las opciones por defecto.
3. **Cierra por completo todas las ventanas o instaladores una vez finalizado el proceso.**

### Paso 2: Preparar tu carpeta de trabajo
1. Crea una **nueva carpeta local** en tu computadora con el nombre que tú quieras.
2. Descarga el archivo `NameMC-Capture.js` de este repositorio y mételo en esa nueva carpeta.
3. Haz clic derecho en el archivo `NameMC-Capture.js`, ábrelo con el Bloc de notas (o tu editor de código preferido), y cambia el nombre de usuario en la **Línea 6** por tu propio usuario de NameMC. Guarda el archivo.
   - Ejemplo: `const username = 'TuUsuarioAqui';`
<img width="804" height="340" alt="Image" src="https://github.com/user-attachments/assets/f2b9a528-eb88-48b5-877c-29eeb4d9e3cd" />

### Paso 3: Instalar Dependencias mediante CMD
1. Entra a la carpeta que creaste (donde ahora tienes el archivo `.js`).
2. Haz un clic izquierdo en la **barra de direcciones** superior de la ventana del Explorador de archivos (donde sale la ruta de la carpeta) para que se ponga en azul, escribe `cmd` y presiona la tecla **Enter**.
3. En la ventana negra de la consola (CMD) que se acaba de abrir, ejecuta el siguiente comando para generar el entorno:
   ```bash
   npm init -y
   ```
### A continuación, instala el núcleo de automatización (Puppeteer) ejecutando:
   ```bash
    npm install puppeteer
 ```
(Espera pacientemente a que finalice la descarga del navegador interno y vuelva a aparecer la línea de comandos de tu ruta).
### ⚡ Ejecución del ScriptA diferencia de la herramienta [**AutoSkinNameMC**](https://github.com/srbrop/AutoSkinNameMC), este script funciona de forma completamente independiente y no requiere que configures tu navegador personal. Una vez que tu entorno y carpeta estén preparados:  
## 1. Regresa a la ventana negra del CMD y activa el script con el siguiente comando:
  ```bash
  node NameMC-Capture.js
 ```
## 2. Suelta el ratón y el teclado por completo. El script tomará el control, abrirá su propio navegador invisible y empezará a realizar la secuencia de forma automática. 
### ⏱️ Comportamiento del proceso:
* El script tarda solo unos segundos en cargar tu perfil de NameMC y calcular el recorte perfecto.

* El resultado final se guardará directamente en tu carpeta como una imagen de alta calidad llamada [tu-usuario]_perfil_perfecto.png.

* Escudo anti-errores: El bot intercepta y bloquea los anuncios de forma nativa para que la estructura de la página no se mueva, asegurando que tu captura de pantalla quede siempre perfectamente alineada.

---
## 🧰 Más herramientas (Ecosistema SkinsArts)

- 🎨 **[SkinsArts-Studio](https://github.com/srbrop/SkinsArts-Studio):** Si quieres generar, editar y previsualizar fácilmente artes de 27 piezas de Minecraft para NameMC, ¡utiliza esta poderosa suite web! *(Nota: Repositorio en inglés)*
- 🤖 **[Auto-Skin-NameMC](https://github.com/srbrop/Auto-Skin-NameMC/tree/main):** Si quieres automatizar la subida de las 27 skins en menos de 8 minutos, ¡utiliza esta extensión!

---

### ❤️ Apoya el Proyecto
Este script fue desarrollado con dedicación para expandir las capacidades artísticas de la comunidad de Minecraft. Si esta extensión automatizada te ahorró tiempo y capturó tu perfil a la perfección, ¡apoya nuestro ecosistema de herramientas

### 🌟  Deja una estrella en este repositorio de GitHub.

### 👉  **[Sigueme ArmandoLZ (Sonrojado) en NameMC](https://namemc.com/profile/Sonrojado)**
