import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const GenericTextEditor = (props) => {
  const { value } = props;
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };
  return (
    <ReactQuill
      theme="snow"
      value={value}
      style={{ height: '250px', paddingBottom: '45px' }}
      modules={modules}
      {...props}
    />
  );
};
export default GenericTextEditor;
