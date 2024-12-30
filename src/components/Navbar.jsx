import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { title: 'Projects', id: 'projects' },
    { title: 'About', id: 'about' },
    { title: 'Achievements', id: 'achievements' },
    { title: 'Skills', id: 'skills' },
    { title: 'Experience', id: 'experience' },
    { title: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navContainer = document.getElementById('mobile-nav-container');
      const clickedItem = document.querySelector(`[data-id="${id}"]`);
      
      if (navContainer && clickedItem) {
        // Get the index of clicked item
        const currentIndex = navItems.findIndex(item => item.id === id);
        const totalItems = navItems.length;
        
        // Get the exact position of the clicked item
        const itemPosition = clickedItem.offsetLeft;
        
        // If we're at the last item, prepare to scroll back to start
        if (currentIndex === totalItems - 1) {
          // First scroll to the last item
          navContainer.scrollTo({
            left: itemPosition,
            behavior: 'smooth'
          });
          
          // Then after a short delay, quickly scroll back to start
          setTimeout(() => {
            navContainer.scrollTo({
              left: 0,
              behavior: 'auto'
            });
          }, 300);
        } else {
          // Normal scroll to next item
          navContainer.scrollTo({
            left: itemPosition,
            behavior: 'smooth'
          });
        }
      }

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      const navbarHeight = window.innerWidth < 600 ? 64 : 100;
      window.scrollTo({
        top: window.pageYOffset - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const sections = ['projects', 'about', 'achievements', 'skills', 'experience', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = window.innerWidth < 600 ? '64px' : '100px';
      }
    });
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'transparent',
        backgroundImage: 'linear-gradient(to bottom, rgba(3, 0, 20, 0.8) 0%, rgba(3, 0, 20, 0) 100%)',
        backdropFilter: 'blur(8px)',
        borderBottom: 'none',
        padding: '20px 0',
        transition: 'all 0.3s ease',
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
      }}>
        <Typography 
          variant="h6" 
          component="div"
          onClick={handlePortfolioClick}
          sx={{ 
            textDecoration: 'none',
            cursor: 'pointer',
            color: 'text.primary',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          Portfolio
        </Typography>

        {/* Mobile Navigation */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            position: 'relative',
            width: 'calc(100% - 120px)', // Account for Portfolio text
          }}
        >
          <Box
            id="mobile-nav-container"
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              width: '100%',
              pl: 2, // Left padding only
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.id}
                data-id={item.id}
                onClick={() => scrollToSection(item.id)}
                component="span"
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  px: 2,
                  py: 1,
                  mr: 3,
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#00D1FF',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {navItems.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to={item.path}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '8px 16px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    background: 'transparent',
                    '&::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    },
                  },
                }}
              >
                {item.title}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 