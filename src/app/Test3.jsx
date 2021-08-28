import { useContext } from 'react';
import {FirstName, LastName} from './Home';
const Test3 = () => {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);
    return ( 
        <div>
            <p>Name is : {firstName} {lastName}</p>
        </div>
     );
}
 
export default Test3;