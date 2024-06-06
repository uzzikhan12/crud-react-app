import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteAPI from '../components/DeleteAPI'
import GetAPI from '../components/GetAPI'
import PostAPI from '../components/PostAPI'
import PutAPI from '../components/PutAPI'

export default function ApiHandlingScreen () 
{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GetAPI />} />
                    <Route path="PutAPI" element={<PutAPI />} />
                    <Route path="PostAPI" element={<PostAPI />} />
                    <Route path="DeleteAPI" element={<DeleteAPI />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
