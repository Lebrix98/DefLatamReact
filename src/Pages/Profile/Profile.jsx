import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context";
import "./style.css";

export const Profile = () => {
  const [random, setRandom] = useState([]);
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");

  const { btnLogout, profileUser, token_jwt } = useContext(UserContext);

  useEffect(() => {
    if (token_jwt) {
      profileUser( setProfile);
    }
  }, []);

  const getUsernameFromEmail = (email) => {
    const trimmedEmail = email.trim();
    const parts = trimmedEmail.split("@");
    return parts[0];
  };

  const getData = async () => {
    try {
      const url = "https://randomuser.me/api/";
      const res = await fetch(url);
      const data = await res.json();
      setRandom(data.results);
    } catch (error) {
      setMessage(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="Container_profile">
        {!message ? (
          random.map((i, index) => {
            return (
              <div key={index} className="Content_profile">
                <div className="card_user">
                  <img
                    className="img_user"
                    src={i.picture.large}
                    alt={i.name.first}
                  />
                  <div className="information">
                    <h1 className="name">
                      {getUsernameFromEmail(profile.email)}
                    </h1>
                    <h3 className="email">
                      Correo Electrónico: {profile.email}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No se puede cargar el usuario, pruebe mas tarde.</h1>
        )}
        <div className="Content_btn">
          <button className="btn_logout" onClick={btnLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
