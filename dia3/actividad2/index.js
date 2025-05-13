const { error } = require("qrcode-terminal");

const ArtGallery = [ 
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];

    ArtGallery.forEach(element => {
        console.log(element.title);
    });
    

    //Map para imprimir los titulos
    const map = ArtGallery.map(elemento => elemento.title);
    console.log('\n\n Mapeado de ArtGallery\n'); 
    console.log(map); 
    

    //Filter para imprimir los elementos de la lista que estén exhibidos
    const filter = ArtGallery.filter(elemento => elemento.isExhibited);
    console.log(filter);

    //Find para obra específica
    const obra = ArtGallery.find( (art) => art.title == title);

    if(!obra){
        return{ msg:"Obra no encontrada", error:404 }
    }
    return obra;

    const some = ArtGallery.some(elemento => elemento.year === 1503);
    console.log(filter);

    const every = ArtGallery.every(elemento => elemento.year < 1998);
    console.log(filter);


    const findIndex = ArtGallery.findIndex(elemento => elemento.title === "Guernica");
    console.log(findIndex);



