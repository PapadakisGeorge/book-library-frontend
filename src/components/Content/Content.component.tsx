import CardComponent from '../Card/Card.component';
import './Content.styles.css';
import { useState } from 'react';
import ModalComponent from '../Modal/Modal.component';


function ContentComponent(props: any): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardToBeUpdated, setCardToBeUpdated] = useState(-1);

  const openModal = (index: any) => { 
    setIsModalOpen(true)
    if(index >= 0) setCardToBeUpdated(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
      <div className='content-component'>
        {isModalOpen && <ModalComponent 
          bookData={props.books[cardToBeUpdated]}
          isModalOpen={isModalOpen}
          index={cardToBeUpdated}
          updateBook={props.onUpdateBook}
          closeModal={closeModal}/>
        }
        {props.books.map((book: any, index: number) => <CardComponent 
            key={book.id}
            bookData={book}
            index={index}
            openModal={openModal}
            setBooks={props.setBooks}/>
            )}
      </div>
  )
};

export default ContentComponent;