import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import GenericDropdown from './genericDropdown';
const GenericAction = (props) => {
  const {
    data,
    onStatusChangeHandler,
    onEditHandler,
    onDeleteHandler,
    statusRequired = false
  } = props;

  return (
    <Grid container spacing={2}>
      {statusRequired && (
        <Grid item xs={6}>
          <GenericDropdown
            data={[{ value: 'COMPLETED', label: 'COMPLETED' }]}
            onChange={(evt) => onStatusChangeHandler(evt, data)}
          />
        </Grid>
      )}

      <Grid item xs={statusRequired ? 3 : 6}>
        <EditIcon
          // onClick={() => onEditHandler(data)}
          sx={{ color: (theme) => theme.palette.primary.dark }}
        />
      </Grid>
      <Grid item xs={statusRequired ? 3 : 6}>
        <DeleteIcon
          onClick={() => onDeleteHandler(data)}
          sx={{ color: (theme) => theme.palette.primary.dark }}
        />
      </Grid>
    </Grid>
  );
};
export default GenericAction;
