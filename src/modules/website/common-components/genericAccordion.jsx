import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function GenericAccordion(props) {
  const { data } = props;
  return (
    <div>
      {data?.map((data, index) => {
        return (
          <React.Fragment>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography key={index}>{data.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography key={index}>{data.text}</Typography>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        );
      })}
    </div>
  );
}
