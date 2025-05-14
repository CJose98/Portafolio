/**
 * Configuración de ESLint para proyectos React con soporte para Three.js
 * 
 * Esta configuración utiliza el nuevo sistema 'Flat Config' de ESLint (v8.23+)
 * Documentación oficial: https://eslint.org/docs/latest/use/configure/
 */

// Importaciones requeridas
import globals from 'globals'; // Variables globales de entornos (browser, node, etc)
import pluginReact from 'eslint-plugin-react'; // Plugin para reglas de React
import { defineConfig } from 'eslint/config'; // Helper para autocompletado y validación

export default defineConfig({
  // =============================================
  // 1. Configuración de archivos ignorados
  // =============================================
  /*
   * Reemplaza al archivo .eslintignore tradicional
   * Razones del cambio:
   * - Mejor integración con el sistema modular
   * - Configuración centralizada en un solo archivo
   */
  ignores: [
    '**/node_modules/*', // Ignora todas las dependencias
    'build/*',          // Ignora archivos de producción (Next.js, Vite, etc)
    'dist/*',           // Alternativa común para outputs de build
    '*.config.js'       // Ignora archivos de configuración (vite.config.js, etc)
  ],

  // =============================================
  // 2. Opciones de lenguaje y entorno
  // =============================================
  languageOptions: {
    // Variables globales disponibles
    globals: {
      ...globals.browser, // Añade window, document, setTimeout, etc
      React: 'readonly',  // Soluciona "React must be in scope" (React 17+)
      
      /**
       * Si usas otras librerías globales como Three.js, añádelas aquí:
       * THREE: 'readonly',
       * CANNON: 'readonly',
       */
    },

    // Opciones del parser (analizador de código)
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Habilita sintaxis JSX
      },
      ecmaVersion: 'latest', // Permite características modernas de ES
      sourceType: 'module',  // Usa módulos ES (import/export)
    }
  },

  // =============================================
  // 3. Plugins y extensiones
  // =============================================
  plugins: {
    react: pluginReact, // Activa reglas específicas para React
    /**
     * Plugins recomendados adicionales:
     * - @typescript-eslint (si usas TypeScript)
     * - eslint-plugin-import (para mejores prácticas en imports)
     * - eslint-plugin-jsx-a11y (accesibilidad en JSX)
     */
  },

  // Configuraciones especiales para plugins
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
      /**
       * Opciones adicionales disponibles:
       * - pragma: 'React' (personaliza el identificador JSX)
       * - flowVersion: 'detect' (si usas Flow)
       */
    }
  },

  // =============================================
  // 4. Reglas personalizadas
  // =============================================
  rules: {
    // ----- Reglas de React -----
    /**
     * Desactiva la necesidad de importar React en cada archivo JSX
     * (Válido desde React 17 con la nueva transformación JSX)
     */
    'react/react-in-jsx-scope': 'off',
    
    /**
     * Desactiva la validación de PropTypes
     * (Útil si usas TypeScript o no necesitas validación de props)
     */
    'react/prop-types': 'off',
    
    /**
     * Permite propiedades personalizadas de librerías como Three.js
     * Lista completa de propiedades ignoradas:
     * - intensity, position, args: Propiedades comunes de Three.js
     * - *Shadow: Propiedades de sombras
     * - polygonOffset*: Soluciona z-fighting en Three.js
     * - rotation: Transformaciones 3D
     */
    'react/no-unknown-property': ['error', { 
      ignore: [
        'intensity', 'position', 'args', 'castShadow',
        'receiveShadow', 'polygonOffset', 'rotation',
        'options', 'polygonOffsetFactor', 'flatShading'
      ]
    }],

    // ----- Reglas de JavaScript -----
    /**
     * Control de variables no utilizadas:
     * - 'warn': Muestra advertencias sin bloquear el build
     * Alternativas:
     * - 'error': Bloquea el build si hay variables no usadas
     * - 'off': Desactiva completamente (no recomendado)
     */
    'no-unused-vars': 'warn',
    
    /**
     * Estilo de comillas:
     * - Fuerza el uso de comillas simples (')
     * Para cambiar a comillas dobles: ['error', 'double']
     */
    'quotes': ['error', 'single'],
    
    /**
     * Puntos y coma:
     * - 'always': Requiere punto y coma al final de cada declaración
     * Alternativa: ['error', 'never'] para omitirlos
     */
    'semi': ['error', 'always'],

    // =============================================
    // Reglas adicionales recomendadas (descomenta para activar)
    // =============================================
    /*
    'react/jsx-key': 'error', // Requiere key en listas JSX
    'react-hooks/rules-of-hooks': 'error', // Reglas de Hooks
    'react-hooks/exhaustive-deps': 'warn', // Efectos con dependencias
    'import/order': ['error', { // Orden de imports
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ]
    }]
    */
  },

  // =============================================
  // 5. Sobrescribir configuraciones para archivos específicos
  // =============================================
  /*
  overrides: [
    {
      files: ['.test.jsx'],
      env: {
        jest: true
      }
    }
  ]
  */
});

// =============================================
// Notas finales:
// 1. Ejecuta `npx eslint --fix .` para aplicar correcciones automáticas
// 2. Para TypeScript, instala @typescript-eslint/parser y @typescript-eslint/eslint-plugin
// 3. Considera usar Prettier para formato consistente (configura eslint-config-prettier)
// =============================================