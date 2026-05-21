


const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")


arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
        arrow.addEventListener("click",() => {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap()
                .get("transform")[0].x.value-430}px)`;
        });
});