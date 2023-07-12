import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import { Content, TabsContainer, TitleContainer } from "./styles";

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabsContainer>
      <TitleContainer>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            tabIsSelected={selectedTab === index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TitleContainer>
      <Content>{children[selectedTab]}</Content>
    </TabsContainer>
  );
};

export default Tabs;
