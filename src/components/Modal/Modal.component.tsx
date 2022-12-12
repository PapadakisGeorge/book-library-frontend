import { useState } from 'react';
import UpdateFormComponent from '../UpdateForm/UpdateForm.component';
import './Modal.styles.css';

function ModalComponent(props: any): React.ReactElement {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredSummary, setEnteredSummary] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredImageUrl, setEnteredImageUrl] = useState('');

  const updateBookHandler = () => {
    const enteredData =  {
      id: props.bookData.id,
      title: enteredTitle || props.bookData.title,
      author: enteredAuthor || props.bookData.author,
      summary: enteredSummary || props.bookData.summary,
      imageUrl: enteredImageUrl || props.bookData.imageUrl,
      originalPublicationDate: enteredDate || props.bookData.originalPublicationDate,
    };
    props.updateBook(props.index, enteredData);
    props.closeModal();
  };

  const closeModalHandler = () => props.closeModal();
  
  return (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-title">
            <h1>Update Book Data</h1>
          </div>
          <div className="modal-body">
            <UpdateFormComponent 
              title='Title' 
              setData={setEnteredTitle}/>
            <UpdateFormComponent 
              title='Author'
              setData={setEnteredAuthor}
              />
            <UpdateFormComponent 
              title='Summary'
              setData={setEnteredSummary} />
            <UpdateFormComponent 
              title='Publication Date'
              setData={setEnteredDate}/>
            <UpdateFormComponent 
              title='Image Url'
              setData={setEnteredImageUrl} />
          </div>
          <div className="modal-footer">
            <button 
              onClick={updateBookHandler}
              className="update-button button"
            >
              Update
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