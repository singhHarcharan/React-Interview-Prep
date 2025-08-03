import { useContext } from "react";
import { ParentContext } from "./Parent";

function Child2() {
    const { dataValue } = useContext(ParentContext);
    return (
        <>
            <h1>Child 2</h1>
            <p> Value for the child 2 is {dataValue}</p>
        </>
    )
}

export default Child2