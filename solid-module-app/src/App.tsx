// import SolidCounter from "./SolidCounter";
// import "./index.scss";

// export default () => {
//   return(
//     <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       Hello, Solid.js
//       <SolidCounter/>
//     </div>
//   )
// }


import { render } from "solid-js/web";

import SolidCounter from "./SolidCounter";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <SolidCounter/>
  </div>
);
render(App, document.getElementById("solidMessage"));