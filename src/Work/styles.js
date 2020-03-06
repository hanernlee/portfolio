import { Color } from '../color.js';

export const styles = {
  containerWork: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'space-evenly',
    justifyContent: 'center',
    minHeight: '100vh',
    height: '100%',
    width: '1200px',
    margin: '0 auto',
    padding: '30px',
    '@media (max-width: 1201px)': {
      width: '100%',
    },
    '@media (max-width: 739px)': {
      padding: '30px 15px',
    }
  },
  baseWork: {
    backgroundColor: Color.blue,
    height: '300px',
    margin: '30px 20px',
    flex: '1 1 300px',
    overflow: 'hidden',
    '@media (max-width: 709px)': {
      width: '100%'
    }
  },
  hidden: {
    display: 'none',
  }
}
