import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLoginWithEmailAndPassword } from "../../store/auth/thunks";
const LoginView = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword({email, password}));
    navigate("/");
  };
  return (
    <div className="login-container animate__animated animate__fadeIn">
      <div></div>
      <div className="login-container__form">
        <h1 className="login-title">Bienvenido</h1>
        <p className="login-subtitle">
          Inicia sesión en tu cuenta para empezar tu jornada laboral.{" "}
        </p>
        <p className="login-subtitle">Esperamos que tengas un excelente día.</p>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-form__input-wrapper">
            <input
              type="text"
              placeholder="Correo electrónico"
              name="email"
              className="login-form__input-email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="login-form__input-wrapper">
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              className=""
              value={password}
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-key"></i>
          </div>
          <label className="login-form__conditions">
            <input type="checkbox" className="login-form__sesion"/>
            <span>Mantenerme conectado</span>
          </label>
          <hr />
          <div className="login-form__btns">
            <Link to="/profile" className="login-form__btn">
              Recuperar contraseña
            </Link>
            <button className="login-form__btn" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default LoginView;
