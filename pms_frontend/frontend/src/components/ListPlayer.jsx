import React, { useEffect, useState } from "react";
import { dplayer, gplayer } from "../Service/PlayerService";
import { useNavigate } from "react-router-dom";

// list of player usestate
const ListPlayer = () => {
  const [player, setplayer] = useState([]);

  // navigator variable
  const navigator = useNavigate();

  // getting all player using useffect
  useEffect(() => {
    getallplayer();
  }, []);

  function getallplayer() {
    gplayer()
      .then((response) => {
        setplayer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ONCLICK FUNCTION
  function btfun() {
    navigator("/addplayer");
  }
  // update player
  function updateplayer(id) {
    navigator(`/updateplayer/${id}`);
  }
  //delete player
  function deleteplayer(id) {
    dplayer(id)
      .then((response) => {
        getallplayer();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="h4 mb-0">LIST OF PLAYERS</h2>
            <button className="btn btn-success" onClick={btfun}>
              <i className="bi bi-plus-lg me-1"></i> ADD PLAYER
            </button>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-dark table-hover mb-0 shadow-table">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">PLAYER_ID</th>
                  <th>NAME</th>
                  <th>SPORT</th>
                  <th>EMAIL</th>
                  <th className="pe-4 text-end">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {player.map((players) => (
                  <tr key={players.playerId}>
                    <td className="ps-4">{players.playerId}</td>
                    <td>{players.name}</td>
                    <td>{players.sport}</td>
                    <td>{players.email}</td>
                    <td className="pe-4 text-end">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => updateplayer(players.playerId)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteplayer(players.playerId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPlayer;
