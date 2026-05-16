import { defineConfig, type ProxyOptions } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const API_TARGET = 'http://localhost:3000'

/**
 * Proxies API vers NestJS, mais laisse Vite servir index.html pour les
 * navigations navigateur (refresh sur /admin/dashboard, /auth, etc.).
 */
function apiProxy(): ProxyOptions {
  return {
    target: API_TARGET,
    changeOrigin: true,
    bypass(req) {
      const accept = req.headers.accept ?? ''
      if (req.method === 'GET' && accept.includes('text/html')) {
        return '/index.html'
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/auth': apiProxy(),
      '/analyses': apiProxy(),
      '/users': apiProxy(),
      '/chatbot': apiProxy(),
      '/reviews': apiProxy(),
      '/listings': apiProxy(),
      '/uploads': apiProxy(),
      '/admin': apiProxy(),
    },
  },
})
