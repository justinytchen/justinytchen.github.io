class DatabaseManager{
    constructor(db){
        this.firebaseRef = db.database().ref("data");
    }

    pushToFirebase(value) {
        this.firebaseRef.child("eloMap").set({value});
    }

    getFirebaseData(callback){
        this.firebaseRef.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            console.log("items", items);
            callback(items);
        });
    }
} export default DatabaseManager;