import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../../assets/profile.jpg";
import Modal from "../../ui/Modal";
import FormDataImages from "./FormDataImages";
import FormDataProfile from "./FormDataProfile";
import { openModal } from "../../store/profile";

const Hero = () => {
  const dispatch = useDispatch();
  const { name, occupation, description } = useSelector(
    (state) => state.profile
  );
  return (
    <div className="hero-container">
      <div className="hero-background-image">
        <button
          className="hero-background__btn"
          onClick={() => dispatch(openModal())}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <span className="hero-background__title">Juntos lo hacemos mejor</span>
        <div className="hero-background__contact">
          <span>
            <i class="fa-regular fa-envelope"></i>
          </span>
          <span>
            <i class="fa-solid fa-phone"></i>
          </span>
        </div>
      </div>
      <div className="hero-user">
        <div className="hero-user__image">
          <div className="rounded-1">
            <img
              src={Profile}
              alt=""
              className="hero-user__image-image"
              id="image"
            />
          </div>
        </div>
        <div className="hero-user__info">
          <div className="hero-user__followers">
            <span className="hero-user__name">{name}</span>
            <button className="hero-user__btn">
              <span className="hero-user__number">35</span>Siguiendo
            </button>
          </div>
          <div className="hero-user__followers">
            <span className="hero-user__occupation">{occupation}</span>
            <button className="hero-user__btn">
              <span className="hero-user__number">70</span>Seguidores
            </button>
          </div>
          <p className="hero-user__description">{description}</p>
          <button
            className="hero-user-edit__btn"
            onClick={() => dispatch(openModal())}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
      <Modal component={FormDataProfile} />
    </div>
  );
};

export default Hero;
