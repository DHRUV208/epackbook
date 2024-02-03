import { Box, Card, Grid, Typography, FormHelperText } from '@mui/material';
import { Fragment, useState, useMemo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  updateChooseEntity,
  updateName,
  updateMobileNumber,
  updateEmail,
  updateCreatePassword,
  updateRoleType,
  updatePermissions,
  requestToSaveEmployeeEnroll,
  updateRoleChooseEntity,
  updateRoleEntityId,
  updateUserName,
  requestToGetAllEmployeeEnroll
} from '../../../../store/slices/RoleManagementSlice';
import {
  employeeEnrollmentInitialValues,
  addRoleManagementSchema
} from '../../../../common-components/validator/settings-validator/role-management';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericCheckbox from '../../../../common-components/form-elements/genericCheckbox';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericAccordion from '../../../../common-components/page-elements/genericAccordion';
import { requestToGetAllFranchise } from '../../../../store/slices/FranchiseSlice';
import { requestToGetAllBranch } from '../../../../store/slices/BranchSlice';

const BranchData = [
  {
    value: 'branch1',
    label: 'Branch One'
  },
  {
    value: 'barnch2',
    label: 'Branch Two'
  }
];
const FranchiseData = [
  {
    value: 'franchise1',
    label: 'Franchise One'
  },
  {
    value: 'franchise2',
    label: 'Franchise Two'
  }
];

const EntityType = [
  {
    value: 'headOffice',
    label: 'Head Office'
  },
  {
    value: 'branch',
    label: 'Branch'
  },
  {
    value: 'franchise',
    label: 'Franchise'
  }
];

const Data = [
  {
    value: 'HeadOfficeManager',
    label: 'Head Office Manager'
  },
  {
    value: 'EnquiryManager',
    label: 'Enquiry Manager'
  },
  {
    value: 'Surveyor',
    label: 'Surveyor'
  },
  {
    value: 'ShiftingManager',
    label: 'Shifting Manager'
  },
  {
    value: 'BranchManager',
    label: 'Branch Manager'
  },
  {
    value: 'FranchiseManager',
    label: 'Franchise Manager'
  }
];
const DataForModule = [
  {
    value: 'add',
    label: 'Add'
  },
  {
    value: 'view',
    label: 'View'
  },
  {
    value: 'edit',
    label: 'Edit'
  }
];
const module = [
  {
    title: 'Enquiry',
    data: DataForModule
  },
  {
    title: 'Follow Ups',
    data: DataForModule
  },
  {
    title: 'Survey',
    data: DataForModule
  },
  {
    title: 'Quotation',
    data: [
      ...DataForModule,
      {
        value: 'add',
        label: 'Add'
      }
    ]
  },
  {
    title: 'Packing Material',
    data: DataForModule
  },
  {
    title: 'Enquiry Status',
    data: DataForModule
  }
];
const orderModule = [
  {
    title: 'Order',
    data: DataForModule
  },
  {
    title: 'Money Reciept',
    data: DataForModule
  },
  {
    title: 'Car Condition',
    data: DataForModule
  },
  {
    title: 'Bilty',
    data: DataForModule
  },
  {
    title: 'Invoice',
    data: DataForModule
  },
  {
    title: 'Order Status',
    data: DataForModule
  }
];
const customerModule = [
  {
    title: 'Contact Details',
    data: DataForModule
  },
  {
    title: 'Order Details',
    data: DataForModule
  },
  {
    title: 'Car Condition',
    data: DataForModule
  },
  {
    title: 'Bilty',
    data: DataForModule
  },
  {
    title: 'Invoice',
    data: DataForModule
  },
  {
    title: 'Order Status',
    data: DataForModule
  }
];

