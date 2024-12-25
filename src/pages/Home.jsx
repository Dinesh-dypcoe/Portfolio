import { Container, Typography, Box, Button, Card, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, GitHub, Launch } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
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
                  mb: 2,
                }}
              >
                Hi there! 👋
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                sx={{ 
                  display: 'flex',
                  gap: '0.5em',
                  flexWrap: 'wrap',
                }}
              >
                {"I am Dinesh Aher".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      y: [20, 0, 0, 20],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      display: 'inline-block',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #00D1FF 30%, #7000FF 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      cursor: 'default'
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </Box>
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
                Passionate about creating beautiful and functional web experiences. 
                Specialized in building modern web applications with cutting-edge technologies.
              </Typography>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to="/projects"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
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
              {/* Experience */}
              <Box>
                <Typography sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.7,
                  textAlign: { xs: 'center', sm: 'center' },
                  maxWidth: '800px',
                  margin: '0 auto',
                }}>
                  With over [X] years of experience in full-stack development, 
                  I've worked on various projects ranging from e-commerce platforms 
                  to real-time applications. I'm passionate about creating scalable 
                  and maintainable solutions.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box 
        id="skills"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
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
            {/* Add your experience timeline or cards here */}
          </motion.div>
        </Container>
      </Box>

      {/* Projects Preview Section */}
      <Box 
        id="projects"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
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
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { 
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                  },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {[
                  {
                    title: "E-Commerce Platform",
                    description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
                    technologies: ["React", "Node.js", "MongoDB", "Express"],
                    github: "https://github.com/username/ecommerce",
                    demo: "https://ecommerce-demo.com"
                  },
                  {
                    title: "Task Management App",
                    description: "A collaborative task management application with real-time updates and team collaboration features.",
                    technologies: ["React", "Firebase", "Node.js", "MongoDB"],
                    github: "https://github.com/username/taskapp",
                    demo: "https://taskapp-demo.com"
                  },
                  {
                    title: "Social Media Platform",
                    description: "A social networking platform with real-time chat, post sharing, and user interactions.",
                    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
                    github: "https://github.com/username/social",
                    demo: "https://social-demo.com"
                  }
                ].map((project, index) => (
                  <Card
                    key={index}
                    component={motion.div}
                    whileHover={{ y: -10 }}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ p: 3 }}>
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
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { 
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                  },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {[
                  {
                    title: "Portfolio Website",
                    description: "A modern portfolio website built with React and Material-UI, featuring smooth animations and responsive design.",
                    technologies: ["React", "Material-UI", "Framer Motion"],
                    github: "https://github.com/username/portfolio",
                    demo: "https://portfolio-demo.com"
                  },
                  {
                    title: "Weather Dashboard",
                    description: "A weather dashboard that shows current weather and forecasts using external API integration.",
                    technologies: ["React", "Tailwind CSS", "Weather API"],
                    github: "https://github.com/username/weather",
                    demo: "https://weather-demo.com"
                  },
                  {
                    title: "Movie Browser",
                    description: "A responsive movie browsing application with search, filtering, and detailed movie information.",
                    technologies: ["React", "CSS3", "TMDB API"],
                    github: "https://github.com/username/movies",
                    demo: "https://movies-demo.com"
                  }
                ].map((project, index) => (
                  <Card
                    key={index}
                    component={motion.div}
                    whileHover={{ y: -10 }}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ p: 3 }}>
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

      {/* Add Contact Section */}
      <Box 
        id="contact"
        sx={{ 
          py: { xs: 8, md: 15 },
          scrollMarginTop: '100px',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" sx={{ /* ... existing styles ... */ }}>
              Contact Me
            </Typography>
            {/* Add your contact form or content here */}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 