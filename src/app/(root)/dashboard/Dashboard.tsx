import { redirect } from "next/navigation";
import WalletBalance from "./WalletBalance";
import { auth, currentUser } from "@clerk/nextjs/server";

const Dashboard = async () => {
  console.log("hi")
  const user = await currentUser();
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  return (
    <div className="pt-32 px-8 md:px-20">
      <div className="flex gap-4 w-full flex-col md:flex-row  justify-between">
        <div className="flex flex-col gap-1">
          <h2>Welcome back {user?.fullName}</h2>
          <p className="text-sm text-gray-500">
            Stay connected to your loved ones.
          </p>
        </div>
        <button className="normal-button">Fund Wallet</button>
      </div>
      <div className="mt-10">
        <WalletBalance />
      </div>
    </div>
  );
};

export default Dashboard;
