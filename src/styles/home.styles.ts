const aboutMeStyles = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  margin: 'auto',
  maxWidth: '1200px',
  padding: '2rem 0',
  width: '95%',
};

const aboutMeImage = {
  alignSelf: 'center',
  borderRadius: 2,
  margin: 5,
  maxHeight: 300,
  maxWidth: 300,
};

const aboutMeBio = {
  textAlign:
  {
    xs: 'center',
    md: 'left',
  },
  flexGrow: 1,
  margin: {
    xs: 2,
    md: 5,
  },
};

const aboutMeTitle = {
  color: '#FFF',
  margin: '5px 0',
  fontWeight: 600,
};

const aboutMeText = {
  color: '#FFF',
};

const skillSetStyles = {
  display: {
    xs: 'block',
    md: 'flex',
  },
  margin: 'auto',
  maxWidth: '1200px',
  padding: {
    xs: '0',
    md: '4rem 0',
  },
  width: {
    xs: '75%',
    md: '95%',
  },
};

const skillCardStyles = {
  backgroundColor: '#EDEDED',
  borderRadius: 2,
  boxShadow: '0px 4px 8px -2px rgb(0 0 0 / 20%)',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  margin: {
    xs: '5rem auto',
    md: '2rem 1rem',
  },
  maxWidth: '400px',
  padding: '0 2rem 2rem 2rem',
};

const skillCardAvatar = {
  alignSelf: 'center',
  backgroundColor: '#41A4F5',
  marginTop: -4,
  height: 75,
  width: 75,
};

const skillCardTitle = {
  alignSelf: 'center',
  fontWeight: 500,
  margin: '1.5rem 0 1rem 0',
};

const skillCardCheck = {
  color: '#41A4F5',
  marginRight: 1,
};

export {
  aboutMeStyles,
  aboutMeImage,
  aboutMeBio,
  aboutMeTitle,
  aboutMeText,
  skillSetStyles,
  skillCardStyles,
  skillCardAvatar,
  skillCardTitle,
  skillCardCheck,
};
