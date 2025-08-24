import axios from "axios";

const rest_api = "http://localhost:8080/api/Player";
// gets all data
export const gplayer = () => axios.get(rest_api);
// push all data to db
export const cplayer = (player_pos) => axios.post(rest_api, player_pos);
// gets single data
export const gsplayer = (Id) => axios.get(rest_api + "/" + Id);
// single data update(put)
export const uplayer = (id, player_pos) =>
  axios.put(rest_api + "/" + id, player_pos);
// delete player
export const dplayer = (id) => axios.delete(rest_api + "/" + id);
