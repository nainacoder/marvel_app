import React from 'react'
import Character from "./Character"
import {fetchCharacters} from "../MarvelApp.service"
import {ACTION_TYPES, dataReducer,FETCH_STATE,initialState} from "../reducer/DataReducer"
import styled from "styled-components"
import {Skeleton} from "@material-ui/lab"

const StyledCharacterList = styled.div`
display:flex;
flex-wrap:wrap;
gap:50px;
justify-content:center;
`



const CharacterList = () =>{
    
   const [state,dispatch]=React.useReducer(dataReducer,initialState)

   const {data:characters,fetching,error} = state

   const fetchData = async ()=>{
       dispatch({
           type: ACTION_TYPES.FETCH_DATA_INITIATE
       })
       const data = await fetchCharacters()
       if(data === null)
           dispatch({
               type:ACTION_TYPES.FETCH_DATA_FAILURE
           })
       else dispatch({
           type:ACTION_TYPES.FETCH_DATA_SUCCESS,
           payload:{
               data
           }
       })
   }
    React.useEffect(() => {fetchData()
       
    },[])
if(fetching === FETCH_STATE.PENDING)
return(
<StyledCharacterList>
<Skeleton 
animation="wave"
variant="rect"
width={300}
height={450}
/>
<Skeleton 
animation="wave"
variant="rect"
width={300}
height={450}
/>
<Skeleton 
animation="wave"
variant="rect"
width={300}
height={450}
/>
<Skeleton 
animation="wave"
variant="rect"
width={300}
height={450}
/>
</StyledCharacterList>)
{/* <h1>Loading...</h1> */}


if(fetching=== FETCH_STATE.REJECTED)
return<h1>{error}</h1>

    return (
<StyledCharacterList> 
{characters && characters.length !== 0 ? (
                characters.map(character => (
                    <Character
                        key={character.id}
                        name={character.name}
                        description={character.description}
                        imageURL={character.imageURL}
                        characterId={character.id}
                    />
                ))
            ) : (
                <h1>No Characters found</h1>
            )}
    
    </StyledCharacterList>

                   
        
    )
}

export default CharacterList
