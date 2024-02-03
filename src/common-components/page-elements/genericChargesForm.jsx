import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useEffect, Fragment } from 'react';
import GenericRadio from '../form-elements/genericRadio';
import GenericAutocomplete from '../form-elements/genericAutocomplete';
import GenericLoadingButton from '../form-elements/genericLoadingButton';
import GenericDatePicker from '../form-elements/genericDatePicker';
import GenericInput from '../form-elements/genericInput';
import { useDispatch, useSelector } from 'react-redux';
import GenericDropdown from '../form-elements/genericDropdown';
import shiftingManagement from './../../modules/website/features/tabs/shiftingManagement';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  updateTransitChargeList
} from '../../store/slices/QuotationSlice'
const GenericChargesForm = (props) => {
  const {
    refresh,
    onJobTypeValueChange,
    onJobTypeChange,
    onStorageAmountChange,
    onStorageToChange,
    onStorageFromChange,
    onStorageChange,
    onTransitInsuranceGSTChange,
    onTransitInsuranceValueChange,
    onTransitInsurancePercentageChange,
    onTransitShiftingLuggageChange,
    onTransitOptionsChange,
    onTransitChange,
    onGSTTypeChange,
    onGSTPercentageChange,
    onGSTChange,
    onSurchargeValueChange,
    onSurchargeChange,
    onQuotationDiscount,
    onQuotationDiscountType,
    onQuotationFlatDiscountValue,
    onQuotationDiscountValue,
    onOtherDetailsQ1ReplyChange,
    onOtherDetailsQ2ReplyChange,
    onOtherDetailsQ1DescriptionChange,
    onOtherDetailsQ2DescriptionChange,
    onStorageOptionsChange,
    onAdvanceAmountChange,
    addTransitCharges,
    transitvalue,
    transitGST,
    transitpercentage,
    transitshiftingLuggage,
    removeTransitItem
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    // Your component logic here

    // Call the onRefresh function to trigger a re-render
    // refresh();
    console.log('ChildComponent is refreshed!');
  }, [refresh]);

  const addnumStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: (theme) => theme.palette.primary.light,
    padding: '4px  12px',
    borderRadius: 1,
    marginY: 1
  };

  const {
    quotation: {
      addQuotation: { charges }
    },
    shiftingManagement: {
      shiftingLuggage: { listShiftingLuggage },
      insurancePercentage: { listInsurancePercentage }
    }
  } = useSelector((state) => state);

  

  // const {shiftingManagement:{listShiftingLuggage,listInsurancePercentage}} = useSelector((state)=> state)

  return (
    <Grid item xs={12}>
      {/* <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
              <GenericAutocomplete
                options={[
                  { value: 'electrical-work', label: 'Electrical Work' },
                  { value: 'wooden-work', label: 'Wooden Work' }
                ]}
                label={'Enter Job Type'}
                onChange={onJobTypeChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput label={'Qty.'} onChange={onJobTypeValueChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <GenericInput label={'Rate/Item'} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput label={'Amount'} onChange={onJobTypeValueChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <GenericInput label={'Rate/Item'} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput label={'Amount'} onChange={onJobTypeValueChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <GenericLoadingButton sx={{ float: 'right' }}>
            <span>Add</span>
          </GenericLoadingButton>
        </Grid>
      </Grid> */}
      <Grid item xs={12} md={4}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Advance Amount
        </Typography>
        <GenericInput onChange={onAdvanceAmountChange} label={'Enter Amount'} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Surcharge
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="extra"
          onChange={onSurchargeChange}
          options={[
            { value: 'required', label: 'Required' },
            { value: 'not-required', label: 'Not Required' },
            { value: 'extra', label: 'Extra' }
          ]}
        />
        {charges?.surcharge?.required === 'required' && (
          <Grid item xs={12} md={4}>
            <Box sx={{ mt: 3 }}>
              <GenericDropdown
                onChange={onSurchargeValueChange}
                data={[
                  { label: '10%', value: '10%' },
                  { label: '12%', value: '12%' },
                  { label: '13%', value: '13%' },
                ]}
                label={''}
              />
            </Box>
          </Grid>
        )}
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Discount in Quotation
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <GenericRadio
          orientation="row"
          defaultSelected='none'
          onChange={onQuotationDiscountType}
          options={[
            { value: 'true', label: 'Discount @%' },
            { value: 'false', label: 'Flat Discount' },
            { value: 'none', label: 'Not Required' }
          ]}
        />
      </Grid>
      {charges?.discount?.type === 'true' && (
        <Grid item xs={12} md={3} sx={{ my: 2 }}>
          <GenericAutocomplete
            // onChange={onQuotationDiscountValue}
            onSelect={onQuotationDiscountValue}
            options={[{ label: '5%', value: '5%' }]}
            label={'Choose %'}
          />
        </Grid>
      )}
      {charges?.discount?.type === 'false' && (
        <Grid item xs={12} md={3} sx={{ my: 2 }}>
          <GenericInput
            onChange={onQuotationDiscountValue}
            label={'Enter discount amount'}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          GST in Quotation
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="gst-extra"
          onChange={onGSTChange}
          options={[
            { value: 'with-gst', label: 'With GST' },
            { value: 'without-gst', label: 'Without GST' },
            { value: 'gst-exempted', label: 'GST Exempted' },
            { value: 'gst-extra', label: 'GST Extra' }
          ]}
        />
        {charges?.gst?.mode === 'with-gst' && (
          <Grid container spacing={2} sx={{ my: 1 }}>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={[
                  { label: '0%', value: '0%' },
                  { label: '5%', value: '5%' },
                  { label: '12%', value: '12%' },
                  { label: '18%', value: '18%' },
                  { label: '28%', value: '28%' },
                ]}
                label={'GST Percent'}
                onChange={onGSTPercentageChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={[
                  { label: 'CGST/SGST', value: 'CGST/SGST' },
                  { label: 'IGST', value: 'IGST' }
                ]}
                label={'GST Type'}
                onChange={onGSTTypeChange}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Transit Insurance
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="not-required"
          options={[
            { value: 'required', label: 'Required' },
            { value: 'not-required', label: 'Not Required' }
          ]}
          onChange={onTransitChange}
          />
      </Grid>
      {charges?.transitInsurance?.required === 'required' && (
        <Grid item xs={12}>
          <GenericRadio
            orientation="row"
            defaultSelected="optional"
            onChange={onTransitOptionsChange}
            options={[
              { value: 'optional', label: 'Optional' },
              { value: 'additional-freight', label: 'Additional From Freight' },
              { value: 'included-freight', label: 'Included In Freight' },
              { value: 'extra', label: 'Extra' }
            ]}
          />
          <Grid container spacing={2} sx={{ my: 1 }}>
            <Grid item xs={12} md={2.75}>
              <GenericDropdown
                onChange={onTransitShiftingLuggageChange}
                data={listShiftingLuggage.map((item) => ({
                  label: item?.shiftingLuggage,
                  value: item?.shiftingLuggage
                }))}
                value={transitshiftingLuggage}
                label={'Shifting Luggage'}
                />
            </Grid>
            <Grid item xs={12} md={2.75}>
              <GenericDropdown
                data={listInsurancePercentage?.map((item) => ({
                  label: `${item?.insurancePercentage} %`,
                  value: `${item?.insurancePercentage} %`
                }))}
                label={'Insurance %*'}
                value={transitpercentage}
                onChange={onTransitInsurancePercentageChange}
                />
            </Grid>
            {
              <Grid item xs={12} md={2.75}>
                <GenericDropdown
                  onChange={onTransitInsuranceGSTChange}
                  value={transitGST}
                  data={[
                    { label: '0%', value: '0%' },
                    { label: '5%', value: '5%' },
                    { label: '12%', value: '12%' },
                    { label: '18%', value: '18%' },
                    { label: '28%', value: '28%' },
                  ]}
                  label={'GST %*'} />
              </Grid>
            }
            {
              <Grid item xs={12} md={2.75}>
                <GenericInput 
                onChange={onTransitInsuranceValueChange} 
                value={transitvalue}
                label={'Amount'} />
              </Grid>
            }

            <Grid item xs={12} md={1}>
              <GenericLoadingButton sx={{ float: "right" }} onClick={addTransitCharges}>
                <span>Add</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              {/* <Box sx={addnumStyle}>
                <Grid item xs={3}>
                  <Typography>Shifting Luggage</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography>Insurance %</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography>GST</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography>Amount</Typography>
                </Grid>
              </Box> */}
              {charges?.transitInsurance?.listTransitCharges?.map((e) => (
                <Box sx={addnumStyle}>
                  <Grid item xs={3}>
                  <Typography>{e?.luggageType}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <Typography>{e?.insurancePerc}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <Typography>{e?.gst}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <Typography>{e?.value}</Typography>
                  </Grid>
                  <IconButton
                  onClick={() => removeTransitItem(e)}
                  >
                    <AiOutlineDelete color="#d32f2f" />
                  </IconButton>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Storage Charges
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="not-required"
          onChange={onStorageChange}
          options={[
            { value: 'required', label: 'Required' },
            { value: 'not-required', label: 'Not Required' }
          ]}
        />
        {charges?.storeCharges?.required === 'required' && (
          <Grid item xs={12}>
            <GenericRadio
              orientation="row"
              onChange={onStorageOptionsChange}
              options={[
                { value: 'per-day', label: 'Per Day Charges' },
                { value: 'min-fixed', label: 'Minimum Fixed Charges' },
                { value: 'period', label: 'Charges During Period' }
              ]}
            />
          </Grid>
        )}

        <Grid container spacing={2} sx={{ my: 1 }}>
          {charges?.storeCharges?.required === 'required' &&
            charges?.storeCharges?.options === 'period' && (
              <>
                <Grid item xs={12} md={3}>
                  <GenericDatePicker onChange={onStorageFromChange} label={'From'} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDatePicker onChange={onStorageToChange} label={'To'} />
                </Grid>
              </>
            )}

          {charges?.storeCharges?.required === 'required' && (
            <Grid item xs={12} md={3}>
              <GenericInput onChange={onStorageAmountChange} label={'Amount'} />
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
          Other Details
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          IS THERE EASY ACCESS FOR LOAD & UNLOADING AT ORIGIN & DESTINATION
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="true"
          onChange={onOtherDetailsQ1ReplyChange}
          options={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
        />

        <Typography variant="body1" sx={{ my: 2 }}>
          SHOULD ANY ITEMS BE GOT DOWN THROUGH BALCONY ETC.
        </Typography>
        <Grid item xs={12} md={3}>
          <GenericInput onChange={onOtherDetailsQ1DescriptionChange} />
        </Grid>

        <Typography variant="body1" sx={{ my: 2 }}>
          ARE THERE ANY RESTRICTIONS FOR LOADING/UNLOADING AT ORIGIN/DESTINATION
        </Typography>
        <GenericRadio
          orientation="row"
          defaultSelected="false"
          onChange={onOtherDetailsQ2ReplyChange}
          options={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
        />

        <Typography variant="body1" sx={{ my: 2 }}>
          DO YOU HAVE ANY SPECIAL NEEDS OR CONCERN
        </Typography>
        <Grid item xs={12} md={3}>
          <GenericInput onChange={onOtherDetailsQ2DescriptionChange} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default GenericChargesForm;
