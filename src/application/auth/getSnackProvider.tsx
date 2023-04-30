import { FC } from "react";
import { ToastContainer } from "react-toastify";

export function getSnackProvider() {
  const SnackProvider: FC = () => {
    return <ToastContainer theme="colored" />;
  };

  return SnackProvider;
}
