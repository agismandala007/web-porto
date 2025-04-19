import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        sunshade: {
          50: '#FFF8EB',
          100: '#FFEBC6',
          200: '#FFD388',
          300: '#FFB74A',
          400: '#FF9D23',
          500: '#F97707',
          600: '#DD5302',
          700: '#B73606',
          800: '#94280C',
          900: '#7A220D',
          950: '#460F02',
        },
        ginfizz: {
          50: '#FEF9E1',
          100: '#FFF5C2',
          200: '#FFE789',
          300: '#FFD245',
          400: '#FCBA13',
          500: '#ECA106',
          600: '#CC7B02',
          700: '#A35505',
          800: '#86430D',
          900: '#723711',
          950: '#431B05',
        },
        grainbown: {
          50: '#FBF8F1',
          100: '#F5EEDF',
          200: '#E5D0AC',
          300: '#DDC094',
          400: '#CFA068',
          500: '#C4894B',
          600: '#B67340',
          700: '#985C36',
          800: '#7A4B32',
          900: '#633E2B',
          950: '#351F15',
        },
      },
    },
  },

  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
}
export default config
