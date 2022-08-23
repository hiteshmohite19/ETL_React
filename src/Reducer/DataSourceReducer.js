export const DataSourceReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PROJECT_NAME":
            state.conf["project_name"] = action.payload;
            return { ...state };
        case "ADD_DBTYPE_NAME":
            state.conf["data_source"] = action.payload;
            return { ...state };
        case "ADD_HOST_IP":
            state.conf["host_ip"] = action.payload;
            return { ...state };
        case "ADD_PORT":
            state.conf["port"] = action.payload;
            return { ...state };
        case "ADD_DBNAME":
            state.conf["database"] = action.payload;
            return { ...state };
        case "ADD_USERNAME":
            state.conf["username"] = action.payload;
            return { ...state };
        case "ADD_PASSWORD":
            state.conf["password"] = action.payload;
            return { ...state };
        case "ADD_ROLE_ARN":
            state.conf["role_arn"] = action.payload;
            return { ...state };
        case "ADD_ROLE_SESSION_NAME":
            state.conf["role_session_name"] = action.payload;
            return { ...state };
        case "ADD_BUCKET_NAME":
            state.conf["bucket_name"] = action.payload;
            return { ...state };
        case "DB_TYPE_CHANGE":
            state.conf["data_source"] = "";
            state.conf["host_ip"] = "";
            state.conf["port"] = "";
            state.conf["database"] = "";
            state.conf["username"] = "";
            state.conf["password"] = "";
            state.conf["role_arn"] = "";
            state.conf["role_session_name"] = "";
            state.conf["bucket_name"] = "";
            return { ...state };
        case "GET_PROJECT_DETAILS":
            state.project_details = []
            // console.log('cehck : '+action.payload);
            state.project_details=action.payload
            // console.log(state)
            return { ...state }
        case 'SET_PROJECTS_LIST':
            state.projects_list='';
            state.projects_list = action.payload
            return {...state}
        default:
        // return state.conf;
    }
        
}