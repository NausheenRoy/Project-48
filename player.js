class Player {
    constructor() {
        this.index = null;
        
        this.name = null;
       
    }

    getCount() {
        var countRef = database.ref('count');
        countRef.on("value", (data) => {
            count = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            count: count
        });
    }

   

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
