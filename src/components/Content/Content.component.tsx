import CardComponent from '../Card/Card.component';
import './Content.styles.css';

function ContentComponent(props: any): React.ReactElement {
  
  return (
      <div className='content-component'>
        
        {props.books.map((book: any, index: number) => <CardComponent 
            key={book.id}
            bookData={book}
            index={index}
            openModal={props.openModal}
            updateBookHandler={props.updateBookHandler}
            setBooks={props.setBooks}/>
            )}
      </div>
  )
};

export default ContentComponent;