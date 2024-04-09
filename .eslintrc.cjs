module.exports = {
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        'vue/multi-word-component-names': 'off',
    },
    parserOptions: {
        ecmaVersion: 2022,
        // sourceType: 'module',
        // parser: "@babel/eslint-parser"
    },
}
