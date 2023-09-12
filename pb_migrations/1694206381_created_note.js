/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0q7sjfaic8908zw",
    "created": "2023-09-08 20:53:01.350Z",
    "updated": "2023-09-08 20:53:01.350Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ydqkn7nw",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nlxhsx1a",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0q7sjfaic8908zw");

  return dao.deleteCollection(collection);
})
