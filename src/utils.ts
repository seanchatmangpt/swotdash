import PocketBase from "pocketbase";

export function getDB() {
  return new PocketBase("http://127.0.0.1:8090");
}

export async function getList(
  collection,
  page = 1,
  perPage = 30,
  options = null,
) {
  const pb = getDB();
  return await pb.collection(collection).getList(page, perPage, options);
}

export async function getItem(collection, key, value, options = null) {
  const pb = getDB();
  console.log("src/utils.ts getItem", collection, key, value, options);
  return await pb
    .collection(collection)
    .getFirstListItem(`${key}="${value}"`, options);
}

export async function createItem(collection, data) {
  const pb = getDB();
  return await pb.collection(collection).create(data);
}
