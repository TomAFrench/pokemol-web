import molochBg from '../assets/themes/molochTheme/moloch__meme--trans15.png';
import molochBrand from '../assets/themes/molochTheme/moloch__logo--simple--red.png';
import raidBrand from '../assets/themes/raidTheme/raidguild__logo.png';
import raidBg from '../assets/themes/raidTheme/raid__fantasy--bg.jpg';
import metaclanBrand from '../assets/themes/metaclanTheme/MetaClan_Text.png';
import metaclanBg from '../assets/themes/metaclanTheme/MetaClan-Pokemol-Background.jpg';
import daosquareBrand from '../assets/themes/daosquare/daosquare__logo.png';
import daosquareBg from '../assets/themes/daosquare/daosquare__bg.jpg';
import machixBrand from '../assets/themes/machix/machixBrand.png';
import machixBg from '../assets/themes/machix/machixBg.png';
import hausBrand from '../assets/themes/hausdao/hausdao__logo.png';
import hausBg from '../assets/themes/hausdao/Banner.png';
import yearnBg from '../assets/themes/yearn/yearn__bg--pattern--blueonwhite--light.png';
import yearnBrand from '../assets/themes/yearn/yearn__brand.png';
import mcvBg from '../assets/themes/mcv/mcv__bg.jpg';
import mcvBrand from '../assets/themes/mcv/mcv__brand.png';
import fedpapersBrand from '../assets/themes/fedPapersTheme/fedpapers-brand.png';
import fedpapersBG from '../assets/themes/fedPapersTheme/fedpapers-bg.png';

export const themeMap = {
  moloch: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: molochBrand,
    brandBg: molochBg,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 0.95)`,
    primary: `#aa174c`,
    secondary: `#aa174c`,
    tertiary: `#aa174c`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
  machix: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: machixBrand,
    brandBg: machixBg,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 0.85)`,
    primary: `#f6d82c`,
    secondary: `rgba(47,233,167,1)`,
    tertiary: `rgba(239,73,123,1)`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
  daosquare: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: daosquareBrand,
    brandBg: daosquareBg,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 0.85)`,
    primary: `#ff0844`,
    secondary: `rgba(47,233,167,1)`,
    tertiary: `rgba(239,73,123,1)`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
  mcv: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: mcvBrand,
    brandBg: mcvBg,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 1)`,
    primary: `#C93C4F`,
    secondary: `#FFA229`,
    tertiary: `#38ECAB`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
  raidguild: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: raidBrand,
    brandBg: raidBg,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 1)`,
    primary: `#ff3864`,
    secondary: `rgba(47,233,167,1)`,
    tertiary: `rgba(239,73,123,1)`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
  metaclan: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: metaclanBrand,
    brandBg: metaclanBg,
    bgPosition: 'center center',
    appBackground: `#000F1F`,
    primary: `#04d904`,
    secondary: `#04d904`,
    tertiary: `#04d904`,
    danger: `rgba(239,73,95,1)`,
    success: `#04d904`,
    bright: `rgba(189,134,254,1)`,
  },
  hausdao: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: '#fff',
    brand: hausBrand,
    brandBg: hausBg,
    bgPosition: 'center bottom',
    appBackground: `#0E1235`,
    primary: `#EB8A23`,
    secondary: `#513E99`,
    tertiary: `#129AC6`,
    danger: `rgba(239,73,95,1)`,
    success: `#04d904`,
    bright: `rgba(189,134,254,1)`,
  },
  yearn: {
    baseFont: `'Work Sans', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: '#212529',
    brand: yearnBrand,
    brandBg: yearnBg,
    bgPosition: 'center bottom',
    appBackground: `rgba(255,255,255,0.9)`,
    primary: `#007bff`,
    secondary: `#DC6BE5`,
    tertiary: `#0a5cae`,
    danger: `rgba(239,73,95,1)`,
    success: `#04d904`,
    bright: `rgba(189,134,254,1)`,
  },
  metafactory: {
    mfBrand: true,
    language: 'mfPoke',
    symbolOverride: 'mf',
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: metaclanBrand,
    brandBg: metaclanBg,
    bgPosition: 'center center',
    appBackground: `#000F1F`,
    primary: `#04d904`,
    secondary: `#04d904`,
    tertiary: `#04d904`,
    danger: `rgba(239,73,95,1)`,
    success: `#04d904`,
    bright: `rgba(189,134,254,1)`,
  },
  federalistpapers: {
    baseFont: `'Roboto', sans-serif`,
    dataFont: `'Share Tech Mono', sans-serif`,
    baseFontColor: 'white',
    brand: fedpapersBrand,
    brandBg: fedpapersBG,
    bgPosition: 'center center',
    appBackground: `rgba(0, 0, 0, 1)`,
    primary: `#C93C4F`,
    secondary: `#FFA229`,
    tertiary: `#38ECAB`,
    danger: `rgba(239,73,95,1)`,
    success: `rgba(77,204,44,1)`,
    bright: `rgba(189,134,254,1)`,
  },
};
