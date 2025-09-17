import { UserContext } from "./Use_Context";
import { useContext } from "react";

function Use_Context_Child() {
    const contextData = useContext(UserContext);

    return (<h3 style={{backgroundColor: "white", color: "black"}}>hello {contextData.user} {contextData.age} from Use_Context_Child Component</h3>);
}

export default Use_Context_Child