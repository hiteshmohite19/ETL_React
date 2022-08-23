import React, { useContext } from "react";
import { DataSourceContext } from "../../context/DataSourceConfContext";

function RDBMSConf() {

    const { dispatch } = useContext(DataSourceContext)

    const setHostIP = e => {
        let val = e.target.value
        
        dispatch({
            type: 'ADD_HOST_IP',
            payload:val
        })
    }

    const setHostPort = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_PORT",
            payload: val,
        });
    };
    const setDBName = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_DBNAME",
            payload: val,
        });
    };
    const setUsername = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_USERNAME",
            payload: val,
        });
    };
    const setPassword = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_PASSWORD",
            payload: val,
        });
    };
    


    return (
        <div className="contaianer">
            <div className="row">
                <div className="mb-2 col-4">
                    <label>Host IP Address</label>
                    <input
                        name="ip"
                        type="text"
                        className="form-control required"
                        required
                        placeholder="127.0.0.1"
                        onChange={setHostIP}
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Port</label>
                    <input
                        name="port"
                        type="text"
                        className="form-control"
                        placeholder="80"
                        onChange={setHostPort}
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Database Name</label>
                    <input
                        name="databasename"
                        type="text"
                        className="form-control"
                        placeholder="MyProject"
                        onChange={setDBName}
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="root"
                        onChange={setUsername}
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="rootpwd"
                        onChange={setPassword}
                    />
                </div>
            </div>
        </div>
    );
}

export default RDBMSConf;
