import "./App.css";

import axios from './axios/axiosConfig';
import HeaderComponent from "./components/Header/Header.component";
import ContentComponent from "./components/Content/Content.component";
import { useEffect, useState } from "react";

function App() {
 
  const [books, setBooks] = useState([]);
  
  const CallDatabase = () => {
    useEffect(() => {
    axios.get('/all').then((response) => {
      setBooks(response.data);
      });
    }, []);
  }

  CallDatabase();

  const updateBookHandler = (index, bookData) => {
    setBooks((previousBooks) => {
      if(books.length > 0){
      const newBookData = [...previousBooks]
      newBookData[index] = bookData;
      return newBookData;}
    });
  };

  return (
    <div className='body'>
      <HeaderComponent/>
      <ContentComponent 
        books={books}
        onUpdateBook={updateBookHandler}
        setBooks={setBooks}/>
    </div>
  );
}

export default App;
