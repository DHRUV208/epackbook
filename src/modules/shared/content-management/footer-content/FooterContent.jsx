import { Grid, FormHelperText } from '@mui/material';

import React, { Fragment, useEffect, useMemo, useCallback, useState } from 'react';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import GenericTextEditor from '../../../../common-components/form-elements/genericTextEditor';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericCheckbox from '../../../../common-components/form-elements/genericCheckbox';
import Toasty from '../../../../common-components/form-elements/toasty';

import { useFormik } from 'formik';
import {
  updateFooterContentAccountType,
  updateFooterContentTitle,
  updateFooterContentInputField,
  requestToSaveFooterContent,
  requestToGetAllFooterContent,
  resetFooterContentApiStatus,
  resetFooterContent,
  requestToGetAllSubModule,
  requestDeleteFooterContent,
  resetFooterContentDeleteStatus
} from '../../../../store/slices/ContentManagementSlice';
import {
  footerContentInitialValues,
  footerContentValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
import GenericAction from '../../../../common-components/form-elements/genericAction';
const ContentType = [
  {
    value: 'Terms And Conditions',
    label: 'Terms And Conditions'
  },
  {
    value: 'Notes',
    label: 'Notes'
  },
  {
    value: 'Payment Terms',
    label: 'Payment Terms'
  },
  {
    value: 'Remarks',
    label: 'Remarks'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

const FooterContent = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const dispatch = useDispatch();
  const [footerContentData, setFooterContentData] = useState('');
  const {
    contentManagement: {
      footerContent: { add, listFooterContent, apiStatus },
      subModules: { listSubModules = [] }
    },
    auth: { loginSuccess },
    company: { companyDetails }
  } = useSelector((state) => state);
  const formik = useFormik({
    initialValues: footerContentInitialValues,
    validationSchema: footerContentValidationSchema
  });

  const [gridShow, setGridShow] = useState('');

  const onFooterContentAccountTypeChange = (evt) => {
    formik.setFieldValue('chooseAccountType', evt?.target?.value);
    evt.target.value === 'Other' ? setGridShow('visible') : setGridShow('invisible');
    dispatch(updateFooterContentAccountType(evt?.target?.value));
  };
  const onFooterContentTitleChange = (evt) => {
    formik.setFieldValue('title', evt?.target?.value);
    dispatch(updateFooterContentTitle(evt?.target?.value));
  };
  const onFooterContentInputFieldChange = () => {
    dispatch(updateFooterContentInputField(footerContentData));
  };
  const [subModuleList, setSubModuleList] = useState([]);
  const onSubModuleChange = (evt) => {
    let submodule = subModuleList;
    if (!submodule.includes(evt.target.value) && evt.target.checked) {
      submodule.push(evt.target.value);
    } else if (submodule.includes(evt.target.value) && !evt.target.checked) {
      const index = submodule.indexOf(evt.target.value);
      submodule.splice(index, 1);
    }
    setSubModuleList(submodule);
  };
  const onSaveFooterContentHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      moduleId: subModuleList,
      contentType: add.chooseAccountType === 'Other' ? add.title : add.chooseAccountType,
      content: footerContentData
    };
    // console.log(payload)
    // setTimeout(() => {
    //   // formik.handleReset();
    //   dispatch(reset());
    // }, 1000);
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveFooterContent(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Footer Content');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetFooterContent());
    dispatch(requestToGetAllSubModule());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllFooterContent());
  }, [apiStatus?.isSaved]);

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteFooterContent(data?._id));
  };

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Footer Content Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetFooterContent());
          setIsMessageDisplay(false);
          setFooterContentData('');
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetFooterContentApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllFooterContent(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Registration Details  Deleted');
      setTimeout(() => {
        dispatch(resetFooterContentDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetFooterContentDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'moduleId',
        headerName: 'Module',
        width: 150,
        editable: false
      },
      {
        field: 'contentType',
        headerName: 'Content Type',
        width: 150,
        editable: false
      },
      {
        field: 'content',
        headerName: 'Content',
        width: 150,
        editable: false
      },

      {
        field: '',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericAction data={data?.row} onDeleteHandler={(data) => onDeleteHandler(data)} />
          );
        }
      }
    ];
  }, []);
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GenericDropdown
              onChange={onFooterContentAccountTypeChange}
              label={'Choose Type'}
              data={ContentType}
              error={formik.errors?.chooseAccountType && formik.touched?.chooseAccountType}
              onBlur={formik.handleBlur}
              onKeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              value={formik?.values?.chooseAccountType}
            />
            <FormHelperText error>
              {formik.errors?.chooseAccountType &&
                formik.touched?.chooseAccountType &&
                formik.errors?.chooseAccountType}
            </FormHelperText>
          </Grid>
          {gridShow === 'visible' && (
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onFooterContentTitleChange}
                label={'Add Title'}
                error={formik.errors?.title && formik.touched?.title}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.title}
              />
              <FormHelperText error>
                {formik.errors?.title && formik.touched?.title && formik.errors?.title}
              </FormHelperText>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              alignItems: 'center',
              border: '1px solid #CACACA',
              ml: 2,
              mt: 2,
              borderRadius: '5px',
              p: '0px 0px 0px 16px !important'
            }}
          >
            <GenericCheckbox
              onChange={onSubModuleChange}
              list={listSubModules
                ?.filter((obj) => obj.availableOnDocument === true)
                .map((item) => {
                  return {
                    value: item?.subModuleName,
                    label: item?.subModuleName
                  };
                })}
              style={{ display: 'block' }}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericTextEditor
              value={footerContentData}
              onKeyUp={onFooterContentInputFieldChange}
              onChange={setFooterContentData}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton
              sx={{ my: 3, float: 'right' }}
              type="submit"
              onClick={onSaveFooterContentHandler}
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            {Array.isArray(listFooterContent) && (
              <>
                <GenericDataGrid
                  rows={listFooterContent
                    ?.filter((item) => !item.isDeleted)
                    ?.map((item, index) => ({ ...item, id: index + 1 }))}
                  columns={columns}
                />
              </>
            )}
          </Grid>
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default FooterContent;
