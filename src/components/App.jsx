import React from "react";
import Entry from "./Entry";
import emoji from "../emojipedia.js"

function oneEmoji(emo) {
  return <Entry
    key={emo.id}
    emoji={emo.emoji}
    name={emo.name}
    description={emo.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emoji.map(oneEmoji)};</dl>

    </div>
  );
}

export default App;
