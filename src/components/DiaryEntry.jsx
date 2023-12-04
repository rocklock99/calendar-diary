import { useState } from "react";

export default function DiaryEntry({ day, entries, setEntries }) {
  const existingEntryForDay = entries.find((entry) => entry.id === day);
  const [entryContent, setEntryContent] = useState(
    existingEntryForDay ? existingEntryForDay.content : ""
  );
  const [hasEntry, setHasEntry] = useState(
    entries.some((entry) => entry.id === day)
  );
  const [canEdit, setCanEdit] = useState(!existingEntryForDay);

  function handleAddEntryButton() {
    if (entryContent.trim()) {
      const existingEntryIndex = entries.findIndex((entry) => entry.id === day);
      let updatedEntries;
      if (existingEntryIndex >= 0) {
        updatedEntries = entries.map((entry, index) =>
          index === existingEntryIndex
            ? { ...entry, content: entryContent }
            : entry
        );
      } else {
        const newEntry = createEntry(day, entryContent);
        updatedEntries = [...entries, newEntry];
      }
      setEntries(updatedEntries);
      setHasEntry(true);
      setCanEdit(false);
    }
  }

  function handleEditEntryButton() {
    setCanEdit(true);
  }

  function handleDeleteEntryButton() {
    setEntries(entries.filter((entry) => entry.id !== day));
    setHasEntry(false);
    setEntryContent("");
    setCanEdit(true);
  }

  function handleEntryTextChanges(e) {
    setEntryContent(e.target.value);
  }

  function createEntry(newId, newContent) {
    const createdEntry = { id: newId, content: newContent };
    return createdEntry;
  }

  return (
    <div id="diary-entry-container">
      <textarea
        id="diary-entry-content"
        value={entryContent}
        onChange={handleEntryTextChanges}
        placeholder="Please write your diary entry here..."
        style={{
          backgroundColor: hasEntry ? "lightblue" : "white",
        }}
        disabled={!canEdit}
      ></textarea>
      <div id="diary-entry-button-container">
        <button
          id="add-diary-entry-button"
          className="entry-buttons"
          onClick={handleAddEntryButton}
        >
          Add
        </button>
        <button
          id="edit-diary-entry-button"
          className="entry-buttons"
          onClick={handleEditEntryButton}
        >
          Edit
        </button>
        <button
          id="delete-diary-entry-button"
          className="entry-buttons"
          onClick={handleDeleteEntryButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
