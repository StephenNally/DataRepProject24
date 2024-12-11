import GameItem from "./gameitem";

function Games(props) {
    return (
        <>
            {props.myGames.map((game) => (
                <GameItem
                    mygame={game}
                    key={game._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Games;

