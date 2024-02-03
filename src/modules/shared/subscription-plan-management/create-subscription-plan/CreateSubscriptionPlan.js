import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestToGetModule } from "../../../../store/slices/UserSettingSlice";
import { Card, CardContent, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import GenericAutocomplete from "../../../../common-components/form-elements/genericAutocomplete";
import _ from 'underscore';
import GenericLoadingButton from "../../../../common-components/form-elements/genericLoadingButton";
import GenericInput from "../../../../common-components/form-elements/genericInput";
import {requestToSave} from "../../../../store/slices/SubscriptionPlanSlice";

const CreateSubscriptionPlan = () =>{
  const dispatch = useDispatch();
    const [payload, setPayload] = useState({})
    const [checkedFeatures,setCheckedFeatures] = useState([])
  
  const onPlanChanged = (evt) => {
    setPayload({...payload,subscriptionType:evt?.target?.value?.toString()?.toLowerCase()})
  };
  const onAmountChange = (evt) =>{
    setPayload({...payload, amount: evt.target.value})
  }
  
const onInputChange = (evt) =>{
  const {value} = evt.target;
  const {feature} = evt.target.dataset
  setCheckedFeatures((checked)=> checked.map((item)=> item.featureId === feature ? {...item,qty: value } : item))
  
  
  
}
const onSubmitHandler = (evt) =>{
  setPayload({...payload, list:checkedFeatures})

  
}
  const onFeatureChecked = (evt) => {
    const { checked, value } = evt?.target;
    const subModuleId = evt?.target?.dataset?.submodule;
    const moduleId = evt?.target?.dataset?.module;
    if ( checked) {
      setCheckedFeatures([...checkedFeatures,{
        featureId: value,
        moduleId,
        subModuleId,
        qty:"-1"
      }])
      

    }
    else {
      setCheckedFeatures((checked)=> checked.filter((item)=>{
        if(item.featureId !== value) {
          return item
        }
      }))
    }
  };
  
  
  const {
    userSetting: {
      module: { listModules }
    }
  } = useSelector((state) => state);
  useEffect(()=>{
    if(payload.hasOwnProperty('list')){
      dispatch(requestToSave(payload))
    }
    
  },[payload])


  useEffect(() => {
    dispatch(requestToGetModule());
  }, []);

  

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <GenericAutocomplete
          getValue={onPlanChanged}
          options={[
            { label: 'Free', value: 'free' },
            { label: 'Plus', value: 'plus' },
            { label: 'Pro', value: 'pro' },
            { label: 'Unlimited', value: 'unlimited' }
          ]}
          label={'Plan Name'}
        />
      </Grid>

      <Grid item xs={6}>
        <GenericInput
          label={'Plan Amount'}
          onChange={onAmountChange}
        />
      </Grid>

      {_?.isArray(listModules) &&
        listModules?.map((mod) => {
          return (
            <Grid xs={12} item>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="p">{mod?.moduleName}</Typography>
                    </Grid>
                    {_?.isArray(mod?.submodules) &&
                      mod?.submodules?.map((submod) => {
                        return (
                          <Grid item xs={4}>
                            <Card>
                              <CardContent>
                                <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                    <Typography variant="p">{submod?.subModuleName}</Typography>
                                  </Grid>
                                  
                                  {_?.isArray(submod?.submodulesfeatures) &&
                                    submod?.submodulesfeatures?.map((feat) => {
                                      return (
                                        <Grid item xs={12}>
                                          <Card>
                                            <CardContent>
                                              <Grid container columnSpacing={2} rowSpacing={2}>
                                                <Grid item xs={6}>
                                                  <FormControlLabel
                                                    label={`${feat?.feature}`}
                                                    onChange={onFeatureChecked}
                                                    control={
                                                      <Checkbox
                                                        value={feat?._id}
                                                        inputProps={{
                                                          'aria-label': 'controlled',
                                                          'data-submodule': submod?._id,
                                                          'data-module': mod?._id,
                                                          
                                                        }}
                                                      />
                                                    }
                                                  />
                                                </Grid>

                                                
                                                <Grid item xs={6}>
                                                  <GenericInput label="Qty" 
                                                  inputProps={{ 'data-feature': feat?._id}}
                                                  onChange={onInputChange}  />
                                                </Grid>
                                              </Grid>
                                            </CardContent>
                                          </Card>
                                        </Grid>
                                      );
                                    })}
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      })}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <GenericLoadingButton onClick={onSubmitHandler}>Submit</GenericLoadingButton>
        </Grid>
    </Grid>
  );
}
export default CreateSubscriptionPlan