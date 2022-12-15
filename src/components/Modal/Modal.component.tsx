import { useState } from 'react';
import FormComponent from '../Form/Form.component';
import './Modal.styles.css';
import axios from '../../axios/axiosConfig';

function ModalComponent(props: any): React.ReactElement {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredSummary, setEnteredSummary] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredImageUrl, setEnteredImageUrl] = useState('');

  const updateBook = (enteredData: any) => {
    axios.put('/update', enteredData).then(() => {
      axios.get('/all').then((response) => props.setBooks(response.data));
    });
  };

  const updateBookHandler = () => {
    const enteredData =  {
      id: props.bookData.id,
      title: enteredTitle || props.bookData.title,
      author: enteredAuthor || props.bookData.author,
      summary: enteredSummary || props.bookData.summary,
      imageUrl: enteredImageUrl || props.bookData.imageUrl,
      originalPublicationDate: enteredDate || props.bookData.originalPublicationDate,
    };
    console.log(enteredData)
    updateBook(enteredData);
    props.closeModal();
  };

  const addBook = (enteredData: any) => {
    axios.post('/add', enteredData).then(() => {
      axios.get('/all').then((response) => props.setBooks(response.data));
    });
  }
  
  const addBookDataHandler = () => {
    const enteredData =  {
      id: Math.floor(Math.random() * 1000000),
      title: enteredTitle || 'No title',
      author: enteredAuthor || 'No author',
      summary: enteredSummary || 'No summary',
      imageUrl: enteredImageUrl ||'No image url',
      originalPublicationDate: enteredDate || 1900,
    };

    addBook(enteredData);
    props.closeModal();
  }


  const closeModalHandler = () => props.closeModal();
  
  const submitData = props.mode === 'Update'? updateBookHandler : addBookDataHandler;
  const modalTitle = `${props.mode} Book Data`
  
  return (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-title">
            <h1>{modalTitle}</h1>
          </div>
          <div className="modal-body">
            <FormComponent 
              title='Title' 
              setData={setEnteredTitle}/>
            <FormComponent 
              title='Author'
              setData={setEnteredAuthor}
              />
            <FormComponent 
              title='Summary'
              setData={setEnteredSummary} />
            <FormComponent 
              title='Publication Date'
              setData={setEnteredDate}/>
            <FormComponent 
              title='Image Url'
              setData={setEnteredImageUrl} />
          </div>
          <div className="modal-footer">
            <button 
              onClick={submitData}
              className="submit-button button"
            >
              {props.mode}
            </button>
            <button 
              onClick={closeModalHandler}
              className="cancel-button button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default ModalComponent;