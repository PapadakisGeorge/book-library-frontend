import "./App.css";

import axios from './axios/axiosConfig';
import HeaderComponent from "./components/Header/Header.component";
import ContentComponent from "./components/Content/Content.component";
import ModalComponent from "./components/Modal/Modal.component";
import { useEffect, useState } from "react";

function App() {
 
  const [books, setBooks] = useState([]);
  const [bookToBeUpdated, setBookToBeUpdated] = useState();
  const [isModalOpen, setIsModalOpen] = useState({
      open: false,
      mode: '',
    });

  const CallDatabase = () => {
    useEffect(() => {
    axios.get('/all').then((response) => {
      setBooks(response.data);
      });
    }, []);
  }

  const openModal = () => {
    setIsModalOpen({
      open: true,
    });
  }

  const closeModal = () => {
    setIsModalOpen({
      open: false,
    });
  }

  const updateBookHandler = (index) => {
    setBookToBeUpdated(books[index]);
    setIsModalOpen({
      open: true,
      mode: 'Update'
    });
  };

  const addBookHandler = () => {
    setIsModalOpen({
      open: true,
      mode: 'Add'
    });
  };

  CallDatabase();

  return (
    <div className='body'>
      <HeaderComponent
        addBookHandler={addBookHandler}/>
      {isModalOpen.open && <ModalComponent 
          isModalOpen={isModalOpen}
          bookData={bookToBeUpdated}
          mode={isModalOpen.mode}
          closeModal={closeModal}
          openModal={openModal}
          setBooks={setBooks}/>
        }
      <ContentComponent 
        books={books}
        updateBookHandler={updateBookHandler}
        openModal={openModal}
        setBooks={setBooks}/>
    </div>
  );
}

export default App;
