
const data = () => {
    return {
        data: {
            ingrdeients: [],
        },
        init() {
            fetch('https://dummyjson.com/recipes').then((res) => {
            return res.json();
            })
            .then((data) => console.log(data));
        }
    }
}

