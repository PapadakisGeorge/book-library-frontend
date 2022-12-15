import './Header.styles.css';

function HeaderComponent(props: any): React.ReactElement {

    const addBookHandler = () => {
        props.addBookHandler(0);
    }
    
    return (
        <div className='header-wrapper'>
            <button 
                className='button add-button'
                onClick={addBookHandler}>Add Book</button>     
        </div>
    )
};

export default HeaderComponent;