import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  {
    input: "src/index.ts", // path to your main TS file, change accordingly
    output: [
      {
        format: "cjs",
        dir: "dist",
        entryFileNames: "[name].cjs",
        sourcemap: false,
        preserveModules: true,
        exports: "named",
        preserveModulesRoot: "src",
      },
      {
        format: "esm",
        dir: "dist",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
      postcss({
        plugins: [], // Add postcss plugins here
        minimize: true,
      }),
      del({ targets: "dist/**/*" }),
      preserveDirectives(),
    ],
  },
];
