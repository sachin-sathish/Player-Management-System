import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cplayer, gsplayer, uplayer } from "../Service/PlayerService";

const Addplayer = () => {
  const [name, setname] = useState("");
  const [sport, setsport] = useState("");
  const [email, setemail] = useState("");

  //error
  const [error, seterror] = useState({
    name: "",
    sport: "",
    email: "",
  });

  const { id } = useParams();

  //update section the value should come automatically
  useEffect(() => {
    if (id) {
      gsplayer(id)
        .then((response) => {
          setname(response.data.name);
          setsport(response.data.sport);
          setemail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const navigate_add = useNavigate();
  // onchange function
  function handlename(e) {
    setname(e.target.value);
  }
  function handlesport(e) {
    setsport(e.target.value);
  }
  function handlemail(e) {
    setemail(e.target.value);
  }
  // add player button
  function handlesubmitandupdate(e) {
    e.preventDefault();
    if (validation()) {
      const player_pos = { name, sport, email };

      if (id) {
        uplayer(id, player_pos)
          .then((response) => {
            console.log(response.data);
            navigate_add("/Player");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        cplayer(player_pos)
          .then((response) => {
            console.log(response.data);
            navigate_add("/Player");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  //validation
  function validation() {
    const errorcopy = { ...error };
    let vaild = true;
    if (name.trim()) {
      errorcopy.name = " ";
    } else {
      errorcopy.name = "Name is Required";
      vaild = false;
    }

    if (sport.trim()) {
      errorcopy.sport = " ";
    } else {
      errorcopy.sport = "Sport is Required";
      vaild = false;
    }
    if (email.trim()) {
      errorcopy.email = " ";
    } else {
      errorcopy.email = "Email is Required";
      vaild = false;
    }
    seterror(errorcopy);
    return vaild;
  }

  // setting page title
  function pagetitle() {
    if (id) {
      return <h2 className="text-center">UPDATE PLAYER DETAILS</h2>;
    } else return <h2 className="text-center">ADD PLAYER DETAILS</h2>;
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark text-white mb-4 pt-3">
            {pagetitle()}
            <div className="card-body">
              <form>
                {/* name */}
                <div className="form-group mb-2">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handlename}
                    placeholder="Enter your name"
                    className={`form-control ${error.name ? "is-invalid" : ""}`}
                  />
                  {error.name && (
                    <div className="invaild-feedback">{error.name}</div>
                  )}
                </div>

                {/* sport */}
                <div className="form-group mb-2">
                  <label className="form-label">Sport</label>
                  <input
                    type="text"
                    name="sport"
                    value={sport}
                    onChange={handlesport}
                    placeholder="Enter your sport"
                    className={`form-control ${
                      error.sport ? "is-invalid" : ""
                    }`}
                  />
                  {error.sport && (
                    <div className="invaild-feedback">{error.sport}</div>
                  )}
                </div>

                {/* email */}
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handlemail}
                    placeholder="Enter your email"
                    className={`form-control ${
                      error.email ? "is-invalid" : ""
                    }`}
                  />
                  {error.email && (
                    <div className="invaild-feedback">{error.email}</div>
                  )}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handlesubmitandupdate}
                  >
                    Add Player
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addplayer;
