import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";

const Overview = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="h-screen ">
    <h1 className="text-center text-black text-5xl font-bold pt-96">
      Welcome <span className="text-blue-500 font-bold">{user?.name}</span> in your Dashboard
    </h1>
  </div>
  
  );
};

export default Overview;
