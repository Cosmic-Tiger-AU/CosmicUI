const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "CosmicTigerUI",
    libraryTarget: "umd",
    globalObject: "this",
    clean: true,
  },
};
