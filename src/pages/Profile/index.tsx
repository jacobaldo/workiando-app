import Icon from "@expo/vector-icons/FontAwesome.js";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Image, Pressable, View } from "react-native";
import { Button } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../../components/Typography";
import { colors } from "../../constants/colors";
import { spacings } from "../../constants/spacings";
import { ThemeContext } from "../../provider/ThemeProvider";
import { MyAppProps } from "../App/types";
import Histories from "./Histories";
import { useProfile } from "./hooks";
import { styles } from "./styles";
type ProfileProps = CompositeScreenProps<
  StackScreenProps<MyAppProps, "Profile">,
  DrawerScreenProps<any, "Profile">
>;
const Profile = ({ navigation, route }: ProfileProps) => {
  const { userData } = route?.params;
  const { theme } = useContext(ThemeContext);
  const Tab = createMaterialTopTabNavigator();

  const {
    navigationEmployes,
    handlePhoneCall,
    user,
    acceptWorker,
    loading,
    navigationUpdatePreferences,
  } = useProfile({
    navigation,
    userData,
  });

  return (
    <SafeAreaView
      style={{ ...styles.body, backgroundColor: theme.backgroundColor }}
    >
      <View style={{ flex: 1, marginBottom: userData ? 0 : 50 }}>
        <View style={styles.containerDetails}>
          <View style={styles.containerLogo}>
            <Image
              resizeMode="contain"
              style={styles.imgPerfil}
              source={
                user?.photo
                  ? { uri: user.photo }
                  : require("./../../assets/avatar.png")
              }
            />
            <Rating
              imageSize={20}
              ratingCount={5}
              readonly
              startingValue={user?.reputation}
              tintColor={theme.backgroundColor}
              style={styles.rating}
              ratingBackgroundColor="#e0e0da"
              type="custom"
              ratingTextColor="black"
            />
          </View>
          <View>
            <Typography
              style={styles.info}
              bold
              variant={{
                type: "body1",
              }}
            >{`${user?.name} ${user?.lastname}`}</Typography>
            <Typography
              style={styles.info}
              variant={{
                type: "caption",
              }}
            >
              {user?.email}
            </Typography>

            <View style={styles.containerIcon}>
              <Icon
                name="whatsapp"
                size={20}
                color={colors.primary.primary100}
                style={styles.iconStyle}
              />
              <Typography onPress={handlePhoneCall} variant={{ type: "body3" }}>
                {user?.number}
              </Typography>
            </View>
            {/* <View style={styles.containerDetails2}>
              <View style={styles.containerIcon1}>
                <Icon1
                  name="map-pin"
                  size={20}
                  color={colors.primary.primary100}
                  style={styles.iconStyle}
                />
              </View>

              <Typography>dfdf</Typography>
            </View> */}
          </View>
          <View style={styles.containerLogos}>
            {!userData && (
              <Pressable style={styles.btnStyle} onPress={navigationEmployes}>
                <Typography
                  style={styles.textColor}
                  variant={{ type: "caption" }}
                >
                  Editar
                </Typography>
              </Pressable>
            )}
            <Pressable
              style={styles.btnStyle}
              onPress={navigationUpdatePreferences}
            >
              <Typography
                style={styles.textColor}
                variant={{ type: "caption" }}
              >
                Preferencias
              </Typography>
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: theme.backgroundColor, // Color de fondo del encabezado
              }, // Alinear el título al centro
              tabBarInactiveTintColor: theme.textColor,
              tabBarActiveTintColor: theme.textColor, // Color del texto del encabezado
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
            }}
          >
            <Tab.Screen
              name="PublishedRegistered"
              component={Histories}
              options={{ tabBarLabel: "Experiencias" }}
              initialParams={{ userData: userData?.user, type: "experience" }}
            />

            <Tab.Screen
              name="PublishedExpired"
              component={Histories}
              options={{ tabBarLabel: "Calificaciones" }}
              initialParams={{
                userData: userData?.user,
                type: "califications",
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
      {userData && (
        <View
          style={{
            height: 40,
            marginBottom: spacings.s2,
            marginHorizontal: spacings.s2,
          }}
        >
          <Button
            loading={loading}
            theme={theme}
            mode="contained"
            onPress={acceptWorker}
          >
            Aceptar
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Profile;
