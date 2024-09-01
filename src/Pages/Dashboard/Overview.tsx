import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";

const Overview = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/025/871/650/non_2x/background-with-sport-equipment-vector.jpg')] bg-cover bg-center bg-no-repeat bg-fixed bg-opacity-50 h-screen pl-10">
    <h1 className="text-center text-black text-5xl font-bold pt-96">
      Welcome <span className="text-blue-500 font-bold">{user?.name}</span> in your Dashboard
    </h1>
  </div>
  
  );
};

export default Overview;
