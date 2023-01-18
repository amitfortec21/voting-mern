import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import FruitCard from './FruitCard';

export default function Home() {
    const navigate = useNavigate();
    
    //dynamic data getter
    const [data, setData] = useState([{_id:"", title:"", votes:0, image:""}]);

    // randomize index
    let random1 = Math.floor(Math.random() * data.length);
    let random2 = Math.floor(Math.random() * data.length);
    if (random1 === random2) {
        random2 = Math.floor(Math.random() * data.length);
    }

    useEffect(() => {
        axios.get('http://localhost:7000/fruits')
            .then((res) => {setData(res.data)})
            .catch((err) => { console.log(err.message) })
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <h1 className='text-center pt-1 '>Voting App</h1>
                        <button className='btn btn-dark' onClick={()=>{navigate("/result")}}>Result</button>
                    </div>

                    {/* dynamic from db */}
                    <FruitCard id={data[random1]._id} title={data[random1].title} votes={data[random1].votes} image={data[random1].image} />
                    <FruitCard id={data[random2]._id} title={data[random2].title} votes={data[random2].votes} image={data[random2].image} />
                </div>
            </div>
        </>
    )
}