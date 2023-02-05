import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import babel from 'rollup-plugin-babel';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const packageJson = require("./package.json");
const styledComponentsTransformer = createStyledComponentsTransformer({
  displayName: true,
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react']
      }),
      typescript({ useTsconfigDeclarationDir: true },
      {
        transformers: [
          () => ({
            before: [styledComponentsTransformer],
          }),
        ],
      })
    ]
  }, {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/,],
  }
];