const form = document.getElementById("interface");
const displayError = document.getElementById("displayError");

form.addEventListener("submit" ,async (event) => {
    event.preventDefault();
    displayError.textContent="";
    const pokemonName = document.getElementById("pokemonName").value;
    
    if(pokemonName){
        try{
            const data = await getData(pokemonName);
            displayData(data);
        }
        catch(error){
            displayError.textContent = "Check Name of the pokemon enterd"
            console.error(error);
        }
    }
    else{
        displayError.textContent = "Please enter a pokemon name"
    }
});



async function getData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
        throw new Error("Could not get the rigth response from API");
    }
    return await response.json();
}

function displayData(data){
    const displayPokemon = document.getElementById("displayPokemon");
    displayPokemon.src = data.sprites.front_default
    console.log(data);
}