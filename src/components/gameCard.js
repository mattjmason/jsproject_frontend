class GameCard {
    constructor({id, name, genre, published, category_id}) {
        this.id = id;
        this.name = name; 
        this.genre = genre;
        this.published = published;
        this.category_id = category_id;
        this.attachEventListener();
        GameCard.all.push(this)
        this.renderGame() 
    }
    
    static gameCollection = document.getElementById("game-collection")
    
    static all = []

    attachEventListener() {
       GameCard.gameCollection.addEventListener("click", this.handleClick)
    }

    handleClick = (event) => {
        if (event.target.className === "delete-btn"){
        const id = event.target.dataset.id
        api.deleteGame(id)
        this.eachGameDiv.remove()
        }
    }

    static renderByCategory(id) {
        gameCollection.innerHTML = ``
        const games = GameCard.all.filter((g) => g.category_id === id) 
        games.forEach(game => game.renderGame())
    }

    renderGame() {

        let eachGameDiv = document.createElement('div')
        this.eachGameDiv = eachGameDiv
        eachGameDiv.classList.add('each-game')

        let gameName = document.createElement("H4");
        gameName.innerHTML = this.name

        let gameGenre = document.createElement("P");
        gameGenre.innerHTML = `Genre: ${this.genre}`;

        let gamePublished = document.createElement("P");
        gamePublished.innerHTML = `Published: ${this.published}`;

        let deleteButton = document.createElement("BUTTON");
        this.deleteButton = deleteButton
        deleteButton.innerHTML = 
        `
        <button class="delete-btn" data-id="${this.id}">Delete</button>
        `

    
        eachGameDiv.appendChild(gameName);
        eachGameDiv.appendChild(gameGenre);
        eachGameDiv.appendChild(gamePublished);
        eachGameDiv.appendChild(deleteButton);
        GameCard.gameCollection.appendChild(eachGameDiv);
    }
}