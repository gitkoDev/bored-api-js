const searchBtn = document.querySelector("#app__search").addEventListener("click", findActivity);

// Getting the dropdown menu items start
const typeItems = Array.from(document.querySelectorAll(".select-type__item"));

const selectTypeText = document.querySelector("#select-type__title h2");
// Getting the dropdown menu items finish

// Put the chosen type of activity in the drowdown title
typeItems.forEach((choice) => {
    choice.addEventListener("click", chooseItem);
});

function chooseItem(item) {
    const selectTypeText = document.querySelector("#select-type__title h2");
    selectTypeText.innerText = item.target.innerText;
    typeList.classList.toggle("select--show");
}

function findActivity() {
    const chosenItem = selectTypeText.innerText.toLowerCase();
    console.log(chosenItem);
    fetch(`http://www.boredapi.com/api/activity?type=${chosenItem}`)
        .then((data) => data.json())
        .then((data) => {
            const searchResult = document.querySelector("#app__result");
            searchResult.textContent = data.activity;
        })
        .catch(() => {
            console.log("error");
        });
}

const selectTypeBtn = document.querySelector("#select-type__title");
const typeList = document.querySelector("#select-type__options");

// Open select dropdown menu
selectTypeBtn.addEventListener("click", () => {
    typeList.classList.toggle("select--show");
    console.log(typeList.classList.contains("select--show"));
    const selectArrow = document.querySelector("#select-type__title i");
    selectArrow.classList.toggle("arrow-rotate");
});
