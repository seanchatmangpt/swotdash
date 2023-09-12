import { getItem } from "@/utils";

async function getNote(id) {
  return getItem("notes", "id", id);
}

export default async function NotePage({ params }) {
  const { id, title, content, created } = await getNote(params.id);

  return (
    <div>
      <h1>notes/{id}</h1>
      <h1>Note Page</h1>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </div>
  );
}
