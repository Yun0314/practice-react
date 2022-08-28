import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const white = '#fff';
const green = '#74a674';
const lightGreen = '#87d431';

const SlideButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  padding: '4px 18px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: `${green}`,
  '& + .MuiButtonBase-root': {
    marginLeft: '16px'
  },
  '&.Mui-disabled': {
    color: 'rgba(0, 0, 0, 0.9)',
    backgroundColor: `${green}`
  },
  '&:hover': {
    backgroundColor: `${lightGreen}`,
    borderColor: `${green}`,
    boxShadow: 'none'
  },
  '&:active': {
    backgroundColor: `${green}`,
    borderColor: `${white}`,
    boxShadow: 'none'
  }
});

export { SlideButton };
