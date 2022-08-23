import React, { useContext } from "react";
import { DataSourceContext } from "../../context/DataSourceConfContext";

function AWS_S3() {
    const { dispatch } = useContext(DataSourceContext);

    const setRoleARN = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_ROLE_ARN",
            payload: val,
        });
    };

    const setRoleSessionName = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_ROLE_SESSION_NAME",
            payload: val,
        });
    };

    const setBucketName = (e) => {
        let val = e.target.value;

        dispatch({
            type: "ADD_BUCKET_NAME",
            payload: val,
        });
    };

    return (
        <>
            <div className="contaianer">
                <div className="row">
                    <div className="mb-2 col-4">
                        <label>Role ARN</label>
                        <input
                            name="ip"
                            type="text"
                            className="form-control"
                            placeholder="arn:aws:my-project"
                            onChange={setRoleARN}
                        />
                    </div>
                    <div className="mb-2 col-4">
                        <label>Role Session Name</label>
                        <input
                            name="port"
                            type="text"
                            className="form-control"
                            placeholder="my-project"
                            onChange={setRoleSessionName}
                        />
                    </div>
                    <div className="mb-2 col-4">
                        <label>Bucket Name</label>
                        <input
                            name="databasename"
                            type="text"
                            className="form-control"
                            placeholder="lymsnsdfv"
                            onChange={setBucketName}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AWS_S3;
