import React from "react";
import {Space} from "antd";
import {NavigateLinks} from "@features/NavigateLinks";

const Component = () => {
   return (
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
         <NavigateLinks />
      </Space>
   );
};

export const Header = React.memo(Component);
