import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'], // Include Latin characters
    weight: ['400', '700'], // Specify font weights (e.g., normal and bold)
    style: ['normal', 'italic'], // Optional: normal and italic styles
    variable: '--font-roboto', // Custom CSS variable for this font
  });



  // import { Satoshi } from 'next/font/google';

  // export const satoshi = Satoshi({
  //     subsets: ['latin'], // Include Latin characters
  //     weight: ['400', '700'], // Specify font weights (e.g., normal and bold)
  //     style: ['normal', 'italic'], // Optional: normal and italic styles
  //     variable: '--font-satoshi', // Custom CSS variable for this font
  // });
  
















//   (4)import 'aos/dist/aos.css';

// (5)  useEffect(() => {
//     if (typeof window !== "undefined") {
//       AOS.init({
//         offset: -100, // Jab 200px scroll ho, tab animation trigger ho
//         duration: 500, // Animation ka duration
//         easing: 'ease-in-out', // Animation ka easing effect
//         once: true, 
//         delay: 100, // Animation sirf ek baar chale
//       });
//     }
//   }, []);