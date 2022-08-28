import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const white = '#fff';
const green = '#74a674';
const lightGreen = '#87d431';

const TodoTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    fontSize: 16,
    padding: '8px 12px'
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: `${white}`,
    '& fieldset': {
      borderColor: `${white}`
    },
    '&:hover fieldset': {
      borderColor: `${lightGreen}`
    },
    '&.Mui-focused fieldset': {
      borderColor: `${lightGreen}`
    }
  },
  '& .MuiSvgIcon-root': {
    color: '#e6e6e6'
  }
});

const TodoButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  marginLeft: '6px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: `${green}`,
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

const TodoToggleButtonGroup = styled(ToggleButtonGroup)({
  justifyContent: 'center',
  fontSize: 16,
  marginBottom: '18px',
  '& .MuiToggleButton-root': {
    backgroundColor: `${white}`,
    maxWidth: '150px',
    width: '100%',
    '&.Mui-selected': {
      color: `${white}`,
      backgroundColor: `${green}`,
      borderColor: `${white}`,
      '&:hover': {
        color: `${white}`,
        backgroundColor: `${lightGreen}`,
        borderColor: `${white}`
      }
    },
    '&:hover': {
      color: `${white}`,
      backgroundColor: `${lightGreen}`,
      borderColor: `${white}`
    }
  }
});

const TodoCheckbox = styled(Checkbox)({
  color: `${white}`,
  '&.Mui-checked': {
    color: `${lightGreen}`
  }
});

export { TodoTextField, TodoButton, TodoToggleButtonGroup, TodoCheckbox };
