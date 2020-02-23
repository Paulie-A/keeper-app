import React from 'react';
import { render } from '@testing-library/react';

function Note(){
    return(
       <div className="note">
           <h1>This is a note title</h1>
           <p>This is note content</p>
       </div> 
    );
}

export default Note;