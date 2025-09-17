import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
          alias: {
                  '@': resolve(__dirname, 'src'),
                  '@components': resolve(__dirname, 'src/components'),
                  '@pages': resolve(__dirname, 'src/pages'),
                  '@hooks': resolve(__dirname, 'src/hooks'),
                  '@services': resolve(__dirname, 'src/services'),
                  '@stores': resolve(__dirname, 'src/stores'),
                  '@utils': resolve(__dirname, 'src/utils'),
                  '@constants': resolve(__dirname, 'src/constants'),
                  '@styles': resolve(__dirname, 'src/styles'),
                  '@assets': resolve(__dirname, 'src/assets')
          }
    },
    server: {
          port: 3000,
          open: true,
          host: true
    },
    build: {
          rollupOptions: {
                  output: {
                            manualChunks: {
                                        vendor: ['react', 'react-dom'],
                                        charts: ['chart.js', 'react-chartjs-2'],
                                        ui: ['@mui/material', '@emotion/react', '@emotion/styled'],
                                        three: ['three'],
                                        motion: ['framer-motion'],
                                        forms: ['react-hook-form', '@hookform/resolvers', 'zod']
                            }
                  }
          },
          target: 'esnext',
          minify: 'esbuild'
    },
    optimizeDeps: {
          include: ['react', 'react-dom', 'three', 'chart.js']
    }
})
