import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useCallback, useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import UploadIcon from '@mui/icons-material/Upload';
import * as _ from 'underscore';
const GenericSignaturePad = (props) => {
  const [dispalayIcons, setDisplayIcons] = useState(false);
  let signatureRef = useRef(null);
  let parentGridRef = useRef(null);
  let [clientWidth, setClientWidth] = useState(0);
  const theme = useTheme();

  const onEnd = (evt) => {
    if (!_.isEmpty(evt)) {
      setDisplayIcons(true);
    }
  };

  const onBegin = (evt) => {
    if (evt) {
      setDisplayIcons(false);
    }
  };
  const upload = () => {
    const url = signatureRef?.current?.getTrimmedCanvas()?.toDataURL('image/png');
    props?.getImage({ imageUrl: url, width: clientWidth });
    signatureRef?.current?.clear();
  };
  const reset = () => {
    signatureRef?.current?.clear();
  };

  useEffect(() => {
    setClientWidth(parentGridRef?.current?.clientWidth);
  }, [parentGridRef?.current?.clientWidth]);

  const resize = useCallback(() => {
    setClientWidth(parentGridRef?.current?.clientWidth);
  }, []);

  useEffect(() => {
    window.onresize = resize;
  }, [resize]);
  return (
    <Grid container spacing={2}>
      <Grid ref={parentGridRef} item md={12} xs={12} sx={{ position: 'relative' }}>
        <SignatureCanvas
          penColor={'darkblue'}
          ref={signatureRef}
          onEnd={onEnd}
          onBegin={onBegin}
          canvasProps={{
            height: 165,
            width: clientWidth - 22,
            style: { border: `2px solid ${theme.palette.primary.dark}` }
          }}
        />

        {dispalayIcons && (
          <div style={{ position: 'absolute', top: '20px', left: '80%' }}>
            <RestartAltIcon onClick={reset} />
            <UploadIcon onClick={upload} />
          </div>
        )}
      </Grid>
    </Grid>
  );
};
export default GenericSignaturePad;
