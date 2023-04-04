/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  extends: [
    // Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // Disable các rule mà eslint xung đột với prettier.
    // Để cái này ở dưới để nó override các rule phía trên!.
    "eslint-config-prettier",
    "prettier",
  ],
  plugins: ["prettier"],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: "detect",
    },
    // Nói ESLint cách xử lý các import
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "")],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  },
  env: {
    node: true,
  },
  rules: {
    // Tắt rule yêu cầu import React trong file jsx
    "react/react-in-jsx-scope": "off",
    // Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-no-target-blank": "warn",
  },
};