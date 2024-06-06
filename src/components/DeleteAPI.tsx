import { Button } from "@mui/material";
import axios from "axios";

function DeleteAPI () 
{
    const DeleteAPI = () => {
        axios.delete('https://jsonplaceholder.typicode.com/comments/1')
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="text-center mt-3">
            <Button onClick={DeleteAPI} variant="contained">Delete API</Button>
        </div>
    )
}
export default DeleteAPI;