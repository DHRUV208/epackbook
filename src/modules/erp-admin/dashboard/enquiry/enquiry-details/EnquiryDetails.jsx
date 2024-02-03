import GenericTab from '../../../../../common-components/page-elements/genericTabs';
import AddFollowUp from '../../followups/add-follow-up/AddFollowUp';
import SurveyForm from '../../survey/add-survey/AddSurvey';
import AddQuotation from '../../quotation/add-quotation/AddQuotation';
import QuotationList from '../../quotation/quotation-list/QuotationList';
import GenericBreadcrum from '../../../../../common-components/form-elements/genericBreadcrum';
import { Box, Grid, Paper } from '@mui/material';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import Material from '../../survey/survey-form-components/Material';
import { useDispatch } from 'react-redux';
import {
  requestToUpdateEnquiry,
  updateEnquiryStatus
} from '../../../../../store/slices/EnquirySlice';
import { useNavigate, useParams } from 'react-router-dom';
import EditEnquiry from '../edit-enquiry/EditEnquiry';
import { Fragment } from 'react';
import GenericStatusChanger from '../../../../../common-components/page-elements/genericStatusChanger';
// import Survey from '../../survey';
import Survey from '../../survey/setSurvey-surveyList-form-disp';

const tabList = (enquiryId) => {
  return [
    {
      label: 'Details',
      child: <EditEnquiry enquiryId={enquiryId} />
    },
    {
      label: 'Follow-Ups',
      child: <AddFollowUp enquiryId={enquiryId} />
    },
    {
      label: 'Survey',
      child: <Survey enquiryId={enquiryId} />
    },
    {
      label: 'Create Quotation',
      child: <AddQuotation enquiryId={enquiryId} />
    },
    {
      label: 'Quotation List',
      child: <QuotationList enquiryId={enquiryId} />
    },
    {
      label: 'Packing Material',
      child: <Material enquiryId={enquiryId} />
    }
  ];
};

const EnquiryDetails = () => {
  const dispatch = useDispatch();
  const { id: enquiryId } = useParams();
  const onEnquiryStatusChange = (evt) => {
    const status = evt.target.value == 'approved' ? 'NEW ORDER' : evt.target.value.toUpperCase();
    dispatch(requestToUpdateEnquiry({ status: status, enquiryId }));
  };

  return (
    <Fragment>
      <GenericStatusChanger onStatusChange={onEnquiryStatusChange} />
      <Grid container spacing={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid item xs={12}>
          <GenericTab list={tabList(enquiryId)} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default EnquiryDetails;