const list = [
  {
    expanded: 'one',
    title: 'Enquiry Management',

    content: (
      <Fragment>
        <Grid container spacing={2}>
          {module.map((item, i) => (
            <Grid key={i} item xs={12} md={3}>
              <Card sx={{ p: 2, backgroundColor: (theme) => theme.palette.primary.light }}>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <GenericCheckbox list={item.data} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    )
  },
  {
    expanded: 'two',
    title: 'Order Management',
    content: (
      <Fragment>
        <Grid container spacing={2}>
          {orderModule.map((item, i) => (
            <Grid key={i} item xs={12} md={3}>
              <Card sx={{ p: 2, backgroundColor: (theme) => theme.palette.primary.light }}>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <GenericCheckbox list={item.data} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    )
  },
  {
    expanded: 'three',
    title: 'Cutomer Management',
    content: (
      <Fragment>
        <Grid container spacing={2}>
          {customerModule.map((item, i) => (
            <Grid key={i} item xs={12} md={3}>
              <Card sx={{ p: 2, backgroundColor: (theme) => theme.palette.primary.light }}>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <GenericCheckbox list={item.data} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    )
  }
];

const EmployeeEnroll = () => {
  const dispatch = useDispatch();
  const {
    roleManagement: {
      employeeEnrollment: {
        add,
        add: { roleType },
        listEmployeeEnroll,
        apiStatus
      }
    },
    company: { companyDetails },
    branch: { branchList },
    franchise: { franchiseList }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: employeeEnrollmentInitialValues,
    validationSchema: addRoleManagementSchema
  });
  const style = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'spaceBetween',
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '4px',
    color: formik.errors.shiftingLuggage && formik.touched.shiftingLuggage && '#d32f2f'
    // padding: '10px 14px'
  };
  const [gridValue, setGridValue] = useState(4);
  // const onChooseEntityChange = (evt) => {
  //   const value = evt.target.value;
  //   if (value === 'branch') {
  //     setGridValue(3);
  //     setBranchOrFranchiseData(BranchData);
  //     setlabelName('Branch Name');
  //   } else if (value === 'franchise') {
  //     setGridValue(3);
  //     setBranchOrFranchiseData(FranchiseData);
  //     setlabelName('Franchise Name');
  //   } else {
  //     setGridValue(4);
  //   }
  //   dispatch(updateChooseEntity(evt?.target?.value));
  // };

  const [entityList, setEntityList] = useState([]);
  let entities = [];
  const onChooseEntityChange = (evt) => {
    formik.setFieldValue('chooseEntity', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateRoleChooseEntity(value));
    switch (value) {
      case 'franchise':
        dispatch(requestToGetAllFranchise(companyDetails?._id));
        if (franchiseList.length > 0) {
          entities = franchiseList.map((item) => {
            return {
              label: item?.franchiseName,
              value: item?._id
            };
          });
        }
        setGridValue(3);
        setEntityList(entities);
        break;
      case 'branch':
        dispatch(requestToGetAllBranch(companyDetails?._id));
        if (branchList.length > 0) {
          entities = branchList.map((item) => {
            return {
              label: item?.branchName,
              value: item?._id
            };
          });
          setGridValue(3);
          setEntityList(entities);
        }
        break;
      default:
        setGridValue(4);
        setEntityList([]);
        break;
    }
  };

  const onEntityIdChange = (evt) => {
    formik.setFieldValue('entityValue.entityId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateRoleEntityId(value));
  };

  const onNameChange = (evt) => {
    formik.setFieldValue('name', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateName(value));
  };
  const onMobileNumberChange = (evt) => {
    formik.setFieldValue('mobileNumber', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateMobileNumber(value));
  };
  const onEmailChange = (evt) => {
    formik.setFieldValue('email', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateEmail(value));
  };

  const onUserNameChange = (evt) => {
    formik.setFieldValue('userName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUserName(value));
  };

  const onCreatePasswordChange = (evt) => {
    formik.setFieldValue('createPassword', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateCreatePassword(value));
  };
  const onPermissionsChange = (evt) => {
    const { value } = evt.target;
    dispatch(updatePermissions(value));
  };
  const onRoleTypeChange = (evt) => {
    const { value, checked } = evt.target;
    let role = [...roleType];
    if (checked) {
      role.push(value);
    } else {
      role = role.filter((item) => item !== value);
    }
    formik.setFieldValue('roleType', role);
    dispatch(updateRoleType(role));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'entityId',
        headerName: 'Branch Name/Franchise',
        width: 150,
        editable: false,

        renderCell: (data) => {
          const { entityId } = data?.row;
          if (data?.row?.entityType === 'branch' || data?.row?.entityType === 'franchise') {
            const idToBranchNameMap = branchList.filter((item) => {
              if (item?._id === entityId);
              return item;
            });
            return idToBranchNameMap[0]?.branchName;
          } else {
            return 'Head Office';
          }
        }
      },
      {
        field: 'roleType',
        headerName: 'Role Type',
        width: 150,
        editable: false
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: false
      },
      {
        field: 'mobile',
        headerName: 'Mobile',
        width: 150,
        editable: false
      }
    ];
  });

  const onSaveEmployeeEnroll = (evt) => {
    let payload = {
      companyId: companyDetails?._id,
      entityId:
        add?.chooseEntity !== 'head-office'
          ? add?.entityValue?.entityId
          : '655b03e6a2501b7a6cab6cfb',
      roleTypeId: '64d375b6a65cd5cbaa06fb3a',
      entityType: add?.chooseEntity,
      name: add?.name,
      email: add?.email,
      mobile: add?.mobileNumber,
      username: add?.userName,
      password: add?.createPassword,
      authId: companyDetails?.authId,
      createdBy: '64d375b6a65cd5cbaa06fb3a'
    };
    dispatch(requestToSaveEmployeeEnroll(payload));
  };

  useEffect(() => {
    dispatch(requestToGetAllEmployeeEnroll('getAll'));
  }, [apiStatus?.isSaved]);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, background: '#fff ' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
              <GenericDropdown
                onChange={onChooseEntityChange}
                label="Choose Entity"
                value={formik.values.chooseEntity}
                data={[
                  {
                    value: 'head-office',
                    label: 'Head Office'
                  },
                  {
                    value: 'branch',
                    label: 'Branch'
                  },
                  {
                    value: 'franchise',
                    label: 'Franchise'
                  }
                ]}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                error={Boolean(formik?.errors?.chooseEntity) && formik?.touched?.chooseEntity}
              />
              <FormHelperText error>
                {formik?.errors?.chooseEntity &&
                  formik?.touched?.chooseEntity &&
                  formik?.errors?.chooseEntity}
              </FormHelperText>
            </Grid>
            {gridValue !== 4 && (
              <Grid item md={2} xs={12}>
                <GenericDropdown
                  onChange={onEntityIdChange}
                  label="Choose Branch/Franschise"
                  data={entityList}
                  onKeyUp={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  error={
                    Boolean(formik?.errors?.entityValue?.entityId) &&
                    formik?.touched?.entityValue?.entityId
                  }
                />
                <FormHelperText error>
                  {formik?.errors?.entityValue?.entityId &&
                    formik?.touched?.entityValue?.entityId &&
                    formik?.errors?.entityValue?.entityId}
                </FormHelperText>
              </Grid>
            )}
            <Grid item md={gridValue} xs={12}>
              <GenericInput
                error={formik.errors.name && formik.touched.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={formik.errors.name && formik.touched.name && formik.errors.name}
                onKeyUp={onNameChange}
                // required
                label="Name"
              />
            </Grid>
            <Grid item md={gridValue} xs={12}>
              <GenericInput
                onKeyUp={onMobileNumberChange}
                error={formik.errors.mobileNumber && formik.touched.mobileNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.errors.mobileNumber &&
                  formik.touched.mobileNumber &&
                  formik.errors.mobileNumber
                }
                // required
                label="Mobile Number"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onKeyUp={onEmailChange}
                error={formik.errors.email && formik.touched.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={formik.errors.email && formik.touched.email && formik.errors.email}
                label="Email"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onKeyUp={onUserNameChange}
                error={formik.errors.email && formik.touched.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={formik.errors.email && formik.touched.email && formik.errors.email}
                label="Username"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onKeyUp={onCreatePasswordChange}
                error={formik.errors.createPassword && formik.touched.createPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.errors.createPassword &&
                  formik.touched.createPassword &&
                  formik.errors.createPassword
                }
                label="Create Password"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={style}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666666',
                    marginRight: '20px',
                    marginTop: '10px',
                    marginLeft: '15px'
                  }}
                >
                  Role Type *
                </Typography>
                <GenericCheckbox
                  onClick={onRoleTypeChange}
                  list={Data}
                  style={{ display: 'block' }}
                />
              </Box>
              <FormHelperText error>
                {formik?.errors?.roleType && formik?.touched?.roleType && formik?.errors?.roleType}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} sx={{ my: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Allow Permissions
              </Typography>

              <GenericAccordion onChange={onPermissionsChange} list={list} />
            </Grid>

            <Grid item md={12} xs={12}>
              <GenericLoadingButton
                onClick={onSaveEmployeeEnroll}
                sx={{ my: 2, float: 'right' }}
                type="submit"
              >
                <span>Submit</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listEmployeeEnroll?.map((item, index) => ({
                  ...item,
                  id: index + 1
                }))}
                columns={columns}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Fragment>
  );
};
export default EmployeeEnroll;
