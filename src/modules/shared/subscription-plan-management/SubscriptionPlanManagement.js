import { Fragment } from "react";
import CreateSubscriptionPlan from "./create-subscription-plan/CreateSubscriptionPlan";
import SubHeader from "../../../common-components/page-elements/SubHeader";
import { Grid } from "@mui/material";
import GenericTab from "../../../common-components/page-elements/genericTabs";
import ListSubscriptionPlan from "./list-subscription-plan/ListSubscriptionPlan";

const menuList = [
  {
    label: 'Create Subscription Plan',
    child: <CreateSubscriptionPlan/>
  },
  {
    label: 'List Subscription Plan',
    child: <ListSubscriptionPlan />
  },
  
];
const SubscriptionPlanManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Subscription Plan Management'} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GenericTab list={menuList} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default SubscriptionPlanManagement;
