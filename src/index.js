import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
    <App />,

document.getElementById("root")
);


//CHALLENGE
//1. Implement the add note functionality
//-. Create a constant that keeps track of the title and content
//-. Pass the note back to the App
//-. Add new note to an array
//-. Take array and render seperate Note componenets for each item

//2. Implement the delete note functionality
//-. Callback from the Note component to trigger a delete function
//-. Use the filter function to filter out the line item that needs deletion
//-. Pass an id over to the Note component. pass back to app component


//HINT: You will need to study the classes in teh styles.css file to appy styling.