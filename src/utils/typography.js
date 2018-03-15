import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

kirkhamTheme.headerFontFamily = 'Playfair Display'; // was 20px.

const typography = new Typography(kirkhamTheme);


// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   googleFonts: [
//     {
//       name: 'Playfair Display',
//       styles: ['700'],
//     },
//     {
//       name: 'Roboto',
//       styles: ['400', '400i', '700', '700i'],
//     },
//   ],
//   headerFontFamily: ['Playfair Display', 'serif'],
//   bodyFontFamily: ['Roboto', 'serif'],
//   // See below for the full list of options.
// })

// Output CSS as string.
// typography.toString()

// export default Typography;
