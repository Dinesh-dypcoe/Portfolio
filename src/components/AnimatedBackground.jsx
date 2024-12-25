import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #030014, #100829)',
      }}
    >
      {/* Animated Gradient Meshes */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(at 0% 0%, rgba(0, 209, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(at 100% 0%, rgba(0, 209, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(at 0% 100%, rgba(0, 209, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(at 100% 100%, rgba(0, 209, 255, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          opacity: 0.7,
        }}
      />

      {/* Floating Orbs */}
      <Box
        component={motion.div}
        animate={{
          y: [-20, 20, -20],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [20, -20, 20],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '30%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 209, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />

      {/* Glowing Orbs for additional atmosphere */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0, 209, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(112, 0, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default AnimatedBackground; 