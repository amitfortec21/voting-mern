import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddFruit() {
    const [formData, setFormData] = useState({});
    const [errmsg, setErrmsg] = useState();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  
      const handleImage = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
  
      const handleSubmit = (e) => {
        e.preventDefault();
        const finalFormData = new FormData();
        finalFormData.append('title', formData.title)
        finalFormData.append('image', formData.image)
        addFruit(finalFormData);
      };

      const addFruit = async (data) => {
        await axios.post(`http://localhost:7000/fruits/add`, data)
        .then(res => { alert(res.data.message); navigate("/")})
        .catch(err => {setErrmsg(err.response.data.message)});
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-center my-3">Add Fruit</h1>
                        <form action="" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter Title</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter fruit title" onChange={handleInputChange} />
                                <small className="text-danger">{errmsg}</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Select Image</label>
                                <input type="file" className="form-control" name="image" onChange={handleImage} required />
                            </div>
                            <div className="d-flex flex-column">
                                <button className="btn btn-dark fw-bold" type="submit">Add Fruit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
