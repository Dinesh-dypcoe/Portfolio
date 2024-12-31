import { Container, Typography, Box, Button, Card, Chip, IconButton, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, GitHub, Launch, ChevronLeft, ChevronRight, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
    // Reset after completion to create infinite loop
    else {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 2000); // Wait 2 seconds before restarting
      return () => clearTimeout(resetTimer);
    }
  }, [index, text]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Typography 
      variant="h2" 
      sx={{ 
        fontSize: { xs: '1.5rem', md: '2rem' },
        background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        mb: 2,
        whiteSpace: 'pre',
        display: 'inline-block',
        position: 'relative',
        '&::after': {
          content: '""',
          width: '2px',
          height: '100%',
          background: '#00D1FF',
          position: 'absolute',
          right: '-4px',
          top: 0,
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          display: 'block', // Always show cursor
        },
      }}
    >
      {displayText}
    </Typography>
  );
};

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      
      if (response.ok) {
        form.reset();
        setFormSubmitted(true);
        // Reset the submitted state after 3 seconds
        setTimeout(() => setFormSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    viewport: { once: false, amount: 0.3 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: false, amount: 0.3 }
  };

  return (
    <Box sx={{ 
      overflowY: 'auto', 
      height: '100vh',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      msOverflowStyle: 'none',  // IE and Edge
      scrollbarWidth: 'none',   // Firefox
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg" id="home">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            pt: 8,
            pb: { xs: 8, md: 0 },
          }}
        >
          {/* Left Side - Text Content */}
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: '#00D1FF',
                  fontWeight: 500,
                  mb: { xs: 1, md: 2 },
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  mt: { xs: '70px', md: 0 },
                }}
              >
                Hi there! 👋
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TypewriterText text="I am Dinesh Aher" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Full Stack Developer(MERN)
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  maxWidth: '500px',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                I am an experienced Full Stack Developer and Competitive Programmer dedicated to building efficient, scalable solutions and solving complex problems.
              </Typography>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  borderRadius: '50px',
                  padding: '12px 32px',
                  background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                  boxShadow: '0 4px 14px 0 rgba(0, 209, 255, 0.39)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00A3FF 30%, #5200B3 90%)',
                  },
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </Box>

          {/* Right Side - Image Card */}
          <Box
            component={motion.div}
            animate={{ 
              y: [0, -15, 0] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                width: { xs: '280px', sm: '350px', md: '450px' },
                height: { xs: '350px', sm: '450px', md: '550px' },
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src="/photo.jpg"
                alt="Profile"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
                }}
              />
            </Card>
          </Box>
        </Box>
      </Container>

      {/* About Section */}
      <Box 
        id="about"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
            <Typography
              component={motion.p}
              variants={fadeInUp}
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
                fontSize: '1.1rem',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                mb: 4,
              }}
            >
             Hello! I’m Dinesh Aher, a Full Stack Developer and Competitive Programmer with a passion for crafting dynamic, user-focused applications. Proficient in the MERN Stack, I specialize in turning ideas into robust, scalable web solutions while leveraging my strong problem-solving skills honed through competitive programming.
              <br /><br />
