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
    onwarn: function (warning, warn) {
      // Supress error for "use client" directive used by Next.js
      if (!warning.message.includes('"use client"')) {
        warn(warning);
      }
    },
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
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
      terser(),
      postcss({
        plugins: [], // Add postcss plugins here
        minimize: true,
      }),
      del({ targets: "dist/**/*" }),
      preserveDirectives({ supressPreserveModulesWarning: true }),
    ],
  },
];
