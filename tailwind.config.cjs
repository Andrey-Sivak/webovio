const baseFontSize = 16;

/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	mode: 'jit',
	content: [
		'./*.html',
		'./src/js/**/*.js',
		'./src/scss/**/*.scss',
	],
	theme: {
		extend: {
			screens: {
				big: '992px',
				short: {
					raw: '(min-height: 450px)'
				},
				'short-wide': {
					raw: '(min-height: 590px) and (min-width: 767px)'
				},
			},
			spacing: () => ({
				...Array.from({ length: 201 }, (_, index) => index * 0.5)
					.filter(Boolean)
					.reduce(
						(acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
						{}
					),
			}),
			transitionDuration: {
				600: '600ms',
				700: '700ms',
				800: '800ms',
				900: '900ms',
			},
			maxWidth: {
				container: '1280px',
				620: '620px',
				md: '475px',
				'quote-card': '450px',
			},
			fontFamily: {
				poppins: [
					'c_poppins',
					'sans-serif',
				]
			},
			fontSize: {
				base: ['16px', '24px'],
				'1.5xl': ['22px', '33px'],
				'4xl': ['36px', '46px'],
				'5xl': ['48px', '60px'],
				'6xl': ['60px', '74px']
			},
			boxShadow: {
				medium: '20px 25px 43px rgba(0, 0, 0, 0.18)',
				huge: '50px 50px 100px rgba(0, 0, 0, 0.145947)'
			},
			colors: {
				green: {
					dirty: '#4F553D',
					'dirty-light': '#5D6544',
					light: '#B6C197',
				},
				black: {
					200: '#213842',
					DEFAULT: '#4D533C',
				},
				grey: {
					200: '#FAFAFA',
					300: '#D4D6D4',
				},
				yellow: '#FFD723',
			},
			zIndex: {
				max: 1000000,
			},
			gridTemplateColumns: {
				'90-1': '90px 1fr',
				'46-1': '46px 1fr',
			},
			backgroundImage: {
				'img-load': 'url(\'../img/img-loader.svg\')',
				'avatar-default': 'url(\'../img/avatar-default.svg\')',
			}
		},
	},
	plugins: [],
};
