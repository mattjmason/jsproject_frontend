//  const port = `http://localhost:3000/`

//  const categoryService = new CategoryService(port); 

//  categoryService.getCategories()


const api = new CategoryService;
const gameCollection = document.getElementById('game-collection')
let addGame = false;


document.addEventListener("DOMContentLoaded", () => {
    api.fetchCategories()
    .then(optionsArray => {
        new CategoryDropdown(optionsArray)
    })
    api.fetchGames()
    .then(games => {
        games.forEach(game => {
        new GameCard(game)
        })
    })
    new GameForm();

    const newGameBtn = document.getElementById('new-game-btn')
    const gameFormContainer = document.querySelector("#game-form")

    newGameBtn.addEventListener("click", () => {
        addGame = !addGame;
        if(addGame) {
            gameFormContainer.hidden = false;
        } else {
            gameFormContainer.hidden = true;
        }
    })
})
