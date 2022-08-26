// GET ALL CHARACTERS 
export const getAllCharacters = async (page) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}