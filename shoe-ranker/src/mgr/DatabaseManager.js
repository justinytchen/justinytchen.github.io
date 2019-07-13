class DatabaseManager{
    constructor(db){
        this.firebaseRef = db.database().ref("data");
    }

    writeEloData(map) {
        var value = JSON.stringify(map);
        // console.log(map);
        // console.log(value);
        this.firebaseRef.child("eloMap").set({value});
    }

    getEloData(callback){
        this.firebaseRef.once('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(JSON.parse(items[0].value));
        });
    }
} export default DatabaseManager;