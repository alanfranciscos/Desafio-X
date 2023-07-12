import React from "react";
import { Title } from "./styles";

type Props = {
  title: string;
  index: number;
  tabIsSelected: boolean;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  tabIsSelected,
}) => {
  return (
    <Title tabIsSelected={tabIsSelected}>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </Title>
  );
};

export default TabTitle;
