/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyber-green': '#00ff88',
                'cyber-cyan': '#00d4ff',
                'neon-purple': '#a855f7',
                'matrix-green': '#22c55e',
                'deep-black': '#0a0a0f',
                'panel': {
                    bg: '#0f0f18',
                    border: '#1a1a2e',
                    hover: '#151525',
                }
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'typing': 'typing 3s steps(40, end)',
                'matrix': 'matrix 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)' },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                matrix: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'cyber-gradient': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #a855f7 100%)',
            },
        },
    },
    plugins: [],
}
