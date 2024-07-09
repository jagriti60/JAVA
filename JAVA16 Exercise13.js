function createCard(title, cname, views, months, duration, thumbnail) {
    let viewStr
    if (1000 < views < 1000000) {
        viewStr = views / 1000 + "K";
    }
    else if(views < 1000){
        viewStr = views;
    }
    else{
        viewStr = views / 1000000 + "M";
    }
    let html = `<div class="card">
    <div class="image">
            <img src="${thumbnail}" />
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cname} . ${viewStr}views . ${months}months ago </p>
        </div>
</div>`
document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + html;
}

createCard("Installing VSCode| Sigma WebD Course", "CodeWithHarry", 777000, 7, "33:55", "https://i.ytimg.com/vi/chYx6vVzWVw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKWHa8QWEZt5oz2rRUHRufrr5iIw")
