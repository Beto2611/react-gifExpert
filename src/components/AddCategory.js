import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const changeHaddle=(e) =>{

        setInputValue(e.target.value);

    }
    const haddleSubmit = (e) =>{
        if(inputValue.trim().length>2){
            e.preventDefault();
            setCategories(cats=>[inputValue,...cats])
            setInputValue('')
        }
       
    }
    return (
        
        <form onSubmit={haddleSubmit}>
          <h2>AddCategory</h2>  
          <input type='text'
          value={inputValue}
          onChange={changeHaddle}
          
          
          >
          </input>

        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}