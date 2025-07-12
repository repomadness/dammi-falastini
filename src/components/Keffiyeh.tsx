import KeffiyehSVG from '../assets/keffiyeh.tsx';
import {Breakpoint, useBreakpoint} from '../utils/useBreakpoint';

export interface KeffiyehProps {
  scale?: number;
  transparent?: boolean;
  designColor?: string;
  backgroundColor?: string;
}

const getSize = (breakpoint: Breakpoint) => {
  switch (breakpoint) {
    case 'mobileSmall':
      return 100;
    case 'mobileLarge':
      return 150;
    case 'tabletSmall':
      return 200;
    case 'tablet':
      return 225;   
    case 'desktopSmall':
      return 250;
    case 'desktopMedium':
      return 275;
    case 'desktopStandard':
      return 300;
    case 'desktopHD':
      return 350;
    default:
      return 300;
  }
}
const Keffiyeh = ({scale = 1, transparent = false, designColor = "black", backgroundColor = "white"}: KeffiyehProps) => {
  const breakpoint = useBreakpoint();
  const size = `${getSize(breakpoint) * scale}px`;

  return (
    <div className="keffiyeh-container" style={{ 
      display: 'flex', 
      position: 'absolute',
      top: 0,
      left: 0,
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      width: '100%',
      height: 'auto'
    }}>
        <KeffiyehSVG style={{
          maxWidth: '100%',
          height: 'auto',
          width: size
        }} designColor={designColor} backgroundColor={transparent ? "transparent" : backgroundColor} />
    </div>
  );
};

export default Keffiyeh;