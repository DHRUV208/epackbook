import {
  Box,
  Grid,
  IconButton,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  InputBase,
  Paper,
  Typography
} from '@mui/material';
import { Fragment, useEffect, useRef, useState } from 'react';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import { AiOutlineDelete, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { requestToGetAllVehicleSize } from '../../../../../store/slices/VehicleManagementSlice';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  requestToSavePackingMaterial,
  requestToGetAllPackingMaterial,
  updateMaterialList,
  updateVehicleSize,
  resetPackingMaterialApiStatus,
  resetPackingMaterial
} from '../../../../../store/slices/MaterialSlice';
import GenericInput from './../../../../../common-components/form-elements/genericInput';
import { requestToGetAllUnitTypes } from '../../../../../store/slices/AppConfigurationSlice';
import { useFormik } from 'formik';
import {
  addMaterialInitialValues,
  addMaterialValidationSchema
} from '../../../../../common-components/validator/material-validator';
import Toasty from '../../../../../common-components/form-elements/toasty';
const style = {
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid #C4C4C4',
  borderRadius: '4px',
  padding: '.5px 0'
};

const Material = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { id: enquiryId } = useParams();

  const {
    appConfiguration: {
      unitTypes: { listUnitTypes }
    },
    vehicleManagement: {
      vehicleSize: { listVehicleSize }
    },
    material: { addMaterial, PackingMaterialList, isSaved, isFailedToSave }
  } = useSelector((state) => state);
  const initialMaterialList = [
    {
      materialName: 'Labour',
      value: 0,
      isLabour: true
    },
    {
      materialName: 'Packing Tape',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Bubble Wrap',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Card Board',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Corrugate Sheet',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Waterproof Lamination',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Thermocol',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Carton Boxes',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Air Bubble',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'News Paper',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Foam Sheet',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Plastic Carate',
      value: 0,
      unitType: ''
    },
    {
      materialName: 'Wooden Frame',
      value: 0,
      unitType: ''
    }
  ];
  const columns = [
    { id: 'srNo', label: 'Sr.No.' },
    { id: 'itemName', label: 'Item Name' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'unitType', label: 'Unit Type' },
    { id: 'action', label: 'Action' }
  ];

  // Define rows
  const rows = PackingMaterialList?.flatMap((material, materialIndex) => {
    let cumulativeIndex = materialIndex * (PackingMaterialList[0]?.packingMaterial.length || 0);

    return material?.packingMaterial?.map((item, packingIndex) => {
      const unitType = listUnitTypes.find((unit) => unit._id === item.type)?.unitType || '';


      return {
        srNo: cumulativeIndex + packingIndex + 1,
        itemName: item.name,
        quantity: item.quantity,
        unitType: unitType,
        action: (
          <IconButton onClick={() => handleRemoveItem(materialIndex, packingIndex)}>
            <AiOutlineDelete color="#d32f2f" />
          </IconButton>
        )
      };
    })
  });


  const formik = useFormik({
    initialValues: addMaterialInitialValues,
    validationSchema: addMaterialValidationSchema
  });

  const [materialList, setMaterialList] = useState(initialMaterialList);
  const [newMaterialName, setNewMaterialName] = useState('');
  const inputRef = useRef(null);

  const onChangeVehicleSize = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addMaterial.chooseVehicleSize', value);
    dispatch(updateVehicleSize(value));
  };

  const handleRemoveItem = () => {
  };

  const onChangeHandler = (evt, operation, index, materialName) => {
    let { value } = evt?.target;
    if (operation === 'plus') {
      setMaterialList((prevMaterialList) =>
        prevMaterialList.map((item, i) => (i === index ? { ...item, value: item.value + 1 } : item))
      );
    } else if (operation === 'minus') {
      setMaterialList((prevMaterialList) =>
        prevMaterialList.map((item, i) =>
          i === index ? { ...item, value: Math.max(0, item.value - 1) } : item
        )
      );
    } else if (operation === 'direct') {
      setMaterialList((prevMaterialList) =>
        prevMaterialList.map((item, i) => (i === index ? { ...item, value: +value } : item))
      );
    } else {
      setMaterialList((prevMaterialList) =>
        prevMaterialList.map((item, i) => {
          if (i === index) {
            return { ...item, unitType: evt.target.value };
          } else return { ...item };
        })
      );
    }
  };
  useEffect(() => {
    dispatch(updateMaterialList(materialList));
  }, [materialList]);

  const onSavePackingMaterialHandler = () => {
    let payload = {
      enquiryId: enquiryId,
      vehicleLoadSize: addMaterial.chooseVehicleSize,
      packingMaterial: materialList.map((item) => ({
        name: item.materialName,
        quantity: item.value.toString(),
        type: item.unitType
      }))
    };
    // if (formik.isValid && formik.dirty) {
    dispatch(requestToSavePackingMaterial(payload));
    // } else {
    //   setIsMessageDisplay(true);
    //   setMessageType('warning');
    //   setMessage('Enter Valid Material Details');
    //   setTimeout(() => {
    //     setIsMessageDisplay(false);
    //   }, 3000);
    // }
  };

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Material  Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetPackingMaterial());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetPackingMaterialApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isFailedToSave]);
  useEffect(() => {
    dispatch(requestToGetAllPackingMaterial({ enquiryId: enquiryId }));
    dispatch(requestToGetAllUnitTypes());
    dispatch(requestToGetAllVehicleSize());
  }, [isSaved]);

  const handleAddField = () => {
    if (newMaterialName?.trim() === '') {
      return;
    }
    const newMaterialItem = { materialName: newMaterialName, value: 0 };
    dispatch(updateMaterialList([...materialList, newMaterialItem]));
    setMaterialList((prevMaterialList) => [...prevMaterialList, newMaterialItem]);
    setNewMaterialName('');
  };

  return (
    <Fragment>
      <Box sx={{ padding: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={12} md={9}>
                  <GenericDropdown
                    onChange={onChangeVehicleSize}
                    data={listVehicleSize?.map((item) => ({
                      label: item?.vehicleSize,
                      value: item?._id
                    }))}
                    label={'Vehicle Size'}
                  />
                </Grid>
                {materialList.map((item, index) => (
                  <Grid container spacing={2} key={index} sx={{ alignItems: 'center', m: 0 }}>
                    <Grid item xs={12} md={3}>
                      <Typography className="formLabel" variant="body1" textAlign={'end'}>
                        {item.materialName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={style}>
                        <IconButton
                          onClick={(evt) =>
                            onChangeHandler(evt, 'minus', index, item.materialName)
                          }>
                          <AiOutlineMinusCircle />
                        </IconButton>
                        <InputBase
                          inputRef={inputRef}
                          onChange={(evt) =>
                            onChangeHandler(evt, 'direct', index, item.materialName)
                          }
                          value={item.value}
                          sx={{
                            padding: '0 10px',
                            backgroundColor: (theme) => theme.palette.primary.light
                          }}
                        />
                        <IconButton
                          onClick={(evt) => onChangeHandler(evt, 'plus', index, item.materialName)}>
                          <AiOutlinePlusCircle />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      {!item.isLabour && (
                        <GenericDropdown
                          label={'Enter Unit Type'}
                          onChange={(evt) => onChangeHandler(evt, '', index, item.materialName)}
                          data={listUnitTypes?.map((item) => ({
                            label: item?.unitType,
                            value: item?._id
                          }))}
                        />
                      )}
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={7}>
                      <GenericInput
                        label={'Add More'}
                        value={newMaterialName}
                        onChange={(e) => setNewMaterialName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <GenericLoadingButton onClick={handleAddField}>
                        <span>ADD</span>
                      </GenericLoadingButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <GenericLoadingButton
                    sx={{ float: 'right', mt: 2 }}
                    onClick={onSavePackingMaterialHandler}
                    type="submit">
                    <span>Submit</span>
                  </GenericLoadingButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.id}>{column.label}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows?.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {columns.map((column) => (
                          <TableCell key={column.id}>{row[column.id]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </form>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Box>
    </Fragment>
  );
};
export default Material;
