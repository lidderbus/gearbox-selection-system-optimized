/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
          "./src/**/*.{js,jsx,ts,tsx}",
          "./public/index.html"
        ],
    theme: {
          extend: {
                  colors: {
                            primary: {
                                        50: '#eff6ff',
                                        100: '#dbeafe',
                                        200: '#bfdbfe',
                                        300: '#93c5fd',
                                        400: '#60a5fa',
                                        500: '#3b82f6',
                                        600: '#2563eb',
                                        700: '#1d4ed8',
                                        800: '#1e40af',
                                        900: '#1e3a8a',
                                        950: '#172554'
                            },
                            secondary: {
                                        50: '#f8fafc',
                                        100: '#f1f5f9',
                                        200: '#e2e8f0',
                                        300: '#cbd5e1',
                                        400: '#94a3b8',
                                        500: '#64748b',
                                        600: '#475569',
                                        700: '#334155',
                                        800: '#1e293b',
                                        900: '#0f172a',
                                        950: '#020617'
                            },
                            success: {
                                        50: '#f0fdf4',
                                        500: '#22c55e',
                                        600: '#16a34a',
                                        700: '#15803d'
                            },
                            warning: {
                                        50: '#fffbeb',
                                        500: '#f59e0b',
                                        600: '#d97706'
                            },
                            error: {
                                        50: '#fef2f2',
                                        500: '#ef4444',
                                        600: '#dc2626'
                            }
                  },
                  fontFamily: {
                            sans: ['Inter', 'system-ui', 'sans-serif']
                  },
                  boxShadow: {
                            'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                            'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
                            'large': '0 10px 50px -12px rgba(0, 0, 0, 0.25)'
                  },
                  animation: {
                            'slide-in': 'slideIn 0.3s ease-out',
                            'fade-in': 'fadeIn 0.2s ease-out',
                            'bounce-in': 'bounceIn 0.5s ease-out'
                  },
                  keyframes: {
                            slideIn: {
                                        '0%': { opacity: '0', transform: 'translateY(-10px)' },
                                        '100%': { opacity: '1', transform: 'translateY(0)' }
                            },
                            fadeIn: {
                                        '0%': { opacity: '0' },
                                        '100%': { opacity: '1' }
                            },
                            bounceIn: {
                                        '0%': { opacity: '0', transform: 'scale(0.3)' },
                                        '50%': { opacity: '1', transform: 'scale(1.05)' },
                                        '100%': { opacity: '1', transform: 'scale(1)' }
                            }
                  }
          }
    },
    plugins: [
          require('@tailwindcss/forms'),
          require('@tailwindcss/typography')
        ]
}
