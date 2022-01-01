
import axios from "axios"

//axios returns promise, to consume promise there are 2 ways--> .then and async await
//async functionName
//if it is normal function async is ahead of function else in arrow function  before brackets

export const fetchCharacters = async ()=> {
try{
const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`)
const characters = response?.data?.data?.results.map(character => ({
    id: character.id,
    name: character.name,
    description: character.description,
    imageURL: `${character.thumbnail.path}.jpg`,
}))

// console.log("Characters Data:", response)
return characters


}catch(error){
    console.log("error Fetching Characters:", error)
    return null
}
}