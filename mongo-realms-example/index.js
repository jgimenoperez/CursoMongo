const Realm = require("realm");
const app = new Realm.App({ id: "myshop_prueba-etbtn" });


const run = async () => {
  const credentials = await Realm.Credentials.anonymous();
  const user = await app.logIn(credentials)
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const plants = mongodb.db("mern_calendar").collection("eventos");
  const result = await plants.find()
  console.log(result)

  // const eventoSchema = {
  //   name: 'evento',
  //   properties: {
  //     _id: 'objectId?',
  //     __v: 'int?',
  //     end: 'date?',
  //     notes: 'string?',
  //     start: 'date?',
  //     title: 'string?',
  //     user: 'objectId?',
  //   },
  //   primaryKey: '_id',
  // };

  // const realm = await Realm.open({
  //   path: "myrealm",
  //   schema: [eventoSchema],
  // });

  

}

run()


//https://www.mongodb.com/docs/realm/sdk/node/examples/query-mongodb/