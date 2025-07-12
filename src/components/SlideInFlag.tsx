import { motion } from 'motion/react';
import PalFlagImg from '../assets/pal-heart-landscape.svg';
import { Breakpoint, useBreakpoint } from '../utils/useBreakpoint';

export interface SlideInFlagProps {
  scale?: number;
  animationType?: 'slideIn' | 'hoverSlide';
  initialDelay?: number;
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

const SlideInFlag = ({
  scale = 1, 
  animationType = 'slideIn', 
  initialDelay = 0
}: SlideInFlagProps) => {
  const breakpoint = useBreakpoint();
  const size = `${getSize(breakpoint) * scale}px`;

  // Calculate initial position based on animation type
  const getInitialX = () => {
    if (animationType === 'slideIn') {
      return '100%'; // Start from right edge
    } else {
      return '67%'; // Show 1/3 of the image (2/3 hidden)
    }
  };

  // Calculate final position
  const getFinalX = () => {
    if (animationType === 'slideIn') {
      return '0%'; // Fully visible
    } else {
      return '0%'; // Fully visible on hover
    }
  };

  return (
    <div className="slide-in-flag" style={{
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
    }}>
      <motion.img 
        src={PalFlagImg} 
        alt="Pal Flag" 
        style={{ width: size }}
        initial={{ x: getInitialX() }}
        animate={animationType === 'slideIn' ? { x: getFinalX() } : {}}
        whileHover={animationType === 'hoverSlide' ? { x: getFinalX() } : {}}
        transition={{
          duration: animationType === 'slideIn' ? 1.5 : 0.3,
          ease: 'easeOut',
          delay: animationType === 'slideIn' ? initialDelay : 0
        }}
      />
    </div>
  );
};

export default SlideInFlag;