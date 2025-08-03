import { createContext, useState } from "react";
import Child1 from "./Child1";
const ParentContext = createContext();
function Parent() {
    const [dataValue, setDataValue] = useState("Parent Context");
    return (
        <ParentContext.Provider value={{ dataValue, setDataValue }}>
            <Child1 />
        </ParentContext.Provider>
    )
}

export default Parent
export {ParentContext}