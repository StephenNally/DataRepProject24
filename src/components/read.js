import axios from "axios";
import { useState, useEffect } from "react";
import Games from "./games";

function Read() {
    const [data, setData] = useState([]);

    const Reload = () => {
        console.log("Reloading game review data...");
        axios.get('http://localhost:4000/api/games')
            .then((response) => {
                setData(response.data.games);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h2 style={{ color: "white" }} >Review Library</h2>
            <Games myGames={data} ReloadData={Reload} />
        </div>
    );
}

export default Read;