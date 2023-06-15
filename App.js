import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import {inifirebase} from "./src/utils/firebase";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const App = () => {
  return (
    <>
      <NavigationContainer>
         <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
};
export default App;

// import React, { useState } from 'react';

// function Contador() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <p>Contador: {count}</p>
//       <button onClick={increment}>Incrementar</button>
//       <button onClick={decrement}>Decrementar</button>
//     </div>
//   );
// }

// export default Contador;
