import {useState} from 'react'
import axios from 'axios';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function FruitCard(props) {
    const [button, setButton] = useState(<BsHeart size={32} />);

    const voteMe = () => {
        axios.put(`http://localhost:7000/fruits/${props.id}`, {"votes": props.votes+1} )
            .then((res) => { console.log("vote done")})
            .catch((err) => { console.log(err.message) })
        setButton(<BsHeartFill style={{color: "red"}} size={32} />);
        window.location.reload(true);
    }
    return (
        <>
            <div id={props._id} className="col-md-6 g-5">
            <div className="card" style={{ width: "30rem" }}>
                <img src={`http://localhost:7000/uploads/${props.image}`} className="card-img-top" height="300" />
                <div className="card-body d-flex justify-content-between">
                    <a style={{cursor: "pointer"}} onClick={voteMe}>{button}</a>
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                </div>
            </div>
            </div>
        </>
    )
}