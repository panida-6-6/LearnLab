const cards = [
    ...document.querySelectorAll(".card")
];

const filters = [
    ...document.querySelectorAll(".filter")
];

const search = document.getElementById("search");

const empty = document.getElementById("empty");


let selectedFilter = "all";



function showCards() {

    const query =
        search.value
            .trim()
            .toLowerCase();


    let count = 0;


    cards.forEach(card => {

        const filterOK =
            selectedFilter === "all" ||
            card.classList.contains(selectedFilter);


        const searchOK =
            !query ||
            card.dataset.name
                .toLowerCase()
                .includes(query);


        const show =
            filterOK && searchOK;


        card.style.display =
            show ? "block" : "none";


        if (show) {
            count++;
        }

    });


    if (count === 0) {

        empty.style.display = "block";

    } else {

        empty.style.display = "none";

    }

}



/* FILTER BUTTON */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            selectedFilter =
                button.dataset.filter;


            showCards();

        }
    );

});



/* SEARCH */

search.addEventListener(
    "input",
    showCards
);
