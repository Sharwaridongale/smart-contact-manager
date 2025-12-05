import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const addTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() !== "" && !tags.includes(input)) {
        setTags([...tags, input]);
      }
      setInput("");
    }
  };

  return (
    <div className="tag-input">
      {tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}

      <input
        type="text"
        placeholder="Add tag and press Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTag}
      />
    </div>
  );
};

export default TagInput;
