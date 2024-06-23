import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked:" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      // console.log("Uppercase was clicked:" + text);
       let newText= text.toLowerCase();
       setText(newText);
    }
    const handleCopy = () =>{
      console.log('i am copy');
      var text=document.getElementById('mybox');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const handleAddExtraSpaces=(words)=>{
      let newText=text.substr(0,words.length)+"\xa0\xa0\xa0\xa0\xa0 "+text.substr(words);
      setText(newText+" "+" ");
    }
    const handleonChange=(event)=>{
      //  console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    // text = "new text";//wrong way to change the state
    //setText = "new text"// correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleAddExtraSpaces}>Add Extra Space</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length}Minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}



