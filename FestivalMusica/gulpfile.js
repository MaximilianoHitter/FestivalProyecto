const { src, dest, watch } = require('gulp');
//cargar css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
//Aligerar peso
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
//Imagenes
const webp = require('gulp-webp');
const avif = require('gulp-avif');
//Javascript
const terser = require('gulp-terser-js');

//Automatizacion
function css(done) {
    src('src/scss/**/*.scss') //Identificar el archivo .scss a compilar
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass()) //compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')) //almacenarlo

    done();
}

function cssSinContraer(done) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/cssSinComprimir'))
    done()
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done()
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionAvif(done) { //No funciono
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))
    done();
}

function javascriptSinComprimir(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/jsSinComprimir'))
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)
    done();
}

exports.css = css;
exports.cssSinContraer = cssSinContraer;
exports.javascript = javascript;
exports.javascriptSinComprimir = javascriptSinComprimir;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif; //No funciono
/* exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);para ejecutar tareas paralelamente */
exports.dev = dev;