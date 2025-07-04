import { useState } from "react";
import "./index.css";

let nextId = 0;

function GroceryList() {
  const [value, setValue] = useState("");
  const [texts, setTexts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    setTexts([
      ...texts,
      { id: nextId++, value: value, checked: false, edited: false },
    ]);
    setValue("");
  };

  const toggleChecked = (id) => {
    setTexts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleEdited = (id) => {
    setTexts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, edited: !item.edited } : item
      )
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Grocery Bud</h1>
      <div className="input-div">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button className="addBtn" type="submit">
          Add Item
        </button>
      </div>
      <ul className="grocery-list">
        {texts.map((text) => (
          <li key={text.id}>
            {text.edited ? (
              <input
                className="editingInput"
                type="text"
                value={text.value}
                onChange={(e) => {
                  const updated = texts.map((item) =>
                    item.id === text.id
                      ? { ...item, value: e.target.value }
                      : item
                  );
                  setTexts(updated);
                }}
              />
            ) : (
              <h3 className={text.checked ? "crossed" : ""}>{text.value}</h3>
            )}

            <div className="handle-grocery">
              <button
                className="checkBtn"
                onClick={(e) => {
                  toggleChecked(text.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`check-6 ${text.checked ? "checked-icon" : ""}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <button
                className="editBtn"
                onClick={(e) => {
                  toggleEdited(text.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`edit-6 ${text.edited ? "edited-icon" : ""}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                className="removeBtn"
                onClick={() => {
                  setTexts(texts.filter((a) => a.id !== text.id));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="remove-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default GroceryList;
