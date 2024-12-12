import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const GameItem = (props)=> {
  useEffect(() => {
    console.log("Game Item:", props.mygame);
  }, [props.mygame]); // Only run this effect when the mygame prop changes


const handleDelete = (e)=>{
  e.preventDefault();

  axios.delete('http://localhost:4000/api/game/'+props.mygame._id)
  .then((res)=>{
    props.Reload();
  })
  .catch((error)=>{
    console.log(error);
  })
}
  return (
    <div>
      <Card style={{backgroundColor: '#1e3657', color: '#98bff5', marginBottom: '30px'}}>
        <Card.Header style={{ fontSize: '1.5rem', fontWeight: 'bold' ,}}>{props.mygame.title}</Card.Header>
        <Card.Body style={{padding: '20px', borderRadius: '8px',}}>
          <blockquote className="blockquote mb-0">
          <footer>Release: {props.mygame.year}</footer>
          <footer>{props.mygame.review}</footer>
          <footer>Review by: {props.mygame.username}</footer>
          <footer>Posted on: {new Date(props.mygame.createdAt).toLocaleString()}</footer>
        
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edit/"+props.mygame._id}>Edit</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default GameItem;