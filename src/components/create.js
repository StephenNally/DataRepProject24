import axios from "axios";
import { useState } from "react";
import './create.css'

const Create = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title,year,poster};
        console.log(movie);

        axios.post('http://localhost:4000/api/movies',movie)
        .then((res)=>{console.log(res.data)})
        .catch();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Add Game Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Game Publishing Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Write Review: </label>
                    <textarea type="text"
                        className="form-control"
                        placeholder="Make sure to sign off your review!"
                        rows="20"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Publish Review"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;