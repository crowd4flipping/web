import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TbArrowBigDownLines,TbArrowBigUpLines } from "react-icons/tb";

export default function VerticalLinearStepper({steps}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, paddingLeft: '5px' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
            <h3   
              style={{
                fontSize: '1rem',
                color: '#00c3ff'
              }} 
            >
              {step.label}
            </h3>
            </StepLabel>
            <StepContent>
              <Typography
                style={{
                  fontSize: '.9rem',
                  color: '#333333'
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    style={{
                        backgroundColor: '#00c3ff',
                        color: '#fff'
                    }}
                  >
                    {index === steps.length - 1 ? 'Finish' : <TbArrowBigDownLines  style={{
                      color: '#fff',
                      fontSize: '1.5rem'
                    }} />}
                  </Button>
                  {activeStep != 0 && (
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      style={{
                          color: '#00c3ff',
                          fontSize: '1.5rem'
                      }}
                    >
                      <TbArrowBigUpLines />
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Así de sencillo puedes rentabilizar tu dinero en un mercado solido.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
