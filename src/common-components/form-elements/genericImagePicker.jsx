import { Box, Typography } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
const style = {
  padding: '8px',
  width: '95%',
  height: '150px',
  border: '2px dashed',
  letterSpacing: '5px',
  borderColor: (theme) => theme.palette.primary.dark,
  borderRadius: '8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

const GenericImagePicker = (props) => {
  const { getImageUrl, sx } = props;
  const [imageUrl, setImageUrl] = useState('');
  const [fileObject, setFileObject] = useState({});
  let imageRef = useRef(null);
  const handleImageClick = () => {
    imageRef.current.click();
  };
  const handleImageChange = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setImageUrl(reader.result);
        setFileObject(file);
        compression(reader.result);
      };
    }
  };

  const compression = (data) => {
    const img = new Image();
    img.src = data;
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
            getImageUrl(btoa(compressedData));
          };
        },
        'image/jpeg',
        0.7
      );
    };
  };

  return (
    <Fragment>
      <Box sx={{ ...sx }}>
        <Box sx={style} onClick={handleImageClick}>
          <input
            type="file"
            ref={imageRef}
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <FiUploadCloud size={30} style={{ color: (theme) => theme.palette.primary.dark }} />
          {imageUrl.length > 0 && <img src={imageUrl} alt="" height={'60%'} width={'100%'} />}
          <Typography variant="body1" sx={{ color: (theme) => theme.palette.primary.dark }}>
            {' '}
            Browse Files
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: (theme) => theme.palette.primary.dark,
            textAlign: 'center',
            textOverflow: 'inherit'
          }}
        >
          {fileObject?.name}
        </Typography>
      </Box>
    </Fragment>
  );
};
export default GenericImagePicker;
