import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment } from 'react';
import GenericCheckbox from '../form-elements/genericCheckbox';
const GenericAccordion = (props) => {
  const { list } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      {list.length > 0 &&
        list.map((item, i) => (
          <Accordion
            key={i}
            expanded={expanded === item?.expanded}
            onChange={handleChange(item?.expanded)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '20%', flexShrink: 0 }}>
                <GenericCheckbox
                  list={[
                    {
                      value: item?.title,
                      label: item?.title
                    }
                  ]}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{item?.content?.props?.children}</AccordionDetails>
          </Accordion>
        ))}
    </Fragment>
  );
};
export default GenericAccordion;
