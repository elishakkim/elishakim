import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import {
  Stepper,
  Step,
  StepButton,
  Typography,
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import './style.scss'

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      text: {
        fontSize: '11px'
      },
    },
    MuiSvgIcon: {
      root: {
        '& circle': {
          r: '8'
        },
        width: '34px',
        height: '34px'
      }
    },
    MuiStepLabel: {
      labelContainer: {
        '& div': {
          fontSize: '16px'
        }
      }
    }
  }
});

function getSteps() {
  return ['About Me', 'Resume', 'My Work'];
}

const StepperBar = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const completed = {};
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Redirect to='/' />;
      case 1:
        return <Redirect to='/resume' />;
      case 2:
        return <Redirect to='/work' />;
      default:
        return 'Unknown step';
    }
  }

  return (
    <div className='stepper'>
      <MuiThemeProvider theme={muiTheme}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) =>
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              <div className='step-label'>
                {label}
              </div>
            </StepButton>
          </Step>
        )}
      </Stepper>
      </MuiThemeProvider>
      <div>
        {
          <div>
            <Typography component={'span'}>{getStepContent(activeStep)}</Typography>
          </div>
        }
      </div>
    </div>
  )
}

export default StepperBar