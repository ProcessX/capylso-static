const breakpoints = {
  mobile: 480,
  tablet: 640,
  laptop: 998,
  desktop: 1280,
  retina: 1560
}

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ['Lato', 'ui-sans-serif'],
      heading: ['Montserrat', 'ui-sans-serif']
    },

    screens: {
      'mobile': `${breakpoints.mobile}px`,
      'tablet': `${breakpoints.tablet}px`,
      'laptop': `${breakpoints.laptop}px`,
      'desktop': `${breakpoints.desktop}px`,
      'retina': `${breakpoints.retina}px`,
    },
    extend: {
      colors: {
        primary: {
          "50": "#F4F8EC",
          "100": "#E0ECCA",
          "200": "#CBE0A9",
          "300": "#B7D487",
          "400": "#A3C865",
          "500": "#8FBC43",
          "600": "#729636",
          "700": "#567128",
          "800": "#394B1B",
          "900": "#1D260D"
        },
        secondary: {
          "50": "#FEF6E6",
          "100": "#FDE6BA",
          "200": "#FCD68D",
          "300": "#FAC561",
          "400": "#F9B534",
          "500": "#F8A507",
          "600": "#C68406",
          "700": "#956304",
          "800": "#634203",
          "900": "#322101"
        },
      },
      lineHeight: {
        'paragraph': '1.6em',
        'heading': '1.4em',
        'btn': '1em'
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
      }
    },
  },
  plugins: [],
}
