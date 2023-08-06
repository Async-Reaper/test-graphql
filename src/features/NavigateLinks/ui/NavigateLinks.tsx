import React from "react";
import {Link} from "react-router-dom";
import {links} from "../model/data/links";

const Component = () => {

   return (
      <div>
         {links.map(link =>
            <Link to={link.path}>{link.text}</Link>
         )}
      </div>
   );
};

export const NavigateLinks = React.memo(Component);
