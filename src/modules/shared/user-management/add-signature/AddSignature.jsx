import { Card, Grid, FormHelperText } from '@mui/material';
import { Fragment, useState } from 'react';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericSignaturePad from '../../../../common-components/form-elements/genericSignaturePad';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  userManagementInitialValues,
  addUserManagementValidationSchema
} from '../../../../common-components/validator/settings-validator/user-settings/';
import {
  updateSignatureType,
  updateRoleType,
  updateNameOfEmployee,
  requestToSaveUserSign
} from '../../../../store/slices/UserSettingSlice';
import GenericImagePicker from '../../../../common-components/form-elements/genericImagePicker';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';

const EmployeName = [
  {
    value: 'admin',
    label: 'Sonu'
  },
  {
    value: 'headOfficeManager',
    label: 'Vishal'
  },
  {
    value: 'enquiryManager',
    label: 'Rohit'
  },
  {
    value: 'surveyor',
    label: 'Sarita'
  },
  {
    value: 'shiftingManager',
    label: 'Babli'
  }
];
const RoleType = [
  {
    value: 'admin',
    label: 'Admin'
  },
  {
    value: 'headOfficeManager',
    label: 'Head Office Manager'
  },
  {
    value: 'enquiryManager',
    label: 'Enquiry Manager'
  },
  {
    value: 'surveyor',
    label: 'Surveyor'
  },
  {
    value: 'shiftingManager',
    label: 'Shifting Manager'
  }
];

const SignatureType = [
  {
    value: 'digitalSignature',
    label: 'Digital Signature'
  },
  {
    value: 'uploadSignatureImage',
    label: 'Upload Signature image'
  }
];

const AddSignature = () => {
  const dispatch = useDispatch();
  const {
    userSetting: { addSignature },
    vehicleManagement: { addVehicleAccessory },
    auth: { loginSuccess }
  } = useSelector((state) => state);
  const onSignatureTypeChange = (evt) => {
    formik.setFieldValue('signatureType', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateSignatureType(value));
  };
  const onRoleTypeChange = (evt) => {
    formik.setFieldValue('roleType', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateRoleType(value));
  };
  const onNameOfEmployeeChange = (evt) => {
    formik.setFieldValue('nameOfEmployee', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateNameOfEmployee(value));
  };
  const [imageWidth, setImageWidth] = useState('100%');
  const [signatureImage, setSignatureImage] = useState(
    'https://t4.ftcdn.net/jpg/00/00/42/95/240_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg'
  );
  const getImage = (data) => {
    console.log(data?.imageUrl);
    const img = new Image();
    img.src = data?.imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const compressedData = reader.result;
            // getImageUrl(btoa(compressedData));
            // console.log(compressedData)

            setSignatureImage(compressedData);
            setImageWidth(data?.width);
          };
        },
        'image/jpeg',
        0.7
      );
    };
  };

  const onSaveUserSignatureHandler = () => {
    let payload = {
      vehicleAccessory: addVehicleAccessory?.value,
      createdBy: loginSuccess?.id
    };
    dispatch(requestToSaveUserSign(payload));
  };

  const formik = useFormik({
    initialValues: userManagementInitialValues,
    validationSchema: addUserManagementValidationSchema
  });
  return (
    <Fragment>
      <Card sx={{ p: 3 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onSignatureTypeChange}
                label={'Choose Signature Type'}
                data={SignatureType}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addSignature?.signatureType &&
                  formik?.touched?.addSignature?.signatureType
                }
              />
              <FormHelperText error>
                {formik.errors.addSignature?.signatureType &&
                  formik.touched.addSignature?.signatureType &&
                  formik.errors.addSignature?.signatureType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onRoleTypeChange}
                label={'Role Type'}
                data={RoleType}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addSignature?.roleType && formik?.touched?.addSignature?.roleType
                }
              />
              <FormHelperText error>
                {formik.errors.addSignature?.roleType &&
                  formik.touched.addSignature?.roleType &&
                  formik.errors.addSignature?.roleType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onNameOfEmployeeChange}
                label={'Name of Employe'}
                data={EmployeName}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addSignature?.nameOfEmployee &&
                  formik?.touched?.addSignature?.nameOfEmployee
                }
              />
              <FormHelperText error>
                {formik.errors.addSignature?.nameOfEmployee &&
                  formik.touched.addSignature?.nameOfEmployee &&
                  formik.errors.addSignature?.nameOfEmployee}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {addSignature?.signatureType === 'uploadSignatureImage' && (
                  <Grid item md={4} xs={12}>
                    <GenericImagePicker getImageUrl={() => console.log()} sx={{ width: '100%' }} />
                  </Grid>
                )}
                {addSignature?.signatureType !== 'uploadSignatureImage' && (
                  <Fragment>
                    <Grid item md={4} xs={12}>
                      <GenericSignaturePad getImage={getImage} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <img
                        src={signatureImage}
                        height={165}
                        width={imageWidth}
                        alt=""
                        loading="lazy"
                      />
                    </Grid>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton onClick={onSaveUserSignatureHandler} sx={{ float: 'right' }}>
              <span>save</span>
            </GenericLoadingButton>
          </Grid>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddSignature;
