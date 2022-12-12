import './UpdateForm.styles.css';

function UpdateFormComponent(props: any) {

    const inputHandler = (event: { target: { value: string | number; }; }) => {
        props.setData(event.target.value);
    };

    return(
        <div className='update-form-wrapper'>
            <header className='update-form-header'>{props.title}</header>
            <input onChange={inputHandler}></input>
        </div>
    )
}

export default UpdateFormComponent;