import React from 'react';
import './styles.css';
import InputField from './InputField';

const AddTaskForm = (props) => {
    console.log(JSON.stringify(props));
    return (
        <div className="form-wrapper">
           <InputField placeholder="Task name"/>
           <InputField placeholder="Task description"/>
           <div className="button-wrapper">
                <button className='primary-button'>SAVE</button>
                <button className='secondary-button'>CANCEL</button>
           </div>
        </div>
    );
};

export default AddTaskForm;