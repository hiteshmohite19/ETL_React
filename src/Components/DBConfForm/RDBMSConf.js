import React from "react";

function RDBMSConf() {
    return (
        <div className="contaianer">
            <div className="row">
                <div className="mb-2 col-4">
                    <label>Host IP Address</label>
                    <input
                        name="ip"
                        type="text"
                        className="form-control"
                        placeholder="127.0.0.1"
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Port</label>
                    <input
                        name="port"
                        type="text"
                        className="form-control"
                        placeholder="80"
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Database Name</label>
                    <input
                        name="databasename"
                        type="text"
                        className="form-control"
                        placeholder="MyProject"
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="root"
                    />
                </div>
                <div className="mb-2 col-4">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="rootpwd"
                    />
                </div>
            </div>
        </div>
    );
}

export default RDBMSConf;
