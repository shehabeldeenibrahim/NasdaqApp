import React from "react";
// import { Tab, TabView } from "@rneui/themed";
import { colors } from "../../theme";
import { Dimensions } from "react-native";
import InfoTab from "./InfoTab";
import StatsTab from "./StatsTab";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { getTabBarIcon } from "../../utils";
import { stats, TickerDetailsData } from "../../mocks/Tickers";

const DetailsCard = () => {
  const [index, setIndex] = React.useState(0);
  const totalWidth = Dimensions.get("screen").width;

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "stats":
        return <StatsTab stats={stats} />;
      case "info":
        return (
          <InfoTab
            description={TickerDetailsData.description}
            website={TickerDetailsData.website}
          />
        );
      default:
        return null;
    }
  };

  const [routes] = React.useState([
    { key: "stats", title: "Stats" },
    { key: "info", title: "Info" },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: colors.primary,
              height: 2,
              width: totalWidth / 4,
              left: totalWidth / 8,
              alignItems: "center",
            }}
            style={{ backgroundColor: "transparent" }}
            labelStyle={{ color: colors.primary }}
            renderIcon={getTabBarIcon}
          />
        )}
      />
    </>
  );
};
export default DetailsCard;