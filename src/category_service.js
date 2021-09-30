class CategoryService {
    constructor(port){
        this.port = port;
    }

    getCategories(){
        fetch(this.port + `/categories`)
        .then(response => response.json())
        .then(data => console.log(data))
    } 
}