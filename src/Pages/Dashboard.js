import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsTable from "../Components/ProjectsTable/ProjectsTable";

function Dashboard() {
    return (
        <div className="container mx-2 mt-3">
            <ProjectsTable />
        </div>
    );
}

export default Dashboard;
