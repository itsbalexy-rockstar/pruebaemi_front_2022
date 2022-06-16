import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import { useCheckAuthentication } from "../hooks/useCheckAuthentication";
import ProfileView from "../myapp/views/ProfileView";
import Loader from "../ui/Loader";

const AppRouter = () => {
  const { status } = useCheckAuthentication();
  if (status === "checking") return <Loader />;
  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<ProfileView />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
