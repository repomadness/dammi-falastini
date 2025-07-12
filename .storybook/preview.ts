import '../src/index.css';
import { withTheme } from './withTheme.decorator';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    withTheme({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    tags: ['autodocs'],
    viewport: {
      defaultViewport: 'desktopStandard',
      options: {
        mobileSmall: { name: "Mobile Small", styles: { width: "320px", height: "568px" } },
        mobileLarge: { name: "Mobile Large", styles: { width: "414px", height: "896px" } },
        tabletSmall: { name: "Tablet Small", styles: { width: "768px", height: "1024px" } },
        tablet: { name: "Tablet", styles: { width: "834px", height: "1112px" } },
        desktopSmall: { name: "Desktop Small", styles: { width: "1024px", height: "768px" } },
        desktopMedium: { name: "Desktop Medium", styles: { width: "1280px", height: "800px" } },
        desktopStandard: { name: "Desktop Standard", styles: { width: "1440px", height: "900px" } },
        desktopHD: { name: "Desktop HD", styles: { width: "1920px", height: "1080px" } },
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;