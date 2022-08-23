
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { FaPenSquare, FaTrash, FaPlus } from "react-icons/fa";
import { toast } from 'react-toastify';
import { DataSourceContext } from '../../context/DataSourceConfContext';

function ProjectsTable() {

    // const[projects,setProjects]=useState([])

    const { projects_list,dispatch }=useContext(DataSourceContext)

    const customStyles = {
        rows: {
            style: {
                minHeight: "72px", // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
                fontSize: '20px',
                // backgroundColor:'grey'
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
                fontSize:'15px'
            },
        },
    };

    


    useEffect( () => {
        fetch("http://127.0.0.1:8000/dbconf/projectList", {
            method: "GET"
        })
            .then((resp) =>{ return resp.json()})
            .then((resp) => {
                // setProjects(resp['data'])
                dispatch({
                    type: 'SET_PROJECTS_LIST',
                    payload:resp['data']
                })

                console.log(projects_list);
            });
    }, []);


    const deleteProjectConf = (table_name) => {
        fetch("http://127.0.0.1:8000/dbconf/deleteTableConf", {
            method: "POST",
            body: JSON.stringify({ 'project_name': table_name }),
        }).then((resp) => {return resp.json()})
            .then((resp) => {
                console.log(resp);
                if (resp['status']==true) {
                    toast.success(resp['msg'])
                } else {
                    toast.error(resp["msg"]);
                }
            console.log(resp);
                dispatch({
                    type: "SET_PROJECTS_LIST",
                    payload: resp["data"],
                });
            });
    }



    const columns = [
        {
            name: "Project Name",
            selector: (row) => row.project_name,
        },
        {
            name: "Data Source",
            selector: (row) => row.data_source,
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <Link
                        to={"project-configuration/" + row.project_name}
                        className="btn btn-sm btn-primary"
                    >
                        <FaPenSquare />
                    </Link>
                    &nbsp;
                    <button
                        onClick={()=>deleteProjectConf(row.project_name)}
                        className="btn btn-sm btn-danger"
                    >
                        <FaTrash />
                    </button>
                </>
            ),
        },
    ];
    
    const returnComponent =
        projects_list.length > 0 ? (
            <>
                <div className="container d-flex p-2">
                    <h4>Projects </h4>

                    <Link
                        className="ms-auto btn btn-sm btn-primary"
                        to="/project-configuration"
                    >
                        <FaPlus />
                        Add Project
                    </Link>
                </div>
                <DataTable
                    columns={columns}
                    data={projects_list}
                    dense
                    direction="auto"
                    fixedHeaderScrollHeight="300px"
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap
                    fixedHeader
                    customStyles={customStyles}
                />
            </>
        ) : (
            <>
                <h4>No Projects</h4>
                <p>
                    To add one{" "}
                    <Link to="/project-configuration">Click here </Link>
                </p>
            </>
        );

    return returnComponent
}

export default ProjectsTable