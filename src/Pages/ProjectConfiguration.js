import React, { useContext, useState } from "react";
import DataSourceConfiguration from "../Components/DBConfForm/DataSourceConfiguration";
import { DataSourceContext, DataSourceProvider } from "../context/DataSourceConfContext";

function ProjectConfiguration() {

    const [projectname, setProjectName] = useState('')

    const {dispatch}=useContext(DataSourceContext)
    
    const setProjectNameConf = (e) => {
        let val = e.target.value
        setProjectName(val)

        dispatch({
            action: "ADD_PROJECT_NAME",
            payload:val
        })

    }


    return (
        <div className="container mt-4">
            <h4>Add Project</h4>
            <div className="card mt-4">
                <div className="card-body ">
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                Project Name
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="eg.: New Project "
                                value={projectname}
                                onChange={(e) => setProjectNameConf}
                            />
                        </div>
                    </div>
                    <br />

                    <DataSourceConfiguration />
                </div>
            </div>
        </div>
    );
}

export default ProjectConfiguration;
