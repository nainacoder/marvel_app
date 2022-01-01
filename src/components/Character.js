import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Card,CardHeader,CardContent,CardMedia,Typography} from "@material-ui/core";

const useStyles = makeStyles(()=>({
    root:{
        maxWidth:300,
        transition:"all .2s ease-in-out",
        cursor:"pointer",

        "&:hover":{
            transform:"scale(1.07)",
        }
    },
    media:{
        height:0,
        paddingTop:"56.25%", //16:9
    },
}));

function Character(name,description,imageURL,characterId) {
    const classes=useStyles();
    const handleClickCharacterCard = ()=>{

    }
    return (
       <Card className={classes.root} onClick={handleClickCharacterCard}>
<CardHeader title={name}
style={{textAlign: "center"}}/>
<CardMedia 
className={classes.media}
image={imageURL}
title="Iron Man"
/>
<CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
        { description || "A Marvel Character"}
    </Typography>
</CardContent>
       </Card>
    )
}

export default Character
