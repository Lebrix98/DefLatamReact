import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context";
import "./style.css";

export const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [message, setMessage] = useState("");

  const { btnLogout } = useContext(UserContext);

  const getData = async () => {
    try {
      const url = "https://randomuser.me/api/";
      const res = await fetch(url);
      const data = await res.json();
      setProfile(data.results);
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
          profile.map((i, index) => {
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
                      {i.name.first} {i.name.last}
                    </h1>
                    <h3 className="location">
                      Dirección: {i.location.state}, {i.location.city} ,
                      {i.location.country}
                    </h3>
                    <h3 className="email">Correo Electrónico: {i.email}</h3>
                    <h3 className="contact">Contacto: {i.cell}</h3>
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
