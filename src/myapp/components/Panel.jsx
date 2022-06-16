import React, { useEffect } from "react";
import Profile from "../../assets/profile.jpg";
import Item from "./Item";
// import ModalGridFotos from "./ModalGridFotos";

const Panel = () => {
  const [data, setData] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);
  // const [open, setOpen] = React.useState(false);
  return (
    <div className="panel-container">
      <div className="panel-comments">
        <div className="panel-comment__custom">
          <div className="panel-comment__image-container">
            <div className="panel-comment__image">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="panel-comment__custom-container">
            <span>
              Hola nombre, cuéntale a tus compañeros. ¿Cómo va tu día laboral?
            </span>

            <input type="text" />

            <div className="panel-comment__custom-options">
              <div className="panel-comment__custom-options__icons">
                <i class="fa-solid fa-images"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-face-smile"></i>
              </div>
              <button>Publicar</button>
            </div>
          </div>
        </div>
        <div className="panel-comment__list">
          {data?.map((obj) => {
            return (
              <div key={obj.id}>
                <Item obj={obj} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel-aside">
        <div className="panel-follow">
          <h1>Fotos</h1>
          <div className="panel-follow__grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button onClick={() => setOpen(true)}>
            <i class="fa-regular fa-images"></i>Añadir fotos
          </button>
        </div>
        <div className="panel-friends">
          <h1>Amigos</h1>
          <div className="panel-friends__grid">
            {photos?.map((obj) => {
              return (
                <div key={obj.id}>
                  <img src={obj.url} alt="" />
                </div>
              );
            })}
          </div>
          <button>
            <i class="fa-regular fa-images"></i>Añadir amigos
          </button>
        </div>
      </div>
      {/* {open && <ModalGridFotos photos={photos} setOpen={setOpen}/>} */}
    </div>
  );
};

export default Panel;
