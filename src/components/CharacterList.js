import React from 'react'
import Character from "./Character"
import {fetchCharacters} from "../MarvelApp.service"
import {ACTION_TYPES, dataReducer,FETCH_STATE,initialState} from "../reducer/DataReducer"

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
return<h1>Loading...</h1>


if(fetching=== FETCH_STATE.REJECTED)
return<h1>{error}</h1>

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Character />
        </div>
    )
}

export default CharacterList
