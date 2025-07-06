// tailwind.config.js
export default {
    theme: {
        extend: {
            keyframes: {
                zoomInSlow: {
                    '0%': { transform: 'scale(0.72)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            animation: {
                zoomInSlow: 'zoomInSlow 3s ease-out forwards',
            },
        },
    },
    plugins: [],
}
  