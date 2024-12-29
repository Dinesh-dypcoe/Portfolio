import { useState } from 'react';
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
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      const navbarHeight = 100;
      const offsetPosition = window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: window.pageYOffset - navbarHeight,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const drawer = (
    <Box
      component={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      sx={{
        width: 250,
        height: '100%',
        background: 'rgba(3, 0, 20, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        pt: 8,
        position: 'relative',
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: '#00D1FF',
          '&:hover': {
            background: 'rgba(0, 209, 255, 0.1)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            custom={index}
          >
            <ListItem 
              component={Link} 
              to={item.path}
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: 'text.primary',
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(0, 209, 255, 0.1)',
                  transform: 'translateX(10px)',
                },
              }}
            >
              <ListItemText 
                primary={item.title}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

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

        {/* Hamburger Menu for Mobile */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { sm: 'none' },
            color: '#00D1FF',
            transition: 'transform 0.3s ease',
            transform: mobileOpen ? 'rotate(90deg)' : 'none',
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu */}
        <Box 
          sx={{ 
            display: { xs: 'none', sm: 'flex' }, 
            alignItems: 'center', 
            gap: 3,
          }}
        >
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
        <AnimatePresence>
          {mobileOpen && (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
                BackdropProps: {
                  onClick: handleDrawerToggle,
                },
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 250,
                  background: 'transparent',
                  boxShadow: 'none',
                },
                '& .MuiBackdrop-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(4px)',
                },
              }}
            >
              {drawer}
            </Drawer>
          )}
        </AnimatePresence>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 