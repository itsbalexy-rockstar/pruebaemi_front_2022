import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profile.jpg";
import { startLogout } from "../../store/auth/thunks";
import React, { useEffect, useState } from "react";
// import { changeMinutes, changeSeconds } from "../../store/profile/profileSlice";

const Navbar = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };
  useEffect(() => {
    //pending: guardar timer en el store
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      return () => {
        setSeconds(0);
        setMinutes(0);
      };
    }
  });
  return (
    <div className="navbar-container">
      <div class="navbar-section">
        <p>
          Tiempo de trabajo activo:{" "}
          <span className="timer">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
        </p>
        <div className="navbar-section-options">
          <div className="navbar-section-option">
            <span>Oficina</span>
            <input type="checkbox" class="toggle" onChange={() => setIsTimerRunning(!isTimerRunning)} />
          </div>
          <div className="navbar-section-option">
            <span>Almuerzo</span>
            <input type="checkbox" class="toggle" onChange={() => setIsTimerRunning(!isTimerRunning)}/>
          </div>
          <div className="navbar-section-option">
            <span>Descanso</span>
            <input type="checkbox" class="toggle" onChange={() => setIsTimerRunning(!isTimerRunning)}/>
          </div>
          <div className="navbar-section-option">
            <span>Reunión</span>
            <input type="checkbox" class="toggle" onChange={() => setIsTimerRunning(!isTimerRunning)}/>
          </div>
        </div>
      </div>
      <div class="navbar-profile">
        <i class="fa-solid fa-bell bell"></i>
        <img src={profileImage} alt="" className="navbar-profile-image" />
        <button className="navbar-btn" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;
