/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: [
        //
        "@typescript-eslint",
    ],
    extends: [
        //
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
        "prettier",
    ],
    rules: {
        curly: "warn",
        eqeqeq: "warn",
    },
};
