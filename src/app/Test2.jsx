//from child to parent data flow

const Test2 = ({parentCallback}) => {
    const sendTest2Data = () => {
        parentCallback("Hey Popsie, How’s it going?");
    };
    return ( 
        <div>
            <p>2. Data flow from child to parent i.e. from Test2 to Home by using a callbackFunction which is defined in Home/parent</p>
            Output: {sendTest2Data()}
        </div>
     );
}
 
export default Test2;