const data = () => {
    return {
        data: {
            recipes: [],
        },
        init() {
            fetch('https://dummyjson.com/recipes')
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.data.recipes = Object.values(data);
                });
        },
    };
};

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(json => console.log(json))
