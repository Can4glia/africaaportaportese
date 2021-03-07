let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/app.js')
.sass('src/app.scss', 'dist/app.css');