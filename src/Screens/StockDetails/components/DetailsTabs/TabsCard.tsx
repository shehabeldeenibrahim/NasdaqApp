import React from "react";
// import { Tab, TabView } from "@rneui/themed";
import { colors } from "../../../../Theme/colors";
import InfoTab from "./InfoTab";
import StatsTab from "./StatsTab";
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
} from "react-native-tab-view";
import { getTabBarIcon } from "../../../../utils";
import { TickerDetails } from "../../../../models";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../../Theme/dimensions";

interface IProps {
  data: TickerDetails;
}
type RenderSceneProps = SceneRendererProps & {
  route: {
    key: string;
    title: string;
  };
};
/**
 * Info header card showing ticker details
 * @param {data} TickerDetails ticker details to be displayed
 */
const TabsCard = ({ data }: IProps) => {
  const [index, setIndex] = React.useState(0);

  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case "stats":
        return <StatsTab stats={data.stats} />;
      case "info":
        return (
          <InfoTab description={data.description} website={data.website} />
        );
      default:
        return null;
    }
  };

  const [routes] = React.useState([
    { key: "stats", title: "Stats" },
    { key: "info", title: "Info" },
  ]);

  return data ? (
    <>
      <TabView
        style={{ height: SCREEN_HEIGHT / 2 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            pressColor="transparent"
            indicatorStyle={{
              backgroundColor: colors.primary,
              height: 2,
              width: SCREEN_WIDTH / 4,
              left: SCREEN_WIDTH / 8,
              alignItems: "center",
            }}
            style={{ backgroundColor: "transparent" }}
            labelStyle={{ color: colors.primary }}
            renderIcon={getTabBarIcon}
          />
        )}
      />
    </>
  ) : null;
};
export default TabsCard;
