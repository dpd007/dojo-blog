//parent to child data flow
const Test1 = ({nameData}) => {
    return ( 
        <div>
            <p>1. Data flow from parent to child i.e. from Home to Test1</p>
            <p>Output: {nameData}</p>
        </div>
     );
}
 
export default Test1;