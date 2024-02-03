import { Grid, Stack, Typography } from '@mui/material';
import GenericCheckbox from '../form-elements/genericCheckbox';
import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import GenericDropdown from '../form-elements/genericDropdown';
import GenericInput from '../form-elements/genericInput';
import GenericAdditionalFromFreight from './genericAdditionalFromFreight';
import { useSelector } from 'react-redux';
import GenericAutocomplete from '../form-elements/genericAutocomplete';
import GenericLoadingButton from '../form-elements/genericLoadingButton';
import {
  addQuotationInitialValues,
  addQuotationValidationSchema
} from '../../common-components/validator/quotation-validation';
import { useFormik } from 'formik';
const GenericFreightForm = (props) => {
  const {
    onLoadChangeHandler,
    onLorryTypeChangeHandler,
    onFreightChargeChangeHandler,
    onPackingChargeTypeChangeHandler,
    onPackingChargeChangeHandler,
    onUnPackingChargeTypeChangeHandler,
    onUnpackingChargeChangeHandler,
    onPackingMaterialTypeChangeHandler,
    onPackingMaterialChargeChangeHandler,
    onLoadingTypeChangeHandler,
    onLoadingChargeChangeHandler,
    onUnloadingTypeChangeHandler,
    onUnloadingChargeChangeHandler,
    onLoadingLoadedBy,
    onLoadingFloor,
    onLoadingLiftStatus,
    onUnloadingLoadedBy,
    onUnloadingFloor,
    onUnloadingLiftStatus,
    onExtraJobRateChange,
    onExtraJobChargeChange,
    onExtraJobTypeQuantityChange,
    onExtraJobTypeChange,
    submitJobType,
    fullRate,
    fullAmount,
    partAmount,
    partrate,
    quantity,
    jobType
  } = props;

  const formik = useFormik({
    initialValues: addQuotationInitialValues?.addQuotation?.freight
  });

  const {
    addQuotation: { freight, details }
  } = useSelector((state) => state.quotation);
  const loadType = [
    {
      label: details.shiftingLuggage === 'vehicle' ? 'Single' : 'Part Load',
      value: 'pl',
      checked: true
    },
    {
      label: details.shiftingLuggage === 'vehicle' ? 'Shared' : 'Full Load',
      value: 'fl'
    }
  ];

  const chargeType = [
    {
      label: 'Not Required',
      value: 'not-required'
    },
    {
      label: 'Included In Freight',
      value: 'included-in-freight'
    },
    {
      label: 'Additional From Freight',
      value: 'additional-from-freight'
    }
  ];
  const offeredBy = [
    {
      label: 'Company',
      value: 'company'
    },
    {
      label: 'Party',
      value: 'party'
    }
  ];
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={'h6'} fontWeight={600}>
            Freight Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={'column'}>
            <Grid container spacing={2}>
              <Grid item xs={4}></Grid>

              <Grid item xs={8}>
                <GenericCheckbox
                  list={loadType}
                  name="loadType"
                  value='pl'
                  onChange={onLoadChangeHandler}
                  style={{ display: 'block' }}
                />
              </Grid>
              {freight?.fullLoad && (
                <>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <GenericDropdown
                      selected="not-required"
                      onChange={onLorryTypeChangeHandler}
                      label="Lorry Type"
                      data={chargeType}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Freight Charges</Typography>
            </Grid>
            <Grid item xs={4}>
              <GenericInput
                label=""
                disabled={!freight?.partLoad}
                onChange={(evt) => onFreightChargeChangeHandler(evt, 'partLoad')}
                type="text"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericInput
                label=""
                disabled={!freight?.fullLoad}
                onChange={(evt) => onFreightChargeChangeHandler(evt, 'fullLoad')}
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={'row'} spacing={2}>
            <GenericDropdown
              selected="not-required"
              label="Packing Charges"
              onChange={onPackingChargeTypeChangeHandler}
              data={chargeType}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.partLoad && freight?.packingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onPackingChargeChangeHandler(evt, 'partLoad')}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.fullLoad && freight?.packingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onPackingChargeChangeHandler(evt, 'fullLoad')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={'row'} spacing={2}>
            <GenericDropdown
              selected="not-required" 
              label="Unpacking Charges"
              onChange={onUnPackingChargeTypeChangeHandler}
              data={chargeType}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.partLoad && freight?.unpackingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onUnpackingChargeChangeHandler(evt, 'partLoad')}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.fullLoad && freight?.unpackingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onUnpackingChargeChangeHandler(evt, 'fullLoad')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={'row'} spacing={2}>
            <GenericDropdown
              selected="not-required"
              onChange={onPackingMaterialTypeChangeHandler}
              label="Packing Material Charges"
              data={chargeType}
            />

            <GenericInput
              label=""
              type="text"
              disabled={
                !(
                  freight?.partLoad &&
                  freight?.packingMaterialCharge?.type === 'additional-from-freight'
                )
              }
              onChange={(evt) => onPackingMaterialChargeChangeHandler(evt, 'partLoad')}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(
                  freight?.fullLoad &&
                  freight?.packingMaterialCharge?.type === 'additional-from-freight'
                )
              }
              onChange={(evt) => onPackingMaterialChargeChangeHandler(evt, 'fullLoad')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={'row'} spacing={2}>
            <GenericDropdown
              selected="not-required"
              label="Loading Charges"
              onChange={onLoadingTypeChangeHandler}
              data={[
                {
                  label: 'Not Required',
                  value: 'not-required'
                },
                {
                  label: 'Included In Freight',
                  value: 'included-in-freight'
                },
                {
                  label: 'Additional From Freight',
                  value: 'additional-from-freight'
                },
                {
                  label: 'Loading By Party',
                  value: 'loading-by-party'
                }
              ]}
            />

            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.partLoad && freight?.loadingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onLoadingChargeChangeHandler(evt, 'partLoad')}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.fullLoad && freight?.loadingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onLoadingChargeChangeHandler(evt, 'fullLoad')}
            />
          </Stack>
        </Grid>
        {(freight?.partLoad || freight?.fullLoad) &&
          freight?.loadingCharge?.type === 'additional-from-freight' && (
            <Grid item xs={12}>
              <GenericAdditionalFromFreight
                label="Loading By"
                radioOptions={offeredBy}
                onLoadedBy={onLoadingLoadedBy}
                onFloor={onLoadingFloor}
                onLiftStatus={onLoadingLiftStatus}
              />
            </Grid>
          )}

        <Grid item xs={12}>
          <Stack direction={'row'} spacing={2}>
            <GenericDropdown
              selected="not-required"
              label="Unloading Charges"
              onChange={onUnloadingTypeChangeHandler}
              data={[
                {
                  label: 'Not Required',
                  value: 'not-required'
                },
                {
                  label: 'Included In Freight',
                  value: 'included-in-freight'
                },
                {
                  label: 'Additional From Freight',
                  value: 'additional-from-freight'
                },
                {
                  label: 'Unloading By Party',
                  value: 'unloading-by-party'
                }
              ]}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.partLoad && freight?.unloadingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onUnloadingChargeChangeHandler(evt, 'partLoad')}
            />
            <GenericInput
              label=""
              type="text"
              disabled={
                !(freight?.fullLoad && freight?.unloadingCharge?.type === 'additional-from-freight')
              }
              onChange={(evt) => onUnloadingChargeChangeHandler(evt, 'fullLoad')}
            />
          </Stack>
        </Grid>
        {(freight?.partLoad || freight?.fullLoad) &&
          freight?.unloadingCharge?.type === 'additional-from-freight' && (
            <Grid item xs={12}>
              <GenericAdditionalFromFreight
                label="Unloading By"
                radioOptions={offeredBy}
                onLoadedBy={onUnloadingLoadedBy}
                onFloor={onUnloadingFloor}
                onLiftStatus={onUnloadingLiftStatus}
              />
            </Grid>
          )}
        {/* <Grid container spacing={2} sx={{ my: 1 }}> */}
        {freight?.jobTypeList.map((item) => (
          <Fragment>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
                  <GenericInput
                    value={item['jobType']}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    label={'Job Type'}
                    // onChange={onExtraJobTypeChange}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    label={'Qty.'}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    value={item['qty']}
                    // onChange={onExtraJobTypeQuantityChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    label={'Rate/Item'}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    value={item['partLoad']['ratePerItem']}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    label={'Amount'}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    value={item['partLoad']['amount']}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    label={'Rate/Item'}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    value={item['fullLoad']['ratePerItem']}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    label={'Amount'}
                    className={'editable-input'}
                    inputProps={{
                      disabled: true
                    }}
                    value={item['fullLoad']['amount']}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        ))}
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
              <GenericDropdown
                data={[
                  { label: 'Stationary Charge', value: 'Stationary Charge' },
                  { label: 'Octroi Green Tax', value: 'Octroi Green Tax' },
                  { label: 'Toll Tax Charges', value: 'Toll Tax Charges' },
                  { label: 'Miscellaneous Charges', value: 'Miscellaneous Charges' },
                  { label: 'Electrical Work', value: 'Electrical Work' },
                  { label: 'Cleaning Work', value: 'Cleaning Work' }
                ]}
                label={'Enter Job Type'}
                value={jobType}
                onChange={onExtraJobTypeChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                label={'Qty.'}
                value={quantity}
                onChange={onExtraJobTypeQuantityChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'Rate/Item'}
                disabled={!freight?.partLoad}
                value={partrate}
                onChange={(evt) => onExtraJobRateChange(evt, 'partLoad')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'Amount'}
                disabled={!freight?.partLoad}
                value={partAmount}
                onChange={(evt) => onExtraJobChargeChange(evt, 'partLoad')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'Rate/Item'}
                disabled={!freight?.fullLoad}
                value={fullRate}
                onChange={(evt) => onExtraJobRateChange(evt, 'fullLoad')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'Amount'}
                disabled={!freight?.fullLoad}
                value={fullAmount}
                onChange={(evt) => onExtraJobChargeChange(evt, 'fullLoad')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <GenericLoadingButton sx={{ float: 'right' }} onClick={submitJobType}>
            <span>Add</span>
          </GenericLoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default GenericFreightForm;
