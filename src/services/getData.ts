export const ApiRick = async() => {
    try{
        const Rick = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json());
        console.log(Rick);

        return Rick.results;
    }catch(error){
        console.error(error);
    }
    
}

export const ApiNeko = async() => {
    try{
        const Neko = await fetch('https://nekos.best/api/v2/dance?amount=10').then(res => res.json());
        console.log(Neko);

        return Neko.results;
    }catch(error){
        console.error(error);
    }
    
}
