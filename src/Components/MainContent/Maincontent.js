import React from "react";
import "./maincontent.css";
import { Routes, Route } from "react-router-dom";
import DataSource from "../../Pages/DataSource";
import Dashboard from "../../Pages/Dashboard";
import ProjectConfiguration from "../DBConfForm/ProjectConfiguration";
import { DataSourceProvider } from "../../context/DataSourceConfContext";

function Maincontent() {
    return (
        <div className="maincontent">
            <DataSourceProvider>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                        path="/data-source/"
                        exact
                        element={<DataSource />}
                    />
                    <Route
                        path="/project-configuration"
                        element={<ProjectConfiguration />}
                    />
                </Routes>
            </DataSourceProvider>
        </div>
    );
}

export default Maincontent;
