const usernameSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;

    console.log( username );

    if (username.length < 5) {
        alert("Username not valid, must be 5 characters long");
        return;
    }

    //Success
    document.getElementById("user").innerHTML = username;

    // Hide username div
    document.getElementById("username-div").style.display="none";

    // Display game div
    document.getElementById("game-div").style.display="block";
}

const startGame = ( side ) => {

    console.log( "Start Game", side)
    // Hide results if tossed again.
    document.getElementById("results").style.display="none";

    // Display flipping div
    document.getElementById("flipping").style.display="block";

    setTimeout( () => {
        get_results( side );

        // Hide flipping div
        document.getElementById("flipping").style.display="none";

         // Display results div
        document.getElementById("results").style.display="block";
    }, 1000 );
}

const get_results = ( side ) => {
    const coin_side = Math.floor(Math.random() * (2 - 1 + 1) + 1);

    let flippedSide = "";

    if ( coin_side === 1){
        flippedSide = "Head";
    }else {
        flippedSide = "Tail";
    }

    document.getElementById("results").innerHTML = "Coin was flipped and result was <b>" +  flippedSide + "</b>";

    if( coin_side === 1){
       if( side === "head") {
            won();
       }else {
            lost();
        }
    }else{
        if ( side === "tail") {
            won();
        }else {
            lost();
        }
    }
}

const won = () => {
    setTimeout( () => {
        alert( "You Won" );
    }, 1000)
}

const lost = () => {
    setTimeout( () => {
        alert( "You Lost" );
    }, 1000)
}