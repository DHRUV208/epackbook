import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const GenericTimeline = (props) => {
  const theme = useTheme();
  let { data = [] } = props;
  return (
    <Timeline position="alternate">
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {/* {item?.date} */}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ background: theme.palette.primary.dark }} variant="filled">
                  <MailIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography>{item?.date}</Typography>
                <Typography variant="h6" component="span">
                  {item?.heading}
                  <Typography>{item?.message}</Typography>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </React.Fragment>
        );
      })}
    </Timeline>
  );
};
export default GenericTimeline;
