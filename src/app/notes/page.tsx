"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  DndProvider,
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getList } from "@/utils";
import CreateNote from "@/app/notes/CreateNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    return (await getList("notes"))?.items as any[];
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    }
    fetchData();
  }, []);

  const moveNote = (fromIndex: number, toIndex: number) => {
    const updatedNotes = [...notes];
    const [movedNote] = updatedNotes.splice(fromIndex, 1);
    updatedNotes.splice(toIndex, 0, movedNote);
    setNotes(updatedNotes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>Notes Page</h1>
      <div className="corkboard">
        {notes.map((note, index) => (
          <DraggableNote
            note={note}
            index={index}
            moveNote={moveNote}
            key={note.id}
          />
        ))}
      </div>
    </DndProvider>
  );
}

const DraggableNote: React.FC<{
  note: any;
  index: number;
  moveNote: (fromIndex: number, toIndex: number) => void;
}> = ({ note, index, moveNote }) => {
  const [, ref] = useDrag({
    type: "NOTE",
    item: { index },
    collect: (monitor: DragSourceMonitor) => {
      if (monitor.isDragging()) {
        console.log("Drag started");
      }
    },
  });

  const [, drop] = useDrop({
    accept: "NOTE",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveNote(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    collect: (monitor: DropTargetMonitor) => {
      if (monitor.isOver()) {
        console.log("Drag ended");
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="sticky-note">
      <h2>{note.title}</h2>
      <h5>{note.content}</h5>
      <p>{note.created}</p>
    </div>
  );
};
