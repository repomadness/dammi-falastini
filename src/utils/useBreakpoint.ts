import { useState, useEffect } from 'react';

export type Breakpoint = 'mobileSmall' | 'mobileLarge' | 'tabletSmall' | 'tablet' | 'desktopSmall' | 'desktopMedium' | 'desktopStandard' | 'desktopHD';

export const BREAKPOINTS = {
  mobileSmall: 320,
  mobileLarge: 414,
  tabletSmall: 768,
  tablet: 834,
  desktopSmall: 1024,
  desktopMedium: 1280,
  desktopStandard: 1440,
  desktopHD: 1920,
} as const;

export const useBreakpoint = (scale: number = 1) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktopStandard');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth / scale;
      
      if (width <= BREAKPOINTS.mobileSmall) {
        setBreakpoint('mobileSmall');
      } else if (width <= BREAKPOINTS.mobileLarge) {
        setBreakpoint('mobileLarge');
      } else if (width <= BREAKPOINTS.tabletSmall) {
        setBreakpoint('tabletSmall');
      } else if (width <= BREAKPOINTS.tablet) {
        setBreakpoint('tablet');
      } else if (width <= BREAKPOINTS.desktopSmall) {
        setBreakpoint('desktopSmall');
      } else if (width <= BREAKPOINTS.desktopMedium) {
        setBreakpoint('desktopMedium');
      } else if (width <= BREAKPOINTS.desktopStandard) {
        setBreakpoint('desktopStandard');
      } else {
        setBreakpoint('desktopHD');
      }
    };

    // Initial breakpoint calculation
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [scale]); // Add scale to dependencies

  return breakpoint;
}; 