import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const nm = (pkg) => path.resolve(__dirname, 'node_modules', pkg)

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
  resolve: {
    alias: {
      react: nm('react'),
      'react-dom': nm('react-dom'),
      'react/jsx-runtime': nm('react/jsx-runtime.js'),
      'react/jsx-dev-runtime': nm('react/jsx-dev-runtime.js'),
      '@testing-library/react': nm('@testing-library/react'),
      '@testing-library/user-event': nm('@testing-library/user-event'),
      '@testing-library/jest-dom': nm('@testing-library/jest-dom'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['../Tests/**/*.{test,spec}.{js,jsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      include: [
        'src/components/Banner.jsx',
        'src/components/Collapse.jsx',
      ],
      reporter: ['text', 'html'],
    },
  },
})
