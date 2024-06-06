import { Button } from "@mui/material";
import axios from "axios";

function PutAPI () 
{

    const PutAPI = () => {
        axios.put('https://jsonplaceholder.typicode.com/comments/1',{
            userId:1,
            id:1,
            name:'Edit Data',
            body: "lorem as sa sa d jdnjnjdnjd ajkanjnd",
        })
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    

    return (
        <div className="text-center mt-3">
            <Button onClick={PutAPI} variant="contained" >Put API</Button>
        </div>
    ) 

}

export default PutAPI;