import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './create.css'

const Edit = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [review, setReview] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/game/'+id)
        .then((res)=>{
            console.log("sucess "+res.data);
            setTitle(res.data.title);
            setYear(res.data.year);
            setReview(res.data.review);
            setUsername(res.data.username);
        })
        .catch((err)=>{console.log(err)});
    },[id]);

    //review submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {title,year,review, username};
        console.log(game);

        //request to update game data
        axios.put('http://localhost:4000/api/game/'+id, game)
        .then((res)=>{
            console.log("Edited: "+res.data);
            navigate('/read');
        })
        .catch((err)=>{
            console.log(err);
        });
      
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{color: "white",}}>Edit Game Name: </label>
                    <input type="text"
                        style={{ color: '#98bff5' }}
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label style={{color: "white",}}>Edit Game Publishing Year: </label>
                    <input type="text"
                        style={{ color: '#98bff5' }}
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label style={{color: "white",}}>Edit Review: </label>
                    <textarea type="text"
                        style={{ color: '#98bff5' }}
                        className="form-control"
                        placeholder="Make sure to sign off your review!"
                        rows="20"
                        value={review}
                        onChange={(e) => { setReview(e.target.value) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input  type="text"
                        style={{ color: '#98bff5' }}
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input type="submit" value="Confirm Edit"></input>
                </div>
            </form>
        </div>
    );
}
export default Edit;