import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PersonIcon from '@mui/icons-material/Person';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
export const SHIFTING_TYPES_CONSTANTS = [
  { label: 'Local', value: 'LOCAL' },
  { label: 'Domestic', value: 'DOMESTIC' }
];

export const BILLING_BY = [
  { label: 'By Individual', value: 'by Individual' },
  { label: 'By Company', value: 'by Company' }
];
export const APPROVAL_AUTHORTY = [{ label: 'Admin', value: 'admin' }];

export const MODULES = [
  { label: 'QUOTATION', value: 'quotation' },
  { label: 'INVOICE', value: 'invoice' },
  { label: 'CAR CONDITION', value: 'carCondition' },
  { label: 'MONEY RECIEPT', value: 'moneyReciept' },
  { label: 'BILTY', value: 'bilty' }
];

export const SUBSCRIPTION_PLANS = [
  { label: 'Basic Plan', value: 'basicPlan' },
  { label: 'Pro Plan', value: 'proPlan' },
  { label: 'Pro PlusPlan', value: 'proPlusPlan' }
];
export const MENU_ITENS = [
  {
    icon: <DashboardIcon />,
    label: 'Dashboard',
    index: 1,
    nestedItems: []
  },
  {
    icon: <CorporateFareIcon />,
    label: 'Branch',
    index: 2,
    nestedItems: [
      { icon: <AddBusinessIcon />, label: 'Add Branch', index: 3, path: '/erp/branch' },
      { icon: <PostAddIcon />, label: 'List Branch', index: 4, path: '/erp/branch/list' }
    ]
  },
  {
    icon: <CorporateFareIcon />,
    label: 'Franchise',
    index: 5,
    nestedItems: [
      { icon: <AddBusinessIcon />, label: 'Add Franchise', index: 6, path: '/erp/franchise' },
      { icon: <PostAddIcon />, label: 'List Franchise', index: 7, path: '/erp/franchise/list' }
    ]
  },
  {
    icon: <GroupsIcon />,
    label: 'Customers',
    index: 8,
    nestedItems: [
      {
        icon: <SupportAgentIcon />,
        label: 'Customer Details',
        index: 9,
        path: '/erp/customer/detail'
      },
      { icon: <ListAltIcon />, label: 'List Customer', index: 10, path: '/erp/customer' },
      { icon: <RequestQuoteIcon />, label: 'Demo Request', index: 11, path: '/super/demo-request' },
      { icon: <FormatListBulletedIcon />, label: 'Vendor List', index: 12, path: '/super/vendors' }
    ]
  },
  {
    icon: <HelpCenterIcon />,
    label: 'Enquiry',
    index: 13,
    nestedItems: [
      { icon: <AddCircleIcon />, label: 'Add Enquiry', index: 13, path: '/erp/enquiry' },
      { icon: <ReceiptLongIcon />, label: 'List Enquiry', index: 14, path: '/erp/enquiry/list' }
    ]
  },

  {
    icon: <ShoppingCartIcon />,
    label: 'Orders',
    index: 15,
    nestedItems: [
      { icon: <PostAddIcon />, label: 'Add Order', index: 16, path: '/erp/order' },
      { icon: <ListAltIcon />, label: 'List Order', index: 17, path: '/erp/order/list' },
      
    ]
  },
  {
    icon: <ShoppingCartIcon />,
    label: 'Checkout',
    index: 27,
    nestedItems: [
      {
        icon: <ListAltIcon />,
        label: 'Checkout',
        index: 52,
        path: '/erp/checkout/checkout'
      },
      {
        icon: <ListAltIcon />,
        label: 'Payment Success',
        index: 52,
        path: '/erp/success/success'
      },
      {
        icon: <ListAltIcon />,
        label: 'Payment Failed',
        index: 52,
        path: '/erp/failed/failed'
      }
    ]
  },
  {
    icon: <ShoppingCartIcon />,
    label: 'Checkout',
    index: 27,
    nestedItems: [
      {
        icon: <ListAltIcon />,
        label: 'Checkout',
        index: 52,
        path: '/erp/checkout/checkout'
      },
      {
        icon: <ListAltIcon />,
        label: 'Payment Success',
        index: 52,
        path: '/erp/success/success'
      },
      {
        icon: <ListAltIcon />,
        label: 'Payment Failed',
        index: 52,
        path: '/erp/failed/failed'
      }
    ]
  },

  {
    icon: <PeopleAltIcon />,
    label: 'Settings',
    index: 18,
    nestedItems: [
      {
        icon: <RequestQuoteIcon />,
        label: 'Account Management',
        index: 19,
        path: '/super/shared'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'App Configuration',
        index: 20,
        path: '/super/shared/app-setting'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'Content Management',
        index: 21,
        path: '/super/shared/content-management'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'Role Management',
        index: 22,
        path: '/super/shared/role-management'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'Shifting Management',
        index: 23,
        path: '/super/shared/shifting-management'
      },

      {
        icon: <RequestQuoteIcon />,
        label: 'User Management',
        index: 24,
        path: '/super/shared/user-management'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'Vehicle Management',
        index: 25,
        path: '/super/shared/vehicle-management'
      },

      {
        icon: <RequestQuoteIcon />,
        label: 'Template Management',
        index: 26,
        path: '/super/shared/template-management'
      },
      {
        icon: <RequestQuoteIcon />,
        label: 'Subscription Plan Management',
        index: 27,
        path: '/super/shared/subscription-plan-management'
      }
    ]
  }
];
