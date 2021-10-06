class GameForm {
    static container = document.querySelector("#game-form")
    constructor() {
        this.render();
        this.attachEventListener();
    }

    attachEventListener() {
        this.form.addEventListener("submit", this.handleOnSubmit);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const {name, genre, published, description, category} = event.target;
        const data = {
            name: name.value,
            genre: genre.value,
            published: published.value,
            description: description,
            category_id: category.value,
        };
        api.createGame(data).then((game => new GameCard(game)));
        this.form.reset();
        const gameFormContainer = document.querySelector("#game-form")
        gameFormContainer.hidden = true
    }


    render() {
        const form = document.createElement("form");
        form.setAttribute("id", "new-game-form");
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () => { 
        return `
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="game-name" class="form-control">
            </div>
            <div class="form-group">
                <label for="genre">Genre</label>
                <input type="text" name="genre"id="game-genre" class="form-control">
            </div>
            <div class="form-group">
                <label for="published">Published</label>
                <input type="text" name="published" id="game-published" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" id="game-description" class="form-control">
            </div>
            <div class="form-group">
                <label for="item-category">Category</label>
                <select id="game-category" name="category" class="form-control">
                    <option  value="1">MMORPG</option>
                    <option  value="2">First Person Shooter</option>
                    <option  value="3 Sci-Fi">Puzzle</option>
                    <option  value="4">Third Person Shooter</option>
                    <option  value="5">Cartoon</option>
                </select>
            </div>

            <input type="submit" name="submit" value="Add Game" class="btn btn-primary btn-block"> 
            `
    }
}