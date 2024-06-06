import { Button } from "@mui/material";
import axios from "axios";

function PostAPI () 
{
    
    const PostAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/comments',{
            userId:1,
            title:'ABC Title',
            completed: true
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="text-center mt-3">
            <Button variant="contained" onClick={PostAPI}>Post</Button>
        </div>
    )
}

export default PostAPI;