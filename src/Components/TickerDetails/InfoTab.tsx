import { Text } from "@rneui/base";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../../theme";
import ViewMoreText from "react-native-view-more-text";
import { Button } from "@rneui/themed";
import * as Linking from "expo-linking";

interface IProps {
  description: string | null;
  website: string | null;
}
const InfoTab = ({ description, website }: IProps) => {
  const renderViewMore = (onPress: any) => {
    return (
      <Text style={styles.expand} onPress={onPress}>
        Read more
      </Text>
    );
  };
  const renderViewLess = (onPress: any) => {
    return (
      <Text style={styles.expand} onPress={onPress}>
        Read less
      </Text>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text h4 h4Style={styles.title}>
        About
      </Text>
      <ViewMoreText
        numberOfLines={website ? 6 : 14}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
      >
        <Text style={styles.description}>{description}</Text>
      </ViewMoreText>
      {website ? (
        <Button
          title="Visit Website"
          buttonStyle={styles.button}
          icon={{ name: "earth", type: "antdesign", color: "white" }}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            Linking.openURL(website);
          }}
        />
      ) : null}
    </ScrollView>
  );
};
export default InfoTab;
const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%" },
  description: {
    fontSize: 15,
    color: colors.darkGray,
  },
  title: {
    marginBottom: "2%",
    color: colors.primary,
  },
  expand: { color: colors.gray, top: 2 },
  button: {
    backgroundColor: colors.primary,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttonContainer: {
    width: 200,
    alignSelf: "center",
    top: "20%",
  },
});