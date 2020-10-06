import React, { Profiler,useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit : null,
}


function TodoForm(props) {

    const {onSubmit} = props;
    const [value,setValue] = useState ('');

    function handleValueChange(event){
        console.log(event.target.value);
        setValue(event.target.value);
    }
    function handleSubmit(e){
        e.preventDefault(); // Giu lai du lieu 
        if(!onSubmit) return;
        const formValues = {
            title : value,
        };
        onSubmit(formValues);
        //reset value
        setValue('');

    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;