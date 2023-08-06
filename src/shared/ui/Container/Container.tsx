import React, {type FC, type ReactNode} from "react";

import cls from "./Container.module.scss";

interface Props {
   children: ReactNode
}

const Component: FC<Props> = ({children}) => {
   return (
      <div className={cls.container}>
         {children}
      </div>
   );
};

export const Container = React.memo(Component);
