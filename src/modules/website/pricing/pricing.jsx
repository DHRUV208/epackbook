import { Fragment } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid } from '@mui/material';
import GenericPricingCard from '../../../common-components/page-elements/genericPricingCard';

const freePlanPricing = [
  {
    duration: 'Only',
    actualPrice: '₹1000',
    discountedPrice: 'Free',
    discount: 'For Beta Version'
  }
];
const plusPlanPricing = [
  {
    duration: '6 Months',
    actualPrice: '₹2200',
    discountedPrice: '₹1800'
  },
  {
    duration: '12 Months',
    actualPrice: '₹4000',
    discountedPrice: '₹3000'
  }
];
const proPlanPricing = [
  {
    duration: '6 Months',
    actualPrice: '₹6000',
    discountedPrice: '₹4500'
  },
  {
    duration: '12 Months',
    actualPrice: '₹12000',
    discountedPrice: '₹10500'
  }
];
const unlimitedPlanPricing = [
  {
    duration: '6 Months',
    actualPrice: '₹18500',
    discountedPrice: '₹16000'
  },
  {
    duration: '12 Months',
    actualPrice: '₹35000',
    discountedPrice: '₹28000'
  }
];
const FreePlan = [
  {
    label: 'Enquiry Management System',
    value: [
      'Add Enquiry',
      'Update Enquiry Details',
      'Set Followups / Reminders',
      'Set Survey / Reminders',
      'Survey List',
      'Add Packing Materials'
    ],
    mark: true
  },
  {
    label: 'Quotation Module',
    value: ['Basic Design', '5 Quotation/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Order Management System',
    value: ['Add Order', 'Update Order Details'],
    mark: true
  },
  {
    label: 'Money Receipt',
    value: ['Basic Design', '5 Money Receipt/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Car Condition Paper',
    value: ['Basic Design', '5 Car Condition/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Bilty/LR/Consignment',
    value: ['Basic Design', '5 Bilty/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Packing List',
    value: ['Basic Design', '5 Packing List/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Invoice',
    value: ['Basic Design', '5 Invoice/Per Month', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Customer Management System',
    value: ['Customer Details Past Shiftings'],
    mark: true
  },
  {
    label: 'Staff Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Branch Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Franchise Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Vehicle Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Refer & Earn Benefits',
    value: [''],
    mark: false
  },
  {
    label: 'Support',
    value: ['Basic'],
    mark: true
  },
  {
    label: 'Reports',
    value: [''],
    mark: false
  }
];

const BasicPlan = [
  {
    label: 'Enquiry Management System',
    value: [
      'Add Enquiry',
      'Update Enquiry Details',
      'Set Followups / Reminders',
      'Set Survey / Reminders',
      'Survey List',
      'Add Packing Materials',
      'Assign Task'
    ],
    mark: true
  },
  {
    label: 'Quotation Module',
    value: ['Basic Design + Creative Design', 'Unlimited Quotation', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Order Management System',
    value: ['Add Order', 'Update Order Details'],
    mark: true
  },
  {
    label: 'Money Receipt',
    value: ['Basic + Creative Design', ' Unlimited Money Receipt', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Car Condition Paper',
    value: ['Basic + Creative Design', 'Unlimited Car Condition', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Bilty/LR/Consignment',
    value: ['Basic + Creative Design', 'Unlimited Bilty', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Packing List',
    value: [' Basic + Creative Design', 'Unlimited Packing List', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Invoice',
    value: [' Basic + Creative Design', 'Unlimited Invoice', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Customer Management System',
    value: ['Customer Details Past Shiftings'],
    mark: true
  },
  {
    label: 'Staff Management System',
    value: ['Head Office Staff Management'],
    mark: true
  },
  {
    label: 'Branch Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Franchise Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Vehicle Management System',
    value: [],
    mark: false
  },
  {
    label: 'Refer & Earn Benefits',
    value: ['Yes'],
    mark: true
  },
  {
    label: 'Support',
    value: ['Basic'],
    mark: true
  },
  {
    label: 'Reports',
    value: ['Basic'],
    mark: true
  }
];

const Pro = [
  {
    label: 'Enquiry Management System',
    value: [
      'Add Enquiry',
      'Update Enquiry Details',
      'Set Followups / Reminders',
      'Set Survey / Reminders',
      'Survey List',
      'Add Packing Materials',
      'Assign Task'
    ],
    mark: true
  },
  {
    label: 'Quotation Module',
    value: [
      'Basic + Creative + Premium Design',
      'Unlimited Quotation',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Order Management System',
    value: ['Add Order', 'Update Order Details'],
    mark: true
  },
  {
    label: 'Money Receipt',
    value: [
      'Basic + Creative + Premium Design',
      ' Unlimited Money Receipt',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Car Condition Paper',
    value: [
      'Basic + Creative + Premium Design',
      'Unlimited Car Condition',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Bilty/LR/Consignment',
    value: ['Basic + Creative + Premium Design', 'Unlimited Bilty', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Packing List',
    value: [
      'Basic + Creative + Premium Design',
      'Unlimited Packing List',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Invoice',
    value: ['Basic + Creative + Premium Design', 'Unlimited Invoice', 'Create/Edit/Share/Download'],
    mark: true
  },
  {
    label: 'Customer Management System',
    value: ['Customer Details', 'Past Shiftings'],
    mark: true
  },
  {
    label: 'Staff Management System',
    value: ['HO/Branch Staff'],
    mark: true
  },
  {
    label: 'Branch Management System',
    value: ['5 Branch'],
    mark: true
  },
  {
    label: 'Franchise Management System',
    value: [''],
    mark: false
  },
  {
    label: 'Vehicle Management System',
    value: ['Add Lorry', 'Add Drivers', 'Lorry Docs. Renewal Reminders'],
    mark: true
  },
  {
    label: 'Refer & Earn Benefits',
    value: ['Yes'],
    mark: true
  },
  {
    label: 'Support',
    value: ['Advance'],
    mark: true
  },
  {
    label: 'Reports',
    value: ['Advance'],
    mark: true
  }
];

const Unlimited = [
  {
    label: 'Enquiry Management System',
    value: [
      'Add Enquiry',
      'Update Enquiry Details',
      'Set Followups / Reminders',
      'Set Survey / Reminders',
      'Survey List',
      'Add Packing Materials',
      'Assign Task'
    ],
    mark: true
  },
  {
    label: 'Quotation Module',
    value: [
      'Basic + Creative + Premium + Custom Design',
      'Unlimited Quotation',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Order Management System',
    value: ['Add Order', 'Update Order Details'],
    mark: true
  },
  {
    label: 'Money Receipt',
    value: [
      'Basic + Creative + Premium + Custom Design',
      ' Unlimited Money Receipt',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Car Condition Paper',
    value: [
      'Basic + Creative + Premium + Custom Design',
      'Unlimited Car Condition',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Bilty/LR/Consignment',
    value: [
      'Basic + Creative + Premium + Custom Design',
      'Unlimited Bilty',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Packing List',
    value: [
      ' Basic + Creative + Premium + Custom Design',
      'Unlimited Packing List',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Invoice',
    value: [
      'Basic + Creative + Premium + Custom Design',
      'Unlimited Invoice',
      'Create/Edit/Share/Download'
    ],
    mark: true
  },
  {
    label: 'Customer Management System',
    value: ['Customer Details', 'Past Shiftings'],
    mark: true
  },
  {
    label: 'Staff Management System',
    value: ['HO/Branch/Franchise Staff'],
    mark: true
  },
  {
    label: 'Branch Management System',
    value: ['Unlimited'],
    mark: true
  },
  {
    label: 'Franchise Management System',
    value: ['Unlimited'],
    mark: true
  },
  {
    label: 'Vehicle Management System',
    value: ['Add Lorry', 'Add Drivers', 'Lorry Docs. Renewal Reminders'],
    mark: true
  },
  {
    label: 'Refer & Earn Benefits',
    value: ['Yes'],
    mark: true
  },
  {
    label: 'Support',
    value: ['Dedicated'],
    mark: true
  },
  {
    label: 'Reports',
    value: ['Advance'],
    mark: true
  }
];

const pricing = () => {
  return (
    <Fragment>
      <Header />
      <Breadcumb title="Pricing" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12} lg={3}>
            <GenericPricingCard
              color="#fff"
              amount="0"
              helpingtext=""
              data={FreePlan}
              plan="ePackBook Basic"
              pricing={freePlanPricing}
            />
          </Grid>
          <Grid item md={3} xs={12} lg={3}>
            <GenericPricingCard
              color="#fff"
              plan="ePackBook Plus"
              amount="0"
              helpingtext=""
              data={BasicPlan}
              pricing={plusPlanPricing}
            />
          </Grid>
          <Grid item md={3} xs={12} lg={3}>
            <GenericPricingCard
              color="#fff"
              plan="ePackBook Pro"
              amount="0"
              helpingtext=""
              data={Pro}
              pricing={proPlanPricing}
            />
          </Grid>
          <Grid item md={3} xs={12} lg={3}>
            <GenericPricingCard
              color="#fff"
              plan="ePackBook Unlimited"
              amount="0"
              helpingtext=""
              data={Unlimited}
              pricing={unlimitedPlanPricing}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default pricing;
