import React, { Fragment } from 'react';

import GenericTabs from '../../../../common-components/page-elements/genericTabs';
import { Box, Grid } from '@mui/material';
import GenericSwitch from '../../../../common-components/form-elements/genericSwitch';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const Gallery = (props) => {
  const { list } = props;

  return (
    <Fragment>
      {list?.length &&
        list?.map((item) => {
          return (
            <Fragment>
              <h4 className="categoryHeading">{item?.templateType}</h4>
              <Grid container spacing={2} {...props}>
                {item?.data?.map((list, index) => (
                  <Grid key={index} item md={3}>
                    <Box sx={{ border: '4px solid #1565c0', borderRadius: '5px' }}>
                      <Box className="TempImage">
                        <img src={list?.image} alt={list?.image} />
                      </Box>
                      <Box className="ImgDesc">
                        <Box sx={{ background: '#eee' }}>
                          <GenericSwitch start="Off" end="On" />
                        </Box>
                        <p>
                          <DashboardCustomizeIcon /> {list?.templateName}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          );
        })}
    </Fragment>
  );
};

const list = [
  {
    label: 'Quotation Gallery',
    type: 'quotation',
    templates: [
      {
        templateType: 'Free',
        data: [
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template One'
          },
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template Two'
          }
        ]
      },
      {
        templateType: 'Pro',
        data: [
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template One'
          },
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template Two'
          }
        ]
      }
    ]
  },
  {
    label: 'Invoice Gallery',
    type: 'invoice',
    templates: [
      {
        templateType: 'Free',
        data: [
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template One'
          },
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template Two'
          }
        ]
      },
      {
        templateType: 'Pro',
        data: [
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template One'
          },
          {
            image:
              'https://epackbook-public.s3.ap-south-1.amazonaws.com/essentials/Template+Previews/Invoice.png',
            templateName: 'Glory Quotation Template Two'
          }
        ]
      }
    ]
  }
];

const stack = list.map((ele) => {
  return {
    ...ele,
    child: <Gallery list={ele?.templates} />
  };
});

const TemplateGallery = () => {
  return (
    <Fragment>
      <GenericTabs list={stack} />
    </Fragment>
  );
};

export default TemplateGallery;
