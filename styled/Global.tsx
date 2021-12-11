import { createGlobalStyle } from "styled-components";
import { colors, sizes } from "./tokens";

/**
 * @see https://www.joshwcomeau.com/css/custom-css-reset/
 * @see https://piccalil.li/blog/a-modern-css-reset/
 */

const Global = createGlobalStyle` 
     /* CSS resets */
     *, *::before, *::after {
     box-sizing: border-box;
     }
     /* elements have default margin, but setting them up manually causes less confusion*/
     * {
     margin: 0;
     }
     /* using 100% is more consistent on mobile than 100vh. React/Next Apps are wrapped by #__next/#app so include that too. Use the correct ID value for the DOM node that wraps the app */
     html, body, #__next, #app {
     height: 100%;
     }
     /* WCAG criteria states line-height should be AT LEAST 1.5 */
     body {
     line-height: 1.5;
     text-rendering: optimizeSpeed; /* tells the browser what to optimize, this optimizes speed */
     -webkit-font-smoothing: antialiased;
     font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
     background: var(--bg-primary);
     color: var(--text-primary);
     }
     /* img is an inline element, which adds line-height for weird extra spacing, and max-width 100% prevents images from overflowing */
     img, picture, video, canvas, svg {
     display: block;
     max-width: 100%;
     }
     /* form elements don't inherit fonts from the parent. Also, on mobile font-size causing a weird zooming behavior, 
     so applying inherit on the shorthand property font gives a more consistent behavior 
     */
     input, button, textarea, select {
     font: inherit;
     }
     /* word wrapping - overflow-wrap uses a hard-wrap and overrides the browser's soft-wrap algorithm, but it will try to set soft-wrap first*/
     p, h1, h2, h3, h4, h5, h6 {
     overflow-wrap: break-word;
     hyphens: auto;
     }
     /* add whatever wraps your app - this creates a new stacking context without needing to set z-index. Good for modals, tooltips, dropdowns etc. */
     #root, #_next {
     isolation: isolate;
     }
     /* modern anchor elements are uniquely styled and most likely don't need a text-decoration */
     a {
     text-decoration: 0;
     }
     /* lists, using list-style: none removes semantics and creates accessibility issues, if the role is set as role='lists' then it's fine */
     /* https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html */
 
      ul[role='list'], ol[role='list'] {
     list-style: none;
     }

    //dark theme
    html[data-theme = 'dark'] {
     --bg-primary: ${colors.dark.mediumBg};
     --text-primary:${colors.dark.color};

     --primary-color: ${colors.dark.primaryColor};
     --primary-color-dark: ${colors.dark.primaryColorDark};
     
     --secondary-color: ${colors.dark.secondaryColor};
     --secondary-color-dark: ${colors.dark.secondaryColorDark};

     --third-color: ${colors.dark.thirdColor};
     --third-color-dark: ${colors.dark.thirdColorDark};
     
    }
    //light theme
    html[data-theme = 'light'] {
     --bg-primary:  ${colors.light.mediumBg};
     --text-primary:${colors.light.color};

     --primary-color: ${colors.light.primaryColor};
     --primary-color-dark: ${colors.light.primaryColorDark};
     
     --secondary-color: ${colors.light.secondaryColor};
     --secondary-color-dark: ${colors.light.secondaryColorDark};

     --third-color: ${colors.light.thirdColor};
     --third-color-dark: ${colors.light.thirdColorDark};
     
    }
    //general tokens
    :root {
        --xm: ${sizes[0]};
        --sm: ${sizes[1]};
        --md: ${sizes[2]};
        --lg: ${sizes[3]};
        --xl: ${sizes[4]};
    }
 `;

export default Global;
