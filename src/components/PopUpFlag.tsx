import PalFlagImg from '../assets/pal-heart-portrait.svg';
import { motion } from 'motion/react';
import { Breakpoint, useBreakpoint } from '../utils/useBreakpoint';

interface PopUpFlagProps {
  scale?: number;
  animationType?: 'slideIn' | 'hoverSlide';
  initialDelay?: number;
  position?: 'left' | 'right';
}

const getSize = (breakpoint: Breakpoint) => {
  switch (breakpoint) {
    case 'mobileSmall':
      return 50;
    case 'mobileLarge':
      return 75;
    case 'tabletSmall':
      return 100;
    case 'tablet':
      return 150;
    case 'desktopSmall':
      return 175;
    case 'desktopMedium':
      return 180;
    case 'desktopStandard':
      return 190;
    case 'desktopHD':
      return 200;
    default:
      return 200;
  }
}

const PopUpFlag = ({ 
  scale = 1, 
  animationType = 'slideIn',
  initialDelay = 0,
  position = 'right'
}: PopUpFlagProps) => {
  const breakpoint = useBreakpoint();
  const size = `${getSize(breakpoint) * scale}px`;

  // Calculate initial position based on animation type and side
  const getInitialY = () => {
    if (animationType === 'slideIn') {
      return '100%'; // Start from bottom
    } else {
      return '67%'; // Show 1/3 of the image (2/3 hidden)
    }
  };

  // Calculate final position
  const getFinalY = () => {
    return '0%'; // Fully visible
  };

  return (
    <div className="pop-up-flag" style={{
      display: 'flex',
      position: 'fixed',
      bottom: 0,
      [position]: 0,
      justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-end',
      width: 'auto',
      height: 'auto',
      zIndex: 1000
    }}>
      <motion.img 
        src={PalFlagImg} 
        alt="Pal Flag" 
        style={{ width: size }}
        initial={{ y: getInitialY() }}
        animate={animationType === 'slideIn' ? { y: getFinalY() } : {}}
        whileHover={animationType === 'hoverSlide' ? { y: getFinalY() } : {}}
        transition={{
          duration: animationType === 'slideIn' ? 1.5 : 0.3,
          ease: 'easeOut',
          delay: animationType === 'slideIn' ? initialDelay : 0
        }}
      />
    </div>
  );
};

export default PopUpFlag;

