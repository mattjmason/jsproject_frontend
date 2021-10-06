class CategoryService {
    constructor() {
        this.baseURL = "http://localhost:3000"
    }
    fetchGames = () => fetch(`${this.baseURL}/games`).then(res => res.json());

    fetchCategories = () => fetch(`${this.baseURL}/categories`).then(res => res.json());

    createGame = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        };
        return fetch(`${this.baseURL}/games`, config).then((res) => res.json());
    };

    deleteGame = (id) => {
        const config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };

        fetch(`${this.baseURL}/games/${id}`, config)
            .then((res) => res.json())
    }
}