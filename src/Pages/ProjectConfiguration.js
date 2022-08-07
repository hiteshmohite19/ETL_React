import React, { useState } from "react";
import DataSourceConfiguration from "../Components/DBConfForm/DataSourceConfiguration";
import { DataSourceProvider } from "../context/DataSourceConfContext";

function ProjectConfiguration() {

    const [projectname, setProjectName] = useState('')
    
    


    return (
        <div className="container mt-4">
            <h4>Add Project</h4>
            <div className="card mt-4">
                <div className="card-body ">
                    <DataSourceProvider>
                        <div className="row">
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    Project Name
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="eg.: New Project "
                                    onChange={(e)=>setProjectName}
                                />
                            </div>
                        </div>
                        <br />

                        <DataSourceConfiguration />
                    </DataSourceProvider>
                </div>
            </div>
        </div>
    );
}

export default ProjectConfiguration;
