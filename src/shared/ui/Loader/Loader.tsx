import React from "react";
import {Spin} from "antd";

import cls from "./Loader.module.scss";

const Component = () => {
   return (
      <div className={cls.loader__wrapper}>
         <Spin />
      </div>
   );
};

export const Loader = React.memo(Component);
