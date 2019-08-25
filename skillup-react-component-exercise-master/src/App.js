import React from "react";
import "./App.css";
import Comment from "./Comment.js";
import Header from "./Header.js";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };

  return (
    <div className="App">
      {<Header title="Book" />}
      <div className="App-content">
        {
          <Comment
            avatarUrl={comment.author.avatarUrl}
            name={comment.author.name}
            text={comment.text}
            date={comment.date}
          />
        }
      </div>
    </div>
  );
}

/* ReactDOM.render(<Comment avatarUrl="comment.author.avatarUrl" />, document.getElementByClassName('Avatar'));

ReactDOM.render(<Comment name="comment.author.name" />, document.getElementByClassName('Avatar'));

ReactDOM.render(<Comment text="comment.text" />, document.getElementByClassName('Avatar'));

ReactDOM.render(<Header title="Book" />, document.getElementsByClassName('App-header')); */

export default App;
