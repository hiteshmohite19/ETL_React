import React, { useContext, useState } from "react";
import { DataSourceContext } from "../../context/DataSourceConfContext";
import AWS_S3 from "./AWS_S3";
import RDBMSConf from "./RDBMSConf";

function DataSourceConfiguration() {

    const { conf,dispatch } = useContext(DataSourceContext);

    const [dbConf,setDbConf]=useState()

    const rdbms = ["MySql", "PostGreSql", "Oracle"];
    const aws_s3 = "AWS S3 Bucket";

    const onSourceChange = (e) => {
        const val = e.target.value;
        if (rdbms.includes(val)) setDbConf(<RDBMSConf />)
        else if (val === aws_s3) setDbConf(<AWS_S3 />)
        else setDbConf('')

        dispatch({
            type: "ADD_DBTYPE_NAME",
            payload: e.target.value
        });
    };



    return (
        <>
            {console.log(conf)}
            <h4>Database Configuration</h4>
            <hr />
            <div className="container">
                <div className="form-group mb-3">
                    <label>Select Source Database</label>
                    <select
                        className="form-select"
                        onChange={onSourceChange}
                    >
                        <option>Select</option>
                        <option value="MySql">MySql</option>
                        <option value="PostGreSql">PostGreSql</option>
                        <option value="Oracle">Oracle</option>
                        <option value="AWS S3 Bucket">AWS S3 Bucket</option>
                        {/* <option value="CSV">CSV</option> */}
                        <option value="Manual Upload">Manual Upload</option>
                    </select>
                </div>
                {dbConf}
            </div>
        </>
    );
}

export default DataSourceConfiguration;
