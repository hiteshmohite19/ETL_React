export const DataSourceReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PROECT_NAME":
            
            state.conf["project_name"] = action.payload;
        //     break;
        // case "ADD_DBTYPE_NAME":
        //     state.conf["data_source"] = action.payload;
        //     break;
        // case "ADD_PROECT_NAME":
        //     state.conf["project_name"] = action.payload;
        //     break;
        // case "ADD_PROECT_NAME":
        //     state.conf["project_name"] = action.payload;
        //     break;
        // case "ADD_PROECT_NAME":
        //     state.conf["project_name"] = action.payload;
        //     break;
        // case "ADD_PROECT_NAME":
        //     state.conf["project_name"] = action.payload;
        //     break;
        default:
            return ""
    }
        
}