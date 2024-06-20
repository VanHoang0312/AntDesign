import { useRoutes } from "react-router-dom";
import { router } from "../../router";


function Allrouter() {
    const elements = useRoutes(router)
    return (
      <>
        {elements}
      </>
    )
  }
  export default Allrouter;