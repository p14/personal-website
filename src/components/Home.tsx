import React from 'react';
import { Avatar, Box, Button, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Check, CodeOutlined, DataObjectOutlined, StorageOutlined } from '@mui/icons-material';
import { aboutMeBio, aboutMeImage, aboutMeStyles, aboutMeText, aboutMeTitle, skillCardAvatar, skillCardCheck, skillCardStyles, skillCardTitle, skillSetStyles } from '../styles/home.styles';

const Home: React.FC = () => {

  const workLink = (
    <Link href='https://inquired.org' target='_blank' sx={{ color: 'inherit' }}>
      inquirED
    </Link>
  );

  const aboutMe = (
    <Box sx={{ backgroundColor: '#41A4F5' }}>
      <Box sx={aboutMeStyles}>
        <Box component='img' src='/PFP2.jpg' sx={aboutMeImage} />
        <Box sx={aboutMeBio}>
          <Typography variant='body1' sx={aboutMeText}>
            Hello, my name is
          </Typography>
          <Typography variant='h4' sx={aboutMeTitle}>
            Joseph Perez
          </Typography>
          <Typography variant='body1' sx={aboutMeText}>
            I am a passionate full-stack developer based out of Seattle, Washington. I am currently working at {workLink}. I have professional experience in designing, developing, and maintaining scalable web applications using a range of technologies and programming languages.
          </Typography>
          <Button variant='contained' href='mailto:joseph@p14.dev' sx={{ margin: '1rem 0' }}>
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );

  const frontendTech = ['TypeScript', 'JavaScript', 'React.js', 'Redux', 'MaterialUI', 'HTML5', 'CSS3'];
  const backendTech = ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'Inversify.js', 'MongoDB', 'Ruby on Rails', 'PostgreSQL', 'GraphQL'];
  const miscTech = ['AWS', 'Docker', 'Redis', 'Postman', 'Unit Testing', 'Figma'];

  const skillSet = (
    <Box sx={skillSetStyles}>
      <Box sx={skillCardStyles}>
        <Avatar sx={skillCardAvatar}>
          <CodeOutlined sx={{ height: 40, width: 40 }} />
        </Avatar>
        <Typography variant='h6' sx={skillCardTitle}>
          Frontend
        </Typography>
        <List>
          {frontendTech.map((item) => (
            <ListItem key={'Frontend' + item} disablePadding>
              <Check fontSize='small' sx={skillCardCheck} />
              &nbsp;
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={skillCardStyles}>
        <Avatar sx={skillCardAvatar}>
          <DataObjectOutlined sx={{ height: 40, width: 40 }} />
        </Avatar>
        <Typography variant='h6' sx={skillCardTitle}>
          Backend
        </Typography>
        <List>
          {backendTech.map((item) => (
            <ListItem key={'Backend' + item} disablePadding>
              <Check fontSize='small' sx={skillCardCheck} />
              &nbsp;
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={skillCardStyles}>
        <Avatar sx={skillCardAvatar}>
          <StorageOutlined sx={{ height: 40, width: 40 }} />
        </Avatar>
        <Typography variant='h6' sx={skillCardTitle}>
          Other
        </Typography>
        <List>
          {miscTech.map((item) => (
            <ListItem key={'Misc' + item} disablePadding>
              <Check fontSize='small' sx={skillCardCheck} />
              &nbsp;
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box>
      {aboutMe}
      {skillSet}
    </Box>
  );
}

export default Home;
