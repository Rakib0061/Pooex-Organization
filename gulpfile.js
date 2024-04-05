//  🔴gulp plugin :
import gulp from 'gulp';
import * as del from 'del';
import webP from 'gulp-webp';
import fileInclude from 'gulp-file-include';
import imageMin, { mozjpeg, optipng } from 'gulp-imagemin';

const { src, dest, series } = gulp;

//  🔴task function :
//  ########## image task ##########
function compreseImage() {
  return src('src/images/**/*.{jpg,png}')
    .pipe(
      imageMin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 2 }),
      ]),
    )
    .pipe(webP())
    .pipe(dest('src/images'))
    .on('end', () => {
      del.deleteSync(['src/images/**/*.{jpg,png}', '!src/images/**/*.webp']);
    });
}

//  ########## html partials task ##########
function includeHTML() {
  return src(['*.html', 'src/pages/*.html'])
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(
      dest((file) => {
        if (file.dirname.includes('src/pages/*.html')) {
          return './';
        }
        return file.dirname;
      }),
    );
}

//  🔴observer
// if any watch file like sass have to integreate ...

//  🔴export
export default series(compreseImage, includeHTML);
