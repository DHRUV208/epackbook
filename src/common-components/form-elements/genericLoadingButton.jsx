import LoadingButton from '@mui/lab/LoadingButton';

const GenericLoadingButton = (props) => {
  const { children, sx } = props;
  return (
    <LoadingButton
      variant="contained"
      {...props}
      sx={{ background: (theme) => theme.palette.primary.dark, ...sx }}
    >
      {children}
    </LoadingButton>
  );
};
export default GenericLoadingButton;
