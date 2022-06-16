import { useState } from "react";
import Profile from "../../assets/profile.jpg";

const Item = ({ obj }) => {
  const { name, username, company } = obj;
  const [likes, setLikes] = useState(0);
  const [likesTrue, setLikesTrue] = useState(false);
  return (
    <div className="item">
      <div className="item-photo">
        <img src={Profile} alt="" />
      </div>
      <div className="item-info">
        <div className="item-info__user">
          <span className="item-info__user-name">{name}</span>
          <span className="item-info__user-username">@{username}</span>
        </div>
        <div className="item-info__message">
          <span>{company.catchPhrase}</span>
        </div>
        <div className="item-info__icons">
          <i class="fa-solid fa-comment">
            <span>2</span>
          </i>
          {likesTrue ? (
            <i
              class="fa-solid fa-heart"
              onClick={() => {
                setLikes(likes - 1);
                setLikesTrue(false);
              }}
            >
              <span>{likes}</span>
            </i>
          ) : (
            <i
              class="fa-regular fa-heart"
              onClick={() => {
                setLikes(likes + 1);
                setLikesTrue(true);
              }}
            >
              <span>{likes}</span>
            </i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
