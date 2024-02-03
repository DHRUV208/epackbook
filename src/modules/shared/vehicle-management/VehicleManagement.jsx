import { Fragment } from 'react';

import VehicleAccessory from './vehicle-accessories/VehicleAccessories';
import VehicleType from './vehicle-type/VehicleType';
import VehicleSize from './vehicle-size/VehicleSize';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import VehicleColor from './vehicle-color/VehicleColor';
import VehicleCompany from './vehicle-company/VehicleCompany';
import VehicleInsurcanceCompany from './vehicle-insurance-company/VehicleInsurcanceCompany';
import VehicleModel from './vehicle-model/VehicleModel';
import Driver from './driver/Driver';
import {
  updateVehicleType,
  requestToSaveVehicleType,
  requestToGetAllVehicleType
} from '../../../store/slices/VehicleManagementSlice';
import Vehicle from './vehicle/Vehicle';


const tabStack = [
  {
    label: 'Vehicle',
    child: <Vehicle />
  },
  {
    label: 'Vehicle Driver',
    child: <Driver />
  },
  {
    label: 'Vehicle Type',
    child: <VehicleType />
  },
  {
    label: 'Vehicle Company',
    child: <VehicleCompany />
  },
  {
    label: 'Vehicle Load Size',
    child: <VehicleSize />
  },
  {
    label: 'Vehicle Model',
    child: <VehicleModel />
  },
  {
    label: 'Vehicle Accessory',
    child: <VehicleAccessory />
  },
  {
    label: 'Vehicle Color',
    child: <VehicleColor />
  },
  {
    label: 'Vehicle Insurance Company',
    child: <VehicleInsurcanceCompany />
  }
];

const VechileManagement = () => {

  return (
    <Fragment>
      <SubHeader title={'Vehicle Management'} />
      <GenericTab list={tabStack} />  
    </Fragment>
  );
};
export default VechileManagement;
