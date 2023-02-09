books = [{
        'title': 'Javascript for Dummies',
        'author': 'Dummy Dumb Dumb',
        'read': 'false',
        'cover': '../../../../../Downloads/javascript.jpg'
    },
    {
        'title': 'effective Java',
        'author': 'Joshua Bloch',
        'read': 'false',
        'cover': '../../../../../Downloads/code.jpg'
    },
    {
        'title': 'taocp',
        'author': 'donald knuth',
        'read': 'false',
        'cover': '../../../../../Downloads/Knuth.png',
        'img_license': 'By Alex Handy - Flickr: DSC_0098, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=74833832'
    },
    {
        'title': 'Jerry Cotton: I Sought the Gang Boss',
        'author': 'Heinz Höber',
        'read': 'true',
        'cover': '../../../../../Downloads/agent.jpg',
        'img_license': 'Image by <a href="https://pixabay.com/users/10634669-10634669/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4134645">Sam Williams</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4134645">Pixabay</a>'
    }
];

console.log(books);
localStorage.setItem('books', JSON.stringify(books));

books = JSON.parse(localStorage.getItem('books'));

container = document.querySelector("container");
console.log(books);
const read_style = {
    "color": "red",
    "backgroundColor": "lightgrey",
    toString: function() {
        r = 'style="';
        for ([k, v] of Object.entries(this)) {
            if (typeof v != "function")
                r += `${k}:${v};`;
        }
        r += '"';
        return r;
    }
}

for (let book of books) {

    st = book.read == 'true' ? read_style.toString() : "";

    container.innerHTML += `
    <div>
    <div class="card" style="width:18rem;">
        <img src="${book.cover}" class="card-img-top" height="260px" alt="...">
        <div class="card-body">
          <h5 class="card-title " ${st}>${book.title}</h5>
          <p class="card-text ${st}">by ${book.author}</p>
          <a  class="btn btn-primary read-button">read</a>
        </div>

    </div>
</div>


    `;
}

function set_status() {

    cards = document.querySelectorAll(".card-title");
    btns = document.querySelectorAll(".read-button");
    for (let i in cards) {


        if (this == btns[i]) {
            card = cards[i];
            toggle = false;
            for (let [st, v] of Object.entries(read_style)) {

                if (card.style[st] == v) { toggle = true; break; }
                card.style[st] = v;
            }
            if (toggle) {
                for (let [st, v] of Object.entries(read_style)) {

                    card.style[st] = '';
                }
            }
        }
    }
}
Array.from(document.querySelectorAll(".read-button")).forEach((e) => { e.addEventListener('click', set_status) });