import React from "react";
import UserMenu from "../components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto p-3 flex">

        {/* Sidebar (Desktop only) */}
        <aside className="hidden md:block w-[250px] border-r sticky top-24">
          <UserMenu />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>

      </div>
    </section>
  );
};

export default Dashboard;
