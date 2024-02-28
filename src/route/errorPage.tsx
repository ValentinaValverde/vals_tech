// import { useRouteError } from "react-router-dom";
import { FC } from "react";
import { ErrorType } from "../App.types";

// export default function ErrorPage() {
//   const error = useRouteError();

//   return (
//     <div>
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }

const ErrorPage: FC<ErrorType> = ({ statusText, message }) => {
  return (
    // const error = useRouteError();

    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

// or is it (on line 27) this:
// <i>{error.statusText || error.message}</i>
