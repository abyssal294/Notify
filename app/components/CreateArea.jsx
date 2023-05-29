import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: "",
    content: ""
  })
  
  function handleChange(event){
    const {name, value} = event.target;
    
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function isClicked(){
    setClicked((value) => {
        if (value !== true) {
          return true;
        } else {return true}
    })
  }

  return (
    <div>
      <form className="create-note">
        {clicked && <input onChange={handleChange} name="title" placeholder="Title" value={inputValue.title} />}
        
        <textarea onChange={handleChange} onClick={isClicked} name="content" placeholder="Write your note..." rows={clicked ? "4" : "1"} value={inputValue.content} />
        
        {clicked && <Zoom in={true}>
        <Fab aria-label="add" color="error" onClick={() => {
          props.add(inputValue);
          setInputValue({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}><AddIcon /></Fab></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
