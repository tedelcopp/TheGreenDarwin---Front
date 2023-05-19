import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

const AdminGuard = ({ component }) => {
  const { user, isLoading } = useAuth0();
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (
    user &&
    user["https://pf-henry-front-one.vercel.app/roles"].includes("Admin")
  ) {
    return <Component />;
  }

  return <div>You are not authorized to access this page.</div>;
};

export default AdminGuard;
