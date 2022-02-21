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
      body: ['Montserrat', 'ui-sans-serif'],
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
          "50": "#E6F5FF",
          "100": "#B9E2FE",
          "200": "#8CD0FD",
          "300": "#5FBDFC",
          "400": "#32ABFB",
          "500": "#0598FA",
          "600": "#047AC8",
          "700": "#035B96",
          "800": "#023D64",
          "900": "#011E32"
        },
        secondary: {
          "50": "#FCE9E9",
          "100": "#F6C0C0",
          "200": "#F19898",
          "300": "#EC6F70",
          "400": "#E64748",
          "500": "#E11E1F",
          "600": "#B41819",
          "700": "#871213",
          "800": "#5A0C0D",
          "900": "#2D0606"
        },
      },
      lineHeight: {
        'paragraph': '1.6em',
        'heading': '1.12em',
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
