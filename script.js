const searchBtn = document.querySelector("#app__search").addEventListener("click", findActivity);

function findActivity() {
    fetch("http://www.boredapi.com/api/activity")
        .then((data) => data.json())
        .then((data) => {
            const searchResult = document.querySelector("#app__result");
            searchResult.textContent = data.activity;
            console.log(data.type);
        });
}

console.log(searchBtn);
