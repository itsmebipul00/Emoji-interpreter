

import  { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" 
};


const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); 
  const [message, setMessage] = useState("");

  function changeHandler(e) {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMessage(emojiDictionary[inputEmoji]);
    } else {
      setMessage("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMessage(emojiDictionary[inputEmoji]);
  }

  return (
    <div>
      <header>
        <div className="container">
          <h1>Enter Emoji</h1>
          <input
            onChange={changeHandler}
            value={emoji}
            placeholder={"Search your emoji"}
            style={{
              padding: "1em",
              minWidth: "80%"
            }}
          />
        </div>
      </header>

      <section className="section-two">
        <div className="container">
            <h2> {emoji} </h2> 
            <h3> {message} </h3> 
        </div>
      </section>

      <section className="section-two">
        <div className="container">
          {
                emojis.map((emoji) => (
                  <span
                    onClick={() => emojiClickHandler(emoji)}
                    style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
                  >
                    {" "}
                    {emoji}{" "}
                  </span>
                ))
              }
        </div>
      </section>

      <section className="section-three">
        <div className="container con-flex">
          <h3>Connect with me</h3>
          <a href="https://twitter.com/itsmebipul00" class="svg" target="_blank">
                        <img alt="Bipul Sharma | Twitter" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/bipul-sharma-69b7751a0/" class="svg" target="_blank">
                        <img alt="Bipul's LinkdeIN" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
                    </a>
                    <a href="https://github.com/itsmebipul00" class="svg" target="_blank">
                        <img alt="Bipul's Github" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                    </a>
        </div>
      </section>

    </div>
  );
}
