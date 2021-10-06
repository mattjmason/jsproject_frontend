class CategoryDropdown {

    constructor(optionsArray) {
        this.optionsArray = optionsArray
        this.renderSelect()
        this.renderOptions(optionsArray)
        this.attachEventListener()
    }

    static categoryCollection = document.querySelector(".center")

    renderSelect() {
        const select = document.createElement("SELECT");
        this.select = select
        select.setAttribute("id", "category-dropdown");
        select.setAttribute("name", "category");
        const option = document.createElement("OPTION")
        this.option = option
        option.setAttribute("id", "category-list")
        option.setAttribute("name", "select-category")
        select.append(option)
        CategoryDropdown.categoryCollection.append(select)
    }

    renderOptions = (optionsArray) => {
        optionsArray.forEach(option => {
            this.select.innerHTML += `
            <option id=${option.id} value="${option.id}">${option.name}</option>
            `
        })
    }

    attachEventListener = () => {
        this.select.addEventListener("change", this.handleChange)
    }

    handleChange = (event) => {
            GameCard.renderByCategory(parseInt(event.target.value))
    }
}
