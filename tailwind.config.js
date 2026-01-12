/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#e2e8f0',
        accent: '#f97316',
        aqua: '#22d3ee',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 20px 60px -20px rgba(249, 115, 22, 0.35)',
        'glow-aqua': '0 20px 60px -20px rgba(34, 211, 238, 0.35)',
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(249,115,22,0.18), transparent 25%), radial-gradient(circle at 50% 70%, rgba(14,165,233,0.25), transparent 35%)',
      },
    },
  },
  plugins: [],
};
