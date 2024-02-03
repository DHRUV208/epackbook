import { AspectRatio } from '@mui/joy';
import { Card, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import image from '../../Assets/Images/loginImg.svg';

const TemplateCard = () => {
  return (
    <Fragment>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 1.5, mt: 4, display: 'flex', alignItems: 'top', gap: '20px' }}>
          <AspectRatio variant="solid" ratio="1" sx={{ minWidth: 70, borderRadius: 10 }}>
            <div>
              <img src={image} alt="template-img" style={{ width: '100%' }} />
            </div>
          </AspectRatio>
          <Typography variant="h6">Household</Typography>
        </Card>
      </Grid>
    </Fragment>
  );
};
export default TemplateCard;
