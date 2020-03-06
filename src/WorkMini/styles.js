import { Color } from '../color.js';

export const styles = {
  baseWorkMini: {
    width: '100%',
    height: '100%',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      opacity: '0.4',
      backgroundImage: props => `linear-gradient(45deg, ${Color.lightPurple} 0%, ${Color.lightPurple} 40%, ${Color.lightPink} 100%), url(${props.work.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.35s ease',
      transform: 'scale(1.5)',
      cursor: 'pointer',
    },
    '&:hover': {
      '&:before': {
        transform: 'scale(1)',
        backgroundImage: props => `linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${props.work.image})`,
        opacity: '1',
      },
      '& $info': {
        opacity: '1',
        transform: 'translateY(0px)'
      }
    },
  },
  info: {
    width: '100%',
    height: '50px',
    padding: '12px',
    transition: '0.30s ease all',
    backgroundColor: Color.lightestPink,
    position: 'absolute',
    bottom: '0',
    opacity: '0',
    transform: 'translateY(50px)',
    display: 'flex',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconContainer: {
    marginLeft: 'auto',
    display: 'flex',
    height: '100%',
    '& .fa': {
      color: Color.green
    }
  },
  miniTitle: {
    color: Color.white,
    fontWeight: 'bold'
  },
  miniMeta: {
    color: Color.white,
    fontSize: '12px'
  }
}
