const sveltePreprocess = require('svelte-preprocess');
const { postcss } = require('svelte-preprocess');

const preprocessOptions = {
    sourceMap: true, // false in production
    defaults: {
        script: "typescript",
        style: "scss",
    },
    scss: {
        //prependData: `@import 'src/_variables.scss';`
    }
};

module.exports = {
    preprocess: [sveltePreprocess(preprocessOptions), postcss()]
}