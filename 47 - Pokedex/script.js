const containerEl = document.getElementById("container");
const types_of_cards = [
    {
        type: "grass",
        bg_color: "#28C76F"
    },
    {
        type: "fire",
        bg_color: "#FBB741",
    },
    {
        type: "water",
        bg_color: "#DEF4FC"
    },
    {
        type: "bug",
        bg_color: "#FFFDD0",
    },
    {
        type: "normal",
        bg_color: "#B6CAD7" 
    },
    {
        type: "poison",
        bg_color: "#50C878"
    },
     {
        type: "fairy",
        bg_color: "#F2C1D1"

    }, 
    {
        type: "fighting",
        bg_color: "#F0DC82"
    }, 
    {
        type: "psychic",
        bg_color: "#CEB092"  
    }, 
    {
        type: "electric",
        bg_color: "#BFBCFC"
    },
    {
        type: "ground",
        bg_color: "#C1ADAE"
    },
    {
        type: "rock",
        bg_color: "#817669"
    },
    {
        type: "ghost",
        bg_color: "#F8F8FF"
    },
    {
        type: "ice",
        bg_color: "#B9D4FA"
    },
    {
        type: "dragon",
        bg_color: "#D1692E"
    }

]

// Fetching the data from the API
async function getData(id) {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    createCard(data)
}

// Generating 150 Cards
async function generateCardId() {
    for (let i = 1; i <= 150; i++) {
        await getData(i)
    }
}
generateCardId()

// Creatong the card element
function createCard(data) {
    const {name, id, types } = data
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = generateBg(data)
    card.innerHTML = `<img src="https://pokemon.snowflakedev.org/img/${id}.png">
    <div class="circle"></div>
    <div class="card__info">
        <p class="id" id="id">#${(id < 10) ? `00${id}` : (id > 99) ? id : `0${id}`}</p>
        <h3 class="name" id="name">${name[0].toUpperCase() + name.slice(1, name.length)}</h3>
        <p class="type" id="type">Type: ${types[0].type.name}</p>
    </div>`
    containerEl.appendChild(card);
}


// generating the background color for each individual card
function generateBg(data) {
    const {types} = data;
    let bgColor = "";
    for (let i = 0; i < types_of_cards.length; i++) {
        if (types[0].type.name === types_of_cards[i].type) {
            bgColor = types_of_cards[i].bg_color
        }
    }
    return bgColor
}

