import React, { Fragment } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckImg from '../../Assets/Images/check.svg';
import XImg from '../../Assets/Images/x.svg';
import {
  Typography,
  InputLabel,
  MenuItem,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Select,
  Accordion,
  Box
} from '@mui/material';

const GenericPricingCard = (props) => {
  const { plan, pricing, helpingtext, amount, data = [], color, getNow } = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Fragment>
      <div className="pricingBox">
        <div className="slotOne" style={{ background: color }}>
          <Typography variant="h5" sx={{ fontFamily: 'system-ui' }}>
            {plan}
          </Typography>
          <Typography> {helpingtext} </Typography>
        </div>
        <div className="duration">
          <Select
            fullWidth
            size="small"
            color="info"
            defaultValue={pricing[0]?.duration}
            className="asdsadf"
          >
            {pricing?.map((_) => {
              return (
                <MenuItem key={_} value={_?.duration}>
                  <Box className="menuItems">
                    <Box className="menuItemsPrice">
                      <Box>
                        <small>{_?.actualPrice}</small>
                      </Box>
                      <Box>
                        <h3>{_?.discountedPrice}</h3>
                      </Box>
                    </Box>
                    <Box className="menuItemsDescount">
                      <h4>{_?.duration}</h4>
                      <h4>{_?.discount}</h4>
                    </Box>
                  </Box>
                </MenuItem>
              );
            })}
          </Select>
          {/* <GenericDropdown
          sx={{color:"info"}}
          value=""
      data={[
        {
          value:'',
          label:<Box className='menuItems'>
          <Box className="planPrice">
            <small>₹1600</small>
            <Typography variant="h6">₹1400</Typography>
          </Box>
          <Box className='planDiscount'>
            <Typography variant="h6">6 Months</Typography>
            <Typography variant="h6"> 50%</Typography>
          </Box>
          </Box>
        }
      ]}
          /> */}
        </div>
        <div className="slotThree">
          {data.map((item, index) =>
            item.mark === true ? (
              <Accordion index={index} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div className="content">
                    {item.mark === true ? (
                      <img width="20" height="20" src={CheckImg} alt="" />
                    ) : (
                      <img width="20" height="20" src={XImg} alt="" />
                    )}
                    <p className="txtFont">{item.label}</p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul style={{ paddingLeft: '15px' }}>
                    {item.value.map((val, i) => {
                      return (
                        <Typography variant="body1" component={'p'} key={i}>
                          <li className="listitem" style={{ color: '#6b6969' }} key={i}>
                            {val}
                          </li>
                        </Typography>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Accordion index={index} key={index} style={{ pointerEvents: 'none' }}>
                <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                  <div className="content">
                    {item.mark === true ? (
                      <img width="20" height="20" src={CheckImg} alt="" />
                    ) : (
                      <img width="20" height="20" src={XImg} alt="" />
                    )}
                    <p className="txtFont">{item.label}</p>
                  </div>
                </AccordionSummary>
              </Accordion>
            )
          )}
        </div>
        {/* <GenericLoadingButton className='btnSlot'>Get Now</GenericLoadingButton> */}
        <div className="btnSlot">
          <div className="btn" onClick={getNow}>
            get now
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GenericPricingCard;
