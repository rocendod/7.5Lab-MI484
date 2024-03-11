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

//console.log(data) -what is inside data which should be the recipes//
