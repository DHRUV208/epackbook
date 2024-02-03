import { Fragment } from 'react';
import GenericTab from '../../../common-components/page-elements/genericTabs';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import AddTemplate from './add-template/AddTemplate';

import TemplateGallery from './template-gallery/TemplatesGallery';

const tabStack = [
  {
    label: 'Add Template',
    child: <AddTemplate />
  },
  {
    label: 'Template Gallery',
    child: <TemplateGallery />
  }
];
const TemplateManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Template Setting'} />
      <GenericTab list={tabStack} />
    </Fragment>
  );
};
export default TemplateManagement;
