import React from "react";
import {Link} from "react-router-dom";
import cls from "./NavigateLinks.module.scss";
import {links} from "../model/data/links";

const Component = () => {

   return (
      <div className={cls.links__list}>
         {links.map(link =>
            <Link to={link.path}>{link.text}</Link>
         )}
      </div>
   );
};

export const NavigateLinks = React.memo(Component);
