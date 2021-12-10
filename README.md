# FestivalProyecto
deployment https://agitated-benz-01e69b.netlify.app/

Este proyecto fue llevado a cabo con un curso de Udemy.
Este proyecto se ha realizado con buenas prácticas y de manera que sea responsive frente a las siguientes resoluciones:
-telefono: 480px
-tablet: 768px
-desktop: 992px
-desktopXL: 1200px
Se han utlizado las siguientes herramientas:
-Código HTML
-Código CSS
-Código SCSS(SASS)
  -Se ha utilizado la forma mas actual para llamamiento y compilación. Se han utilizado mixins y variables.
-Código JS
-Se ha utilizado Gulp como herramienta para automatizar diferentes tareas:
  -css (Se ha utilizado sourcemaps, plumber, postcss, autoprefixer, cssnano)
    -Se ha realizado compilación de código scss hacia css, se ha realizado un mapeado del mismo y compresión.
    -Se encuentran en build/css el archivo comprimido y en build/cssSinComprimir el archivo de css compilado desde scss.
  -versionWebp (Se ha utilizado esta función para transformar imágenes de extensión .jpg y .png a extensión .webp)
  -versionAvif (Se ha realizado esta función con la finalidad de transformar imágenes a extension .avif pero no se ha logrado)
  -javascript (Se ha utilizado sourcemaps y terser)
    -Se ha realizado una compilación de código js a js, se ha realizado mapeado y compresión del mismo.
    -Se encuentra en build/js el archivo comprimido y en build/jsSinComprimir el archivo js sin modificación, al igual que en src/js.
  -dev
    -Se ha utilizado esta tarea para automatizar la compilación de archivos js y scss, la tarea se iniciaba en la consola y al percibir el guardado en alguno de estos archivos realizaba el guardado, compilación y demás tareas de compresión.
-Dependencias del proyecto (package.json)
  "autoprefixer": "^10.4.0",
  "cssnano": "^5.0.12",
  "gulp": "^4.0.2",
  "gulp-avif": "^1.0.1",
  "gulp-cache": "^1.1.3",
  "gulp-imagemin": "^7.1.0",
  "gulp-plumber": "^1.2.1",
  "gulp-postcss": "^9.0.1",
  "gulp-sass": "^5.0.0",
  "gulp-sourcemaps": "^3.0.0",
  "gulp-webp": "^4.0.1",
  "postcss": "^8.4.4"
  
  PD: Para poder correr las tareas de gulp desde la terminal, dentro de VSCode, se tuvieron que setear como Unrestricted las políticas de ejecución desde la powershell (como administrador).
