const mix = require('laravel-mix');
require('laravel-mix-nunjucks');

// Normal webpack config options, not losing anything by using mix as an abstraction
mix.webpackConfig({
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        children: true
    }
});

// general mix specifc options
mix.options({
    terser: {
        extractComments: false
    },
    manifest: false,
    clearConsole: false,
    processCssUrls: false
});

//mix.setPublicPath('../');

// Static
mix.sass('./src/sass/main.scss', 'dist/css/main.css');
mix.ts('./src/ts/input.ts', 'dist/js/output.js');

mix.njk('./src/html/*.html', 'dist');

mix.js('./src/components/DemoImage/builder.ts', './dist/js/components/DemoImage.js').react();

// CMS
// mix.css('./src/sass/fonts.css','./wwwroot/css/fonts.css')

// mix.sass('./src/sass/main.scss', './wwwroot/css/main.css');

// mix.copy(['../wwwroot/css/fonts.css', '../wwwroot/css/main.css'], './dist/css');
// mix.copy(['../wwwroot/assets'], './dist/assets');

// mix.ts('./src/ts/input.ts', './wwwroot/js/output.js');
// mix.copy(['../wwwroot/js'], './dist/js');

// Transpile each component
// mix.js('./src/components/Draw/builder.ts', './wwwroot/components/Draw.js').react();
// mix.js('./src/components/Overlay/builder.ts', './wwwroot/components/Overlay.js').react();
// mix.js('./src/components/SearchToggle/builder.ts', './wwwroot/components/SearchToggle.js').react();
// mix.js('./src/components/DemoImage/builder.ts', './wwwroot/components/DemoImage.js').react();

// Pull out vendors, optional but recomended as they are loaded once, cached when changing routes
mix.extract();
