import { auth } from "@/lib/auth";

const Dashboard = async () => {
    const session = await auth();

  return (
    <div className="max-w-screen-xl mx-auto p-4 py-6">
      <h1 className="text-2xl">Dashboard</h1>
      <h2 className="text-xl">Welcome Back: <span className="font-bold">{session?.user?.name}</span></h2>
    </div>
  );
};

export default Dashboard;
