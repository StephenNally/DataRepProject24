import axios from "axios";
import { useState } from "react";
import './create.css'

const Create = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [review, setReview] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {title,year,review, username};
        console.log(game);

        axios.post('http://localhost:4000/api/games', game)
        .then((res) => {
            console.log(res.data);
            alert('Review submitted successfully!');
            // clear form
            setTitle('');
            setYear('');
            setReview('');
            setUsername('');
        })
        .catch((err) => {
            console.error('Error:', err);
            alert('Failed to submit the review.');
        });
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
                        value={review}
                        onChange={(e) => { setReview(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input  type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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