Currently, I’m in my third year of Information Technology at D.Y. Patil College of Engineering, Akurdi,Pune. I’ve built a solid foundation in data structures and algorithms in C++. I thrive on challenges—whether it’s designing seamless user experiences, optimizing algorithms, or developing innovative solutions.
<br /><br />
Let’s team up and create something extraordinary together!
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box 
        id="achievements"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Achievements
            </Typography>
            {/* Achievements Section */}
            <Box
              component={motion.div}
              variants={fadeInUp}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                mb: 4,
              }}
            >
              {/* Smart India Hackathon Achievement */}
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4,
                  alignItems: 'center',
                }}
              >
                {/* Description */}
                <Box 
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{ flex: 1 }}>
                  <Typography
                    component={motion.h5}
                    variants={fadeInUp}
                    variant="h5"
                    sx={{
                      color: '#00D1FF',
                      fontWeight: 600,
                      mb: 2,
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    🏆Smart India Hackathon 2024 Winner🏆
                  </Typography>
                  <Typography
                    component={motion.p}
                    variants={fadeInUp}
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                      mb: 2,
                      textAlign: { xs: 'justify', md: 'left' },
                      wordBreak: 'break-word',
                    }}
                  >
                    Smart India Hackathon is a national hackathon where our team developed an innovative system नामसिद्धि
                    for fuzzy name matching in police records. Our solution achieved higher accuracy 
                    than existing algorithms and was recognized for its practical implementation.
                  </Typography>
                  <Box 
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      component="a"
                      href="https://naam-siddhi1.vercel.app/"
                      target="_blank"
                      startIcon={<Launch />}
                      variant="contained"
                      size="small"
                      sx={{
                        background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                        boxShadow: '0 4px 14px 0 rgba(0, 209, 255, 0.39)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #00A3FF 30%, #5200B3 90%)',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </Box>

                {/* SIH Image */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    flex: 1,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: { xs: '200px', sm: '250px', md: '300px' },
                    maxWidth: { xs: '100%', md: '400px' },
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      overflowX: 'auto',
                      scrollSnapType: 'x mandatory',
                      height: { xs: '200px', sm: '250px', md: '300px' },
                      '&::-webkit-scrollbar': {
                        display: 'none'
                      },
                      msOverflowStyle: 'none',
                      scrollbarWidth: 'none',
                    }}
                  >
                    <Box
                      component="img"
                      src="/sih1.jpg"
                      alt="Smart India Hackathon"
                      sx={{
                        minWidth: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                      }}
                    />
                    <Box
                      component="img"
                      src="/sih2.jpg"
                      alt="Smart India Hackathon"
                      sx={{
                        minWidth: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                      }}
                    />
                  </Box>
                  {/* Navigation Buttons */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: 10,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                  >
                    <IconButton
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement.parentElement.querySelector('div');
                        container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
                      }}
                      sx={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      <ChevronLeft />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: 10,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                  >
                    <IconButton
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement.parentElement.querySelector('div');
                        container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
                      }}
                      sx={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>
                  {/* Scroll Indicators */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.7)',
                      }}
                    />
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* CodeChef Achievement */}
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4,
                  alignItems: 'center',
                }}
              >
                {/* Description */}
                <Box 
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{ 
                    flex: 1,
                    px: { xs: 2, sm: 3, md: 0 },
                    width: '100%'
                  }}>
                  <Typography
                    component={motion.h5}
                    variants={fadeInUp}
                    variant="h5"
                    sx={{
                      color: '#00D1FF',
                      fontWeight: 600,
                      mb: 2,
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    3★ Coder at CodeChef
                  </Typography>
                  <Typography
                    component={motion.p}
                    variants={fadeInUp}
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                      textAlign: { xs: 'justify', md: 'left' },
                      wordBreak: 'break-word',
                    }}
                  >
                    Achieved 3-star rating on CodeChef through consistent problem-solving and 
                    algorithmic thinking. Regularly participate in coding contests and have solved 
                    500+ problems across various platforms including codechef,leetcode,GFG,CodingNinja,etc.
                  </Typography>
                </Box>

                {/* CodeChef Image */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    flex: 1,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: { xs: '200px', sm: '250px', md: '300px' },
                    maxWidth: { xs: '100%', md: '400px' },
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      overflowX: 'auto',
                      scrollSnapType: 'x mandatory',
                      height: { xs: '200px', sm: '250px', md: '300px' },
                      '&::-webkit-scrollbar': {
                        display: 'none'
                      },
                      msOverflowStyle: 'none',
                      scrollbarWidth: 'none',
                    }}
                  >
                    <Box
                      component="img"
                      src="/codechef1.png"
                      alt="CodeChef Profile"
                      sx={{
                        minWidth: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                      }}
                    />
                    <Box
                      component="img"
                      src="/codechef2.png"
                      alt="CodeChef Profile"
                      sx={{
                        minWidth: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                      }}
                    />
                  </Box>
                  {/* Navigation Buttons */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: 10,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                  >
                    <IconButton
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement.parentElement.querySelector('div');
                        container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
                      }}
                      sx={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      <ChevronLeft />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: 10,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                  >
                    <IconButton
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement.parentElement.querySelector('div');
                        container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
                      }}
                      sx={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>
                  {/* Scroll Indicators */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.7)',
                      }}
                    />
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Experience Description */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: { xs: 4, md: 6 },
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {/* Skills */}
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3,
                    color: 'text.primary',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                  }}
                >
                
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 2,
                    justifyContent: 'flex-start',
                  }}
                >
                </Box>
              </Box>
              
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box 
        id="skills"
        sx={{ 
          py: { xs: 4, md: 8 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Skills & Technologies
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)'
                },
                gap: { xs: 4, sm: 6 },
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {/* Frontend Skills */}
              <Card
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(0, 209, 255, 0.3)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ 
                  mb: 3, 
                  color: '#00D1FF',
                  textAlign: 'center',
                  fontWeight: 600,
                }}>
                  Frontend
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'flex-start',
                  flex: 1,
                }}>
                  {[
                    { name: 'React', icon: '/react.svg' },
                    { name: 'Next.js', icon: '/nextjs.svg' },
                    { name: 'Tailwind CSS', icon: '/tailwind.svg' },
                    { name: 'Bootstrap', icon: '/bootstrap.png' },
                    { name: 'Material-UI', icon: '/mui.svg' },
                  ].map((skill) => (
                    <Card
                      key={skill}
                      component={motion.div}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        minWidth: 'fit-content',
                        flex: '0 1 auto',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: '#00D1FF',
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={skill.icon}
                        alt={skill.name}
                        sx={{
                          width: 32,
                          height: 32,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'text.primary',
                          fontSize: '1rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Card>

              {/* Backend Skills */}
              <Card
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(0, 209, 255, 0.3)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ 
                  mb: 3, 
                  color: '#00D1FF',
                  textAlign: 'center',
                  fontWeight: 600,
                }}>
                  Backend
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'flex-start',
                }}>
                  {[
                    { name: 'Node.js', icon: '/nodejs.svg' },
                    { name: 'Express.js', icon: '/express.svg' },
                    { name: 'MongoDB', icon: '/public/mongodb.svg' },
                    { name: 'MySQL', icon: '/public/mysql.svg' },
                    { name: 'REST API', icon: '/public/rest.svg' },
                  ].map((skill) => (
                    <Card
                      key={skill}
                      component={motion.div}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        minWidth: 'fit-content',
                        flex: '0 1 auto',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: '#00D1FF',
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={skill.icon}
                        alt={skill.name}
                        sx={{
                          width: 32,
                          height: 32,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'text.primary',
                          fontSize: '1rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Card>

              {/* Tools & Others */}
              <Card
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(0, 209, 255, 0.3)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ 
                  mb: 3, 
                  color: '#00D1FF',
                  textAlign: 'center',
                  fontWeight: 600,
                }}>
                  Tools & Others
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'flex-start',
                }}>
                  {[
                    { name: 'Git', icon: '/git.svg' },
                    { name: 'GitHub', icon: '/github.svg' },
                    { name: 'Docker', icon: '/docker.svg' },
                    { name: 'VS Code', icon: '/vscode.svg' },
                  ].map((skill) => (
                    <Card
                      key={skill}
                      component={motion.div}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        minWidth: 'fit-content',
                        flex: '0 1 auto',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: '#00D1FF',
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={skill.icon}
                        alt={skill.name}
                        sx={{
                          width: 32,
                          height: 32,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'text.primary',
                          fontSize: '1rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Card>

              {/* Programming Languages */}
              <Card
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 209, 255, 0.1)',
                    border: '1px solid rgba(0, 209, 255, 0.3)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ 
                  mb: 3, 
                  color: '#00D1FF',
                  textAlign: 'center',
                  fontWeight: 600,
                }}>
                  Programming Languages
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'flex-start',
                }}>
                  {[
                    { name: 'C', icon: '/c.svg' },
                    { name: 'C++', icon: '/c++.png' },
                    { name: 'JavaScript', icon: '/public/javascript.svg' },
                    { name: 'Python', icon: '/public/python.svg' },
                    { name: 'Java', icon: '/public/java.svg' },
                  ].map((skill) => (
                    <Card
                      key={skill}
                      component={motion.div}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        minWidth: 'fit-content',
                        flex: '0 1 auto',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: '#00D1FF',
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={skill.icon}
                        alt={skill.name}
                        sx={{
                          width: 32,
                          height: 32,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'text.primary',
                          fontSize: '1rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Card>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box 
        id="experience"
        sx={{ 
          py: { xs: 8, md: 10 },
          scrollMarginTop: '100px',
          pb: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </Typography>
            {/* Timeline Container */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: '800px',
                margin: '0 auto',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: { xs: '20px', md: '50%' },
                  transform: { md: 'translateX(-50%)' },
                  width: '2px',
                  height: '100%',
                  background: 'linear-gradient(180deg, #00D1FF 0%, #7000FF 100%)',
                },
              }}
            >
              {/* Vice-Admiral Role */}
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: { md: 'flex-end' },
                  position: 'relative',
                  mb: 8,
                  pl: { xs: '50px', md: 0 },
                  pr: { md: '50%' },
                  mr: { md: '30px' },
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    position: 'relative',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: '#00D1FF',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      right: { xs: 'auto', md: '-15px' },
                      left: { xs: '-15px', md: 'auto' },
                      width: '30px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #00D1FF 0%, #7000FF 100%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00D1FF',
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    Vice-Admiral @CPMC
                    (Competitive Programming and Mentorship Club)
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.9rem',
                    }}
                  >
                    2024 - Present
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Leading the Competitive Programming and Mentorship club as Vice-Admiral, 
                    organizing coding contests, mentoring juniors, and fostering a culture of 
                    algorithmic problem-solving.
                  </Typography>
                </Box>
              </Box>

              {/* Gunner Role */}
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  position: 'relative',
                  mb: 8,
                  pl: { xs: '50px', md: '50%' },
                  ml: { md: '30px' },
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    position: 'relative',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: '#00D1FF',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      left: { xs: '-15px', md: '-15px' },
                      width: '30px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #00D1FF 0%, #7000FF 100%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00D1FF',
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    Gunner @CPMC
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.9rem',
                    }}
                  >
                    2023 - 2024
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Appointed as a Gunner in the club after coding contest and interview.Worked on the problem solving skills and now i am leading the club as Vice-Admiral.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Preview Section */}
      <Box 
        id="projects"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '64px',
          pt: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Projects
            </Typography>

            {/* Full Stack Projects */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 4,
                  color: '#00D1FF',
                }}
              >
                Full Stack Projects
              </Typography>
              {/* Full Stack Projects Container */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                <ChevronLeft sx={{ animation: 'swipeHint 2s infinite' }} />
                <Typography variant="caption">
                  Swipe to see more projects
                </Typography>
                <ChevronRight sx={{ animation: 'swipeHint 2s infinite' }} />
              </Box>
              <Box
                id="fullstack-container"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row' },
                  flexWrap: { xs: 'nowrap', md: 'wrap' },
                  gap: 3,
                  overflowX: { xs: 'auto', md: 'visible' },
                  overflowY: 'hidden',
                  pb: { xs: 2, md: 0 },
                  mx: { xs: -2, md: 0 },
                  px: { xs: 2, md: 0 },
                  justifyContent: { md: 'center' },
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  },
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory',
                  position: 'relative',
                  '@keyframes swipeHint': {
                    '0%, 100%': { opacity: 0.3 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                {/* Full Stack Project Cards */}
                {[
                  {
                    title: "FindYourStay",
                    description: "A comprehensive hotel booking platform with user authentication, room management, booking system,payment integration, map integration and many more features.",
                    technologies: ["Node.js", "Express Js", "MongoDB", "Cloudinary","Javascript","ORS api","Oauth2", "Razorpay", "Bootstrap"],
                    github: "https://github.com/Dinesh-dypcoe/FindYourStay",
                    demo: "https://findyourstay-iota.vercel.app/listings",
                    image: "/findyourstay.png"
                  },
                  {
                    title: "नामसिद्धि",
                    description: "नामसिद्धि is an innovative system designed for efficient police record management system which addresses the problem of fuzzy name conversion of hindi names and includes so many features.Here we have designed a hybrid algorithm for fuzzy name conversion which is more accurate than the existing algorithms.",
                    technologies: ["Node.js", "Express Js", "MongoDB", "Javascript","Cloudinary","Tailwind","Bootstrap","Hybrid Algo"],
                    github: "https://github.com/Dinesh-dypcoe/NaamSiddhi",
                    demo: "https://naam-siddhi1.vercel.app/",
                    image: "/naamsiddhi.png"
                  },
                  
                ].map((project, index) => (
                  <Card
                    key={index}
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      flex: { xs: '0 0 100%', sm: '0 0 45%', md: '0 0 30%' },
                      maxWidth: { md: '380px' },
                      scrollSnapAlign: 'start',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: '#00D1FF',
                      }
                    }}
                  >
                    {project.image && (
                      <Box
                        sx={{
                          height: '200px',
                          overflow: 'hidden',
                          position: 'relative',
                          margin: '12px 12px 0',
                          borderRadius: '4px',
                          width: 'calc(100% - 24px)',
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            borderRadius: '4px',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      </Box>
                    )}
                    <Box sx={{ p: 3, pt: project.image ? 2 : 3 }}>
                      <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(0, 209, 255, 0.1)',
                              border: '1px solid rgba(0, 209, 255, 0.2)',
                              color: 'text.primary',
                            }}
                          />
                        ))}
                      </Box>
                      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                        <Button
                          component="a"
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHub />}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'text.primary',
                            '&:hover': {
                              borderColor: '#00D1FF',
                              background: 'rgba(0, 209, 255, 0.1)',
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          component="a"
                          href={project.demo}
                          target="_blank"
                          startIcon={<Launch />}
                          variant="contained"
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #00A3FF 30%, #5200B3 90%)',
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* Frontend Projects */}
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 4,
                  color: '#00D1FF',
                }}
              >
                Frontend Projects
              </Typography>
              {/* Frontend Projects Container */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                <ChevronLeft sx={{ animation: 'swipeHint 2s infinite' }} />
                <Typography variant="caption">
                  Swipe to see more projects
                </Typography>
                <ChevronRight sx={{ animation: 'swipeHint 2s infinite' }} />
              </Box>
              <Box
                id="frontend-container"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row' },
                  flexWrap: { xs: 'nowrap', md: 'wrap' },
                  gap: 3,
                  overflowX: { xs: 'auto', md: 'visible' },
                  overflowY: 'hidden',
                  pb: { xs: 2, md: 0 },
                  mx: { xs: -2, md: 0 },
                  px: { xs: 2, md: 0 },
                  justifyContent: { md: 'center' },
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  },
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory',
                  position: 'relative',
                  '@keyframes swipeHint': {
                    '0%, 100%': { opacity: 0.3 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                {/* Frontend Project Cards */}
                {[
                  {
                    title: "Snake Game",
                    description: "A classic snake game built with modern web technologies, featuring smooth animations and responsive controls.",
                    technologies: ["HTML5", "CSS3", "JavaScript"],
                    github: "https://github.com/Dinesh-dypcoe/SnakeGame",
                    demo: "https://snake-game-two-smoky.vercel.app/",
                    image: "/snakegame.png"
                  },
                  {
                    title: "Rock Paper Scissors",
                    description: "An interactive rock paper scissors game using html,css and javascript",
                    technologies: ["HTML5", "CSS3", "JavaScript"],
                    github: "https://github.com/Dinesh-dypcoe/rock-paper-scissor-game",
                    demo: "https://dinesh-dypcoe.github.io/rock-paper-scissor-game/",
                    image: "/rockpaperscissor.png"
                  },
                  {
                    title: "Amazon Clone",
                    description: "A frontend clone of Amazon's e-commerce platform with product listings and cart functionality.",
                    technologies: ["HTML5", "CSS3"],
                    github: "https://github.com/Dinesh-dypcoe/amazon-clone",
                    demo: "https://dinesh-dypcoe.github.io/amazon-clone/",
                    image: "/amazonclone.png"
                  }
                ].map((project, index) => (
                  <Card
                    key={index}
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      flex: { xs: '0 0 100%', sm: '0 0 45%', md: '0 0 30%' },
                      maxWidth: { md: '380px' },
                      scrollSnapAlign: 'start',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: '#00D1FF',
                      }
                    }}
                  >
                    {project.image && (
                      <Box
                        sx={{
                          height: '200px',
                          overflow: 'hidden',
                          position: 'relative',
                          margin: '12px 12px 0',
                          borderRadius: '4px',
                          width: 'calc(100% - 24px)',
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            borderRadius: '4px',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      </Box>
                    )}
                    <Box sx={{ p: 3, pt: project.image ? 2 : 3 }}>
                      <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(0, 209, 255, 0.1)',
                              border: '1px solid rgba(0, 209, 255, 0.2)',
                              color: 'text.primary',
                            }}
                          />
                        ))}
                      </Box>
                      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                        <Button
                          component="a"
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHub />}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'text.primary',
                            '&:hover': {
                              borderColor: '#00D1FF',
                              background: 'rgba(0, 209, 255, 0.1)',
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          component="a"
                          href={project.demo}
                          target="_blank"
                          startIcon={<Launch />}
                          variant="contained"
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #00A3FF 30%, #5200B3 90%)',
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        id="contact"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              component={motion.h2}
              variants={fadeInUp}
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Contact Me
            </Typography>
            <Box
              component="form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: '600px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <input 
                type="hidden" 
                name="access_key" 
                value={import.meta.env.VITE_WEB3FORMS_KEY}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#00D1FF',
                      },
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#00D1FF',
                      },
                    },
                  }}
                />
              </Box>

              <TextField
                required
                fullWidth
                name="subject"
                label="Subject"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00D1FF',
                    },
                  },
                }}
              />

              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00D1FF',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                disabled={formSubmitted}
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                  boxShadow: '0 4px 14px 0 rgba(0, 209, 255, 0.39)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00A3FF 30%, #5200B3 90%)',
                  },
                  '&:disabled': {
                    background: 'rgba(255, 255, 255, 0.12)',
                    color: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          pt: 1,
          pb: 1.5,
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.25,
              }}
            >
              Made with{' '}
              <Box
                component="span"
                sx={{
                  color: '#ff3366',
                  display: 'inline-block',
                  animation: 'heartbeat 1.5s ease-in-out infinite',
                  '@keyframes heartbeat': {
                    '0%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.1)' },
                    '50%': { transform: 'scale(1)' },
                    '75%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                  },
                }}
              >
                ❤️
              </Box>{' '}
              by Dinesh Aher
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, my: 0.5 }}>
              <IconButton
                component="a"
                href="https://github.com/Dinesh-dypcoe"
                target="_blank"
                sx={{
                  color: 'text.secondary',
                  padding: 0.5,
                  '&:hover': {
                    color: '#00D1FF',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/dineshaher"
                target="_blank"
                sx={{
                  color: 'text.secondary',
                  padding: 0.5,
                  '&:hover': {
                    color: '#00D1FF',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                textAlign: 'center',
                mt: 0.25,
              }}
            >
              © {new Date().getFullYear()} All rights reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 