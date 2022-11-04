const Realm = require("realm");



const run = async () => {

    try {

        const TaskSchema = {
            name: 'product',
            properties: {
                _id: 'string?',
                description: 'string?',
                image: 'string?',
                name: 'string?',
                price: 'double?',
            },
            primaryKey: '_id',

        };
        const realm = await Realm.open({
            path: "sss-vagivd",
            schema: [TaskSchema],
        });

        let task1, task2;
        realm.write(() => {
            task1 = realm.create("product", {
                _id: '13',
                description: "go grocery shopping",
                name: "Open",
            });
            task2 = realm.create("product", {
                _id: '23',
                description: "go exercise",
                name: "Open",
            });
            console.log(`created two tasks: ${task1.name} & ${task2.name}`);

  
        });
        
        

    } catch (err) {
        console.error("Failed to log in", err);
    }

}

run()