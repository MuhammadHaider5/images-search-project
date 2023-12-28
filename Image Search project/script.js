const accesskey = "IesQujz4g28lwnavGc7rO5d6ziq4iz6BxWA4wkYVOGc";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const morebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchresult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    });
    morebtn.style.display ="block";
}
searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

morebtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})