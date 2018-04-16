import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import buble from 'rollup-plugin-buble';
//import postcss plugins
import responsive from 'postcss-responsive-type';

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'build/main.min.js',
    format: 'iife',
    name: 'react',
    sourcemap: true
  },
  plugins: [
    eslint({
      include: ['node_modules/**', '.css']
    }),
    uglify(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [
        responsive()
      ]
    }),
    buble(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),

  ]
};
