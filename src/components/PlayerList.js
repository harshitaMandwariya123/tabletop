import React, { useState } from "react";
import data from "./data";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function PlayerList(){
    const [players, setPlayers] = useState(data);
    const navigate = useNavigate();

    var removePlayer = (playerId) => {
        const filterData = players.splice(players.findIndex(e => e.id === playerId),1);
        setPlayers(filterData)
    }

    return(
        <div style={{marginTop:"50px"}} className="container">
            <div className="row"> 
                <div>
                    <Link className="nav-link" to="/add-player">Add Player</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 border">
                    <table className="table">
                        <thead>
                            <tr>
                            <th style={{border: "none"}} scope="col">Sr</th>    
                            <th style={{border: "none"}} scope="col">First Name</th>
                            <th style={{border: "none"}} scope="col">Last Name</th>
                            <th style={{border: "none"}} scope="col">Game Session</th>
                            <th style={{border: "none"}} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((each , index) => {
                                    return(
                                        <tr key={index}>
                                            <td style={{border: "none"}}>{each.id}</td>
                                            <td style={{border: "none"}}>{each.firstName}</td>
                                            <td style={{border: "none"}}>{each.lastName}</td>
                                            <td style={{border: "none"}}>{each.campaignName}</td>
                                            <td style={{border: "none"}}><button type="button" className="btn btn-danger" onClick={() => removePlayer(each.id)}>Remove</button></td>
                                            <td><Link  to= "/view-player" state= { {from: each} }>View</Link></td>
                                        </tr> 
                                    )
                                   
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  
}

export default PlayerList