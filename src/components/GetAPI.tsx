import { Button} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetAPI () 
{

    const [getAPIData , setGetAPIData] = useState<any>([]);
    const nevigate = useNavigate();

    const getAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            console.log(res);
            setGetAPIData([...res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const columns = [
        {header: "ID"},
        {header: "PostID"},
        {header: "NAME"},
        {header: "EMAIL"},
        {header: "BODY"},
        {header: ""},
    ]


    return(
        
        <div className="container text-center">
            <Button variant="contained" className="mt-3 m-1" onClick={()=>{nevigate("/PostAPI")}}>Post API</Button>
            <Button variant="contained" className="mt-3 m-1" onClick={()=>{nevigate("/PutAPI")}}>Put API</Button>
            <Button variant="contained" className="mt-3 m-1" onClick={()=>{nevigate("/DeleteAPI")}}>Delete API</Button>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-sx-12">

                <table className="table table-striped border shadow mt-3">
                    <thead>
                        <tr>
                        {columns.map((col:any,ind:any)=> 
                            <th key={ind}>{col.header}</th>
                        )}
                        </tr>
                    </thead>

                    <tbody>
                        {getAPIData.map((col:any,colInd:any)=>
                            <tr key={colInd}>
                                <td  className="border">{col.id}</td>
                                <td  className="border">{col.postId}</td>
                                <td  className="border">{col.name}</td>
                                <td  className="border">{col.email}</td>
                                <td  className="border" colSpan={2}>{col.body}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                    <Button  className='mt-3 mb-3' onClick={getAPI} variant="contained">Get Data</Button>
                </div>
                
                
         </div>    
        </div>
    )
}

export default GetAPI