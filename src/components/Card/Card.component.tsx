import './Card.styles.css';
import {useState} from 'react';
import axios from '../../axios/axiosConfig';

function CardComponent(props: any): React.ReactElement {

        const [isVisible] = useState(true);
        
        const updateBookDataHandler = () => {
            props.openModal(props.index);
        }
        
        const DeleteBook = () => {
            axios.delete(`/delete/${props.bookData.id}`).then(() => {
              axios.get('/all').then((response) => props.setBooks(response.data));
              });
          }

        const deleteBookDataHandler = () => {
            DeleteBook();
        }
        
        return (
            <div>
                {isVisible && <div className='card-wrapper'>
                    <header className='card-header'>{props.bookData.title}</header>
                    <div className='card-summary'>{props.bookData.summary}</div>
                    <div className='card-footer'>
                        <button 
                            className='button update-button'
                            onClick={updateBookDataHandler}>Update</button>
                        <button 
                            className='button delete-button'
                            onClick={deleteBookDataHandler}>Delete</button>
                    </div>
                </div>}
            </div>
        )
    };

export default CardComponent;