import { createContext, useReducer } from "react"
import { DataSourceReducer } from "../Reducer/DataSourceReducer"


const initialState = {
    conf: {
        project_name: '',
        data_source: '',
        host_ip: '',
        port: '',
        database: '',
        username: '',
        password: '',
        role_arn: '',
        role_session: '',
        bucket_name: ''
    }
}


export const DataSourceContext = createContext()

export const DataSourceProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataSourceReducer, initialState)
    
    return <DataSourceContext.Provider value={{conf:state.conf,dispatch}}>
        {children}
    </DataSourceContext.Provider>
}