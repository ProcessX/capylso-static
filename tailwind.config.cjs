const breakpoints = {
  mobile: 480,
  tablet: 640,
  laptop: 998,
  desktop: 1280,
  retina: 1560
}

const fontRatio = {
  mobile: 1.2,
  tablet: 1.25,
  laptop: 1.28,
  desktop: 1.3,
  retina: 1.4
};

const fontSizeNames = {
  crescent: ['base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
  decrescent: ['sm', 'xs']
};

function generateFontSizes() {
  let fontSize = {};
  for (const [screenSize, ratio] of Object.entries(fontRatio)) {
    for (let i = 0; i < fontSizeNames.crescent.length; i++) {
      fontSize[`${screenSize}-${fontSizeNames.crescent[i]}`] = `${ratio ** i}rem`;
    }
    for (let i = 0; i < fontSizeNames.decrescent.length; i++) {
      fontSize[`${screenSize}-${fontSizeNames.decrescent[i]}`] = `${ratio ** -(i + 1)}rem`;
    }
  };
  return fontSize;
}

function generateGridContainers() {
  let gridContainers = {};
  for (const bp of Object.keys(breakpoints)) {
    gridContainers[`container-${bp}`] = `max(1rem, calc((100% - (${breakpoints[bp]}px - 2rem)) / 2)) repeat(25, calc((min(${breakpoints[bp]}px, 100%) - 2rem) / 25)) max(1rem, calc((100% - (${breakpoints[bp]}px - 2rem)) / 2))`;

  }
  return gridContainers;
}

generateGridContainers();

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ['Lato', 'ui-sans-serif'],
      heading: ['Montserrat', 'ui-sans-serif']
    },

    screens: {
      'tablet': `${breakpoints.tablet}px`,
      'laptop': `${breakpoints.laptop}px`,
      'desktop': `${breakpoints.desktop}px`,
      'retina': `${breakpoints.retina}px`,
    },
    fontSize: generateFontSizes(),
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
        'heading': '1.4em'
      },
      gridTemplateColumns: {
        ...generateGridContainers(),
      },
      gridColumn: {
        'span-25': '2 / -2'
      }
    },
  },
  plugins: [],
}
