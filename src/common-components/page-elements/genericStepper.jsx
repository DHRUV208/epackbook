import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Stack } from '@mui/material';
import GenericLoadingButton from '../form-elements/genericLoadingButton';

const GenericStepper = (props) => {
  const { stepList } = props;

  const [activeStep, setActiveStep] = useState(0);

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
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="horizontal">
        {stepList?.length > 0 &&
          stepList?.map((step, index) => (
            <Step key={step?.label}>
              <StepLabel
                optional={
                  index === stepList?.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step?.label}
              </StepLabel>
              <StepContent>
                {step?.content}
                <Box sx={{ mb: 2 }}>
                  <Stack direction={'row'}>
                    <GenericLoadingButton onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                      {index === stepList.length - 1 ? 'Finish' : 'Continue'}
                    </GenericLoadingButton>
                    <GenericLoadingButton
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </GenericLoadingButton>
                  </Stack>
                </Box>
              </StepContent>
            </Step>
          ))}
      </Stepper>
      {activeStep === stepList.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <GenericLoadingButton onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            <span>Reset</span>
          </GenericLoadingButton>
        </Paper>
      )}
    </Box>
  );
};

export default GenericStepper;
