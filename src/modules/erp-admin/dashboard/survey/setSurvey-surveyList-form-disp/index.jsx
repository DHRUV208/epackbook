import { Box, Button, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import SurveyForm from '../survey';
import SurveyItemList from '../survey-form-components/SurveyList';

const Survey = ({ enquiryId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonLabels = ['Set Survey', 'Survey Item List'];

  const handleCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Box sx={{ pl: 4 }}>
        {buttonLabels.map((e, i) => {
          const btnStyle =
            currentIndex == i
              ? { borderColor: '#01579B', color: '#01579B' }
              : { borderColor: 'grey', color: 'grey' };
          return (
            <Button
              variant="outlined"
              onClick={() => {
                handleCurrentIndex(i);
              }}
              style={btnStyle}
              sx={{ mr: 2 }}
            >
              <Typography>{e}</Typography>
            </Button>
          );
        })}
      </Box>
      {currentIndex == 0 ? (
        <SurveyForm enquiryId={enquiryId} />
      ) : (
        <SurveyItemList enquiryId={enquiryId} />
      )}
    </>
  );
};

export default Survey;
