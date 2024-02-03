import { Fragment } from 'react';
import Header from '../common-components/header';
import { Grid, Typography, Box, Container } from '@mui/material';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GarageIcon from '@mui/icons-material/Garage';
import MailIcon from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import Footer from '../common-components/footer';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Box sx={{ background: '#212b36', padding: '50px 10px' }}>
        <Grid container>
          <Grid md={12} item>
            <Box>
              <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }} component="h2">
                ePackBook Offer Relocation Companies to be Online
              </Typography>
              <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }} component="h2">
                To Manage Packers and Movers Business
              </Typography>
            </Box>
            <Grid container sx={{ justifyContent: 'center', my: 4 }}>
              <GenericLoadingButton sx={{ margin: '10px' }}>REGISTER FOR DEMO</GenericLoadingButton>
              <GenericLoadingButton sx={{ margin: '10px' }}>
                GET A FREE ACCOUNT
              </GenericLoadingButton>
            </Grid>
            <Box>
              <Typography
                variant="h4"
                sx={{ textAlign: 'center', color: 'white', margin: '20px 0' }}
                component="h2"
              >
                A Complete Solution For Movers and Packers Company
              </Typography>
              <Typography style={{ textAlign: 'center', color: 'white' }} variant="body1">
                ePackBook is a powerful Packers and Movers Software to manage entire day to day
                operations Like.
              </Typography>
              <Typography mt={1} style={{ textAlign: 'center', color: 'white' }} variant="body1">
                Manage Packers Enquiries - Add Enquiry, Set Survey, Follow Ups Date & Time, Create
                and Share Quotations, Manage Shiftings - Comments,
              </Typography>
              <Typography mt={1} style={{ textAlign: 'center', color: 'white' }} variant="body1">
                Create & Share Bilty, Money Receipt, Car Conditions, Packing Slip & Invoice, Manage
                Customers, Download Reports.
              </Typography>
              <Typography mt={1} style={{ textAlign: 'center', color: 'white' }} variant="body1">
                ePackBook is a Cloud Based Software with High Data Security features. it can be used
                on any Device. Free Training & Support Available 24x7
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container className="d-none-sm" sx={{ padding: '15px 0' }}>
        <Grid md={2} item>
          <Box sx={{ background: '#00a1e6' }} className="moduleDesigns">
            Bilty Module
          </Box>
        </Grid>
        <Grid md={2} item>
          <Box sx={{ background: '#ffa200' }} className="moduleDesigns">
            Quotation Module
          </Box>
        </Grid>
        <Grid md={2} item>
          <Box sx={{ background: '#ff4900' }} className="moduleDesigns">
            Money Receipt Module
          </Box>
        </Grid>
        <Grid md={2} item>
          <Box sx={{ background: '#00a1e6' }} className="moduleDesigns">
            Car Condition Module
          </Box>
        </Grid>
        <Grid md={2} item>
          <Box sx={{ background: '#ffa200' }} className="moduleDesigns">
            Invoice Module
          </Box>
        </Grid>
        <Grid md={2} item>
          <Box sx={{ background: '#ff4900' }} className="moduleDesigns">
            Packing List Module
          </Box>
        </Grid>
      </Grid>
      <Box className="afterBefore">
        <Typography variant="h5" mt={3}>
          Features
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ py: 5 }} fixed={true.toString()}>
          <Grid md={3} xs={12} item>
            <Box className="cards">
              <Box sx={{ height: '200px', width: '200px' }}>
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/images/enquiryManagement.svg"
                  alt="abc"
                />
              </Box>
              <ul className="detailsUl">
                <Typography variant="subtitle1" component={'h6'} sx={{ color: '#1a76d2' }}>
                  ENQUIRY MANAGEMENT
                </Typography>
                <li>Add Enquiry & Process</li>
                <li>Update Enquiry info on Call</li>
                <li>Set Follow Ups with Comment</li>
                <li>Set Survey Date & Time</li>
                <li>Create & Share Quotation</li>
              </ul>
              <GenericLoadingButton sx={{ my: 3 }}>Read more</GenericLoadingButton>
            </Box>
          </Grid>
          <Grid md={3} xs={12} item>
            <Box className="cards">
              <Box sx={{ height: '200px', width: '200px' }}>
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/images/paperLessDocuments.svg"
                  alt="abc"
                />
              </Box>
              <ul className="detailsUl">
                <Typography variant="subtitle1" component={'h6'} sx={{ color: '#1a76d2' }}>
                  PAPERLESS DOCUMENTS
                </Typography>
                <li>Create & Share Quotations</li>
                <li>Create & Share Bilty</li>
                <li>Create & Share Invoice</li>
                <li>Create & Share Money Receipt</li>
                <li>Create & Share Car Condition</li>
              </ul>
              <GenericLoadingButton sx={{ my: 3 }}>Read more</GenericLoadingButton>
            </Box>
          </Grid>
          <Grid md={3} xs={12} item>
            <Box className="cards">
              <Box sx={{ height: '200px', width: '200px' }}>
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/images/shiftingManagement.svg"
                  alt="abc"
                />
              </Box>
              <ul className="detailsUl">
                <Typography variant="subtitle1" component={'h6'} sx={{ color: '#1a76d2' }}>
                  SHIFTING MANAGEMENT
                </Typography>
                <li>Shifting Status Update</li>
                <li>Add New Shifting Details</li>
                <li>Create Shifting Documents</li>
                <li>Comments - Shifting Requirements</li>
                <li>Assign Shifting Manager</li>
              </ul>
              <GenericLoadingButton sx={{ my: 3 }}>Read more</GenericLoadingButton>
            </Box>
          </Grid>
          <Grid md={3} xs={12} item>
            <Box className="cards">
              <Box sx={{ height: '200px', width: '200px' }}>
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/images/customerManagement.svg"
                  alt="abc"
                />
              </Box>
              <ul className="detailsUl">
                <Typography variant="subtitle1" component={'h6'} sx={{ color: '#1a76d2' }}>
                  CUSTOMER MANAGEMENT
                </Typography>
                <li>Automatic Customer Update</li>
                <li>Past Shifting Details</li>
                <li>Powerful Search Options</li>
                <li>Unique Customer ID</li>
                <li>Unique Shifting ID</li>
              </ul>
              <GenericLoadingButton sx={{ my: 3 }}>Read more</GenericLoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="afterBefore" my={5}>
        <Typography variant="h5">Premium Features</Typography>
      </Box>
      <Box className="prParent">
        <Grid container spacing={4}>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/powerfulReports.71bb0146e86aaa5f8dc8277c64bc8863.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Powerfull Reports
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/automaticEmails.3e9116de2f9ef2d8ae0135e2c8275deb.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Automatic Emails
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/mobileApp.355205725b2d0fd38f1b57e380ff3991.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Mobile App
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/quickReminder.022b58310fa11ffd83332e015f12beba.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Quick Reminders
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/multiTemplate.f9a17ebf89f9d7053fb9841520dff365.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Multi Template
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box className="allCenter">
              <Box className="PremiumFeatures">
                <img
                  width={'100%'}
                  src="https://www.epackbook.in/static/media/multipalBranches.d14adc2406df545b6164706292eb1900.svg"
                  alt="abc"
                />
              </Box>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                Multi Branches
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid container spacing={8} style={{ padding: '50px 0' }}>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <GarageIcon style={{ marginRight: '20px' }} /> Shifting Management
              </Typography>
              <li>You can handle Approved Shifting Management process in a systematic manner.</li>
              <li>One click status change from enquiry to approved order</li>
              <li>
                Add shifting date, Truck load, Token amount, Pickup & Drop Address, Consignment No.
                etc.
              </li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <MailIcon style={{ marginRight: '20px' }} /> Mail Communication
              </Typography>
              <li>System generated mails will send to clients.</li>
              <li>Unlimited mails to unlimited clients</li>
              <li>Thanks giving mails (after call to client)</li>
              <li>Informatics mails (Survey Date and Time with surveyor Details )</li>
              <li>Informatics mails (booking id with confirmation)</li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <PeopleAltIcon style={{ marginRight: '20px' }} /> User Friendly Dashboard
              </Typography>
              <li>Today follow ups Details.</li>
              <li>Today Approved Shifting Details</li>
              <li>Upcoming Survey Details</li>
              <li>Enquiry Progress Details</li>
              <li>Recent Orders Details</li>
              <li>Recent Delivered Orders Details</li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <EqualizerIcon style={{ marginRight: '20px' }} /> Process Tracking
              </Typography>
              <li>Each enquiry is tracked by calls, mails, status, comments etc.</li>
              <li>End to End process (enquiry to delivered goods)</li>
              <li>Auto Notifications Enabled</li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <DevicesOutlinedIcon style={{ marginRight: '20px' }} /> Multi Devices
              </Typography>
              <li>ePackBook can be used on all available devices.</li>
              <li>Computers – Mobiles – Tabs – Android & App Store</li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <ul className="detailsUl">
              <Typography
                variant="h6"
                component={'h6'}
                sx={{ color: '#1a76d2', display: 'flex', alignItems: 'center' }}
              >
                {' '}
                <DocumentScannerOutlinedIcon style={{ marginRight: '20px' }} /> Powerful Reports
              </Typography>
              <li>Download Today’s Task</li>
              <li>Download all enquiries, Approved Shiftings, All Customers</li>
              <li>Download Shifting types – Local – Domestic – International</li>
              <li>Duration Specified Reports Download</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
