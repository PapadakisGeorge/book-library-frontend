import './Form.styles.css';

function FormComponent(props: any) {

    const inputHandler = (event: { target: { value: string | number; }; }) => {
        props.setData(event.target.value);
    };

    return(
        <div className='form-wrapper'>
            <header className='form-header'>{props.title}</header>
            <input onChange={inputHandler}></input>
        </div>
    )
}

export default FormComponent;