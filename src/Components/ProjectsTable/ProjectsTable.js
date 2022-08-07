import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function ProjectsTable() {

    const[projects,setProjects]=useState()

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
                fontSize: '17px',
                // backgroundColor:'grey'
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
            },
        },
    };

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            
        },
        {
            name: "Year",
            selector: (row) => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: "Beetlejuice",
            year: "1988",
        },
        {
            id: 2,
            title: "Ghostbusters",
            year: "1984",
        },
    ];

    if (data.length > 0) {
        return (
            <>
                <h4>No Projects</h4>
                {/* <br /> */}
                <p>To add one <Link to='/project-configuration' >Click here </Link></p>
            </>
        );
    }
    else {
        return (
            <DataTable
                columns={columns}
                data={data}
                dense
                direction="auto"
                fixedHeaderScrollHeight="300px"
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap
                fixedHeader
                title="Projects"
                customStyles={customStyles}
            />
        );
    }
}

export default ProjectsTable