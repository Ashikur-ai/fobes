import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";

const items = [
  {
    label: "U.S",
    key: "1",
  },
  {
    label: "Asia",
    key: "2",
  },
  {
    label: "Europe",
    key: "3",
  },
];

const DropDown = () => {
  const [selected, setSelected] = useState("Asia");

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelected(selectedItem.label);
    }
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick, // Handle item selection
      }}
      trigger={["click"]}
    >
      
        <Space className="text-[12px]">
          {selected} Edition
          <DownOutlined />
        </Space>
     
    </Dropdown>
  );
};

export default DropDown;
