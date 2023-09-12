"use client";

import { faker } from "@faker-js/faker";

import { useState } from "react";
import { createItem } from "@/utils";

export default function CreateNote() {
  const [title, setTitle] = useState(faker.company.name());
  const [content, setContent] = useState(faker.company.buzzPhrase());

  const create = async () => {
    await createItem("notes", {
      title,
      content,
    });
  };

  return (
    <div>
      <h1>Create Note</h1>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}
