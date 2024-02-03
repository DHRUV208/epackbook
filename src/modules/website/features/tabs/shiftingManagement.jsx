import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const shiftingManagement = () => {
  return (
    <Fragment>
      <Box>
        <Typography mt={2} variant="h6" sx={{ textAlign: 'left' }} component={'h6'}>
          Shifting Management
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          Here are some key features of effective shift management:
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>1. Scheduling : </b>Ability to create and manage schedules for multiple shifts and
          locations.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>2. Time and Attendance Tracking : </b>Ability to track employee clock-in and clock-out
          times, absences and lateness.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>3.Communication :</b> A platform for clear and efficient communication between
          managers, employees and stakeholders.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>4.Real-time Monitoring: </b> Ability to monitor shifts in real-time and make
          adjustments as needed.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>5. Reporting and Analytics :</b> Access to real-time data and reports for decision
          making and continuous improvement.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>6. Task Management :</b> Ability to assign tasks to employees and track their progress.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>7.Mobile Accessibility : </b> Access to the platform via mobile devices to manage
          shifts and tasks on the go.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>8.Integrations : </b> Integration with other systems and tools, such as payroll or HR
          software.
        </Typography>
        <Typography mt={2} variant="body1" component={'p'}>
          <b>9.Cost Management : </b> Ability to track and manage labor costs, including overtime
          and scheduling.
        </Typography>
      </Box>
    </Fragment>
  );
};

export default shiftingManagement;
