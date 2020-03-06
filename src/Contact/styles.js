import { Color } from '../color.js';

export const styles = {
  baseContact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  profileImage: {
    backgroundImage: 'url(/round.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.3) 10px 10px 20px',
    marginRight: '20px',
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
  },
  profileDesc: {
    paddingTop: '20px',
  },
  about: {
    color: Color.white,
    lineHeight: '30px',
    padding: '0 20px',
    width: '700px',
    '@media (max-width: 760px)': {
      width: '100%'
    }
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
  },
  social: {
    backgroundColor: Color.white,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: Color.green,
    transition: '0.3s ease color',
    boxShadow: 'rgba(0, 0, 0, 0.3) 10px 10px 20px',
    margin: '0 10px',
    '&:hover': {
      color: Color.purple
    }
  },
  purple: {
    color: Color.purple
  },
  green: {
    color: Color.green
  },
  pink: {
    color: Color.pink
  }
}
