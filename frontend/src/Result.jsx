import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Result() {
    //dynamic data getter
    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get('http://localhost:7000/fruits')
            .then((res) => { setData(res.data) })
            .catch((err) => { console.log(err.message) })
    }, [data]);

    return (
        <>
            <div className="container">
                <h1 className='text-center my-2'>Result</h1>
                <div className="row">
                    <div className="col-md-5 mx-auto border border-dark rounded">
                        <table className="table table-striped table-hover table-bordered mt-3">
                            <thead>
                                <tr className="table">
                                    <th scope="col">Title</th>
                                    <th scope="col">Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>{item.votes}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
