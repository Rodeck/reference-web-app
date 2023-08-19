import { Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebaseApp } from "./auth";
import Loader from "./spinner";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({authenticationPath, outlet}: ProtectedRouteProps) {

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loader></Loader>

  if(user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
