import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      // Get the navbar height based on screen size
      const isMobile = window.innerWidth < 600;
      const navbarHeight = isMobile ? 64 : 100;
      
      // Get the element's position
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Calculate scroll position with offset
      const offsetPosition = elementPosition - navbarHeight;

      element.scrollIntoView({
        behavior: 'smooth',
      });
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile drawer if open
      if (mobileOpen) {
        setMobileOpen(false);
      }
    }
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = (id) => {
    // Close drawer first
    setMobileOpen(false);
    
    // Small delay to ensure drawer closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 64; // Mobile navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    const sections = ['projects', 'about', 'achievements', 'skills', 'experience', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = `${window.innerWidth < 600 ? 64 : 100}px`;
      }
    });
    
    // Update scroll margins on resize
    const handleResize = () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.scrollMarginTop = `${window.innerWidth < 600 ? 64 : 100}px`;
        }
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

        {/* Hamburger Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { xs: 'flex', sm: 'none' },
            ml: 'auto',
            color: '#00D1FF',
          }}
        >
          <MenuIcon />
        </IconButton>

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

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: 240,
              background: 'rgba(3, 0, 20, 0.95)',
              backdropFilter: 'blur(10px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <List sx={{ pt: 2 }}>
            {navItems.map((item) => (
              <ListItem 
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                sx={{
                  py: 2,
                  '&:hover': {
                    background: 'rgba(0, 209, 255, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiTypography-root': {
                      color: 'text.primary',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      textAlign: 'center',
                      transition: 'color 0.3s ease',
                    },
                    '&:hover .MuiTypography-root': {
                      color: '#00D1FF',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 