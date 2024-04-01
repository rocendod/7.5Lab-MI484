async function recipes() {
    let res = await fetch('https://dummyjson.com/recipes');
    res = await res.json();
    return await res.recipes;
  }

//console.log(data) -what is inside data which should be the recipes//

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