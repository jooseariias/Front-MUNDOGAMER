// module.exports = {
//     env: {
//       browser: true,
//       es2021: true,
//     },
//     extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
//     parserOptions: {
//       ecmaVersion: 12,
//       sourceType: 'module',
//     },
//     plugins: ['react'],
//     rules: {
//       // Configuración de reglas de ESLint según tus necesidades
//       // Estilo y formato
//     'prettier/prettier': 'error',
//     // Reglas generales
//     'no-console': 'warn', // Evitar el uso de console.log
//     'no-unused-vars': 'warn', // Advertir sobre variables no utilizadas
//     // Reglas para React
//     'react/prop-types': 'off', // Si no usas prop-types
//     // Reglas recomendadas para React
//     'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // Archivos JSX deberían tener extensión .jsx
//     'react-hooks/rules-of-hooks': 'error', // Reglas para hooks
//     'react-hooks/exhaustive-deps': 'warn', // Advertir si no se listan todas las dependencias en useEffect
//     },
//   };