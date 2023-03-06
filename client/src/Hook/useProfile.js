import { useContext } from "react";
import { MultiverseContext } from "../ContextApi/contextapi";
import axios from "axios";

function useProfile() {
  const { setUserInfo } = useContext(MultiverseContext);
  const handleViewProfile = async (id) => {
    const user = await axios.get(`http://localhost:8080/signin/${id}`);
    setUserInfo(user.data);
  };
  return { handleViewProfile };
}

export default useProfile;
