/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem'
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px'
      }
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        muted: 'var(--color-muted)',
        danger: 'var(--color-danger)',
        'danger-hover': 'var(--color-danger-hover)'
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        scaleDown: 'scaleDown 0.3s ease-in-out'
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
}
