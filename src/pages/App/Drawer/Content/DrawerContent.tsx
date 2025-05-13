import Icon from "@expo/vector-icons/Feather.js";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Image, View } from "react-native";
import { Card, Drawer, Switch, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../../constants/colors";
import { useUser } from "../../../../provider/AuthProvider";
import { ThemeContext } from "../../../../provider/ThemeProvider";
import { styles } from "./styles";

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  const {
    authState: { user, isLoggetIn },
    logout,
  } = useUser();

  const LogOut = () => {
    if (isLoggetIn) {
      return logout();
    }
  };
  // const [active, setActive] = React.useState('');
  return (
    <SafeAreaView
      style={{
        ...styles.containerAll,
        backgroundColor: colors.primary.primary100,
      }}
    >
      <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
        <DrawerContentScrollView
          contentContainerStyle={{
            ...styles.header,
            backgroundColor: colors.error.error100,
            paddingTop: 0,
          }}
        >
          <View>
            <LinearGradient
              colors={[colors.primary.primary100, colors.primary.primary100]}
              style={styles.container}
            >
              <Image
                source={require("../../../../assets/banner.png")}
                style={styles.headerImage}
                resizeMode="contain"
              />
              {/* <Typography bold variant={{type: 'caption'}}></Typography> */}
              <View>
                <View>
                  <Text variant="titleMedium">Hola Bienvenido,</Text>
                  <Text variant="titleSmall">{`${user?.name} ${user?.lastname}`}</Text>
                </View>
                {/* <Text variant="titleSmall">{'vip'}</Text> */}
              </View>
              {/* <Typography
                bold
                numberOfLines={2}
                variant={{
                  type: 'body3',
                }}>{`${user?.name} ${user?.lastname}`}</Typography> */}
            </LinearGradient>
            <View
              style={{
                ...styles.containerList,
                backgroundColor: theme.backgroundColor,
              }}
            >
              <Drawer.Section title="">
                <Drawer.Item
                  theme={theme}
                  style={{
                    ...styles.options2,
                  }}
                  icon="clipboard-search-outline"
                  label="Mis Anuncios"
                  onPress={() => navigation.navigate("MyPublishedWorks")}
                />
                <Drawer.Item
                  theme={theme}
                  style={{
                    ...styles.options2,
                  }}
                  icon="clipboard-search-outline"
                  label="Postulantes"
                  onPress={() => navigation.navigate("ProposalsReceived")}
                />
                <Drawer.Item
                  theme={theme}
                  style={{
                    ...styles.options2,
                  }}
                  // active
                  icon="text-box-search"
                  label="Anuncios Solicitados"
                  onPress={() => navigation.navigate("RequestedEmployes")}
                />
                <Drawer.Item
                  theme={theme}
                  style={{
                    ...styles.options2,
                  }}
                  icon="clipboard-search-outline"
                  label="Solicitar membresia"
                  onPress={() => navigation.navigate("SuscribeMembershipUser")}
                />
              </Drawer.Section>
              {user?.role[0].label === "Admin" && (
                <Drawer.Section
                  title="Administrador:"
                  theme={theme}
                  style={{ backgroundColor: theme.backgroundColor }}
                >
                  <Card
                    elevation={5}
                    onPress={() =>
                      navigation.navigate("AdminUserAndWorks", {
                        type: "user",
                        title: "Usuarios",
                      })
                    }
                    contentStyle={styles.optionsAdmin}
                    style={styles.optionsAdmin2}
                    theme={theme}
                  >
                    <Card.Title
                      subtitleStyle={{ color: theme.colors.onBackground }}
                      title=""
                      subtitle="Usuarios"
                      // left={() => (
                      //   <LottieView
                      //     source={require('../../../../assets/lottie/worker.json')}
                      //     autoPlay
                      //     loop
                      //     style={styles.lottie}
                      //   />
                      // )}
                    />
                  </Card>
                  <Card
                    elevation={5}
                    onPress={() =>
                      navigation.navigate("AdminUserAndWorks", {
                        type: "work",
                        title: "Anuncios",
                      })
                    }
                    contentStyle={styles.optionsAdmin}
                    style={styles.optionsAdmin2}
                    theme={theme}
                  >
                    <Card.Title
                      title=""
                      subtitle="Anuncios"
                      subtitleStyle={{ color: theme.colors.onBackground }}
                      // left={props => (
                      //   <LottieView
                      //     source={require('../../../../assets/lottie/worker.json')}
                      //     autoPlay
                      //     loop
                      //     style={styles.lottie}
                      //   />
                      // )}
                    />
                  </Card>
                  <Drawer.Item
                    theme={theme}
                    style={{
                      ...styles.options2,
                    }}
                    icon={(prps) => (
                      <Icon
                        {...prps}
                        name="file-plus"
                        size={20}
                        color={theme.textColor}
                      />
                    )}
                    label="Crear Anuncio de otros"
                    onPress={() =>
                      navigation.navigate("ConfigureEmploye", {
                        navigation: navigation,
                        admin: true,
                      })
                    }
                  />
                  <Drawer.Item
                    theme={theme}
                    style={{
                      ...styles.options2,
                    }}
                    icon={(prps) => (
                      <Icon
                        {...prps}
                        name="file-plus"
                        size={20}
                        color={theme.textColor}
                      />
                    )}
                    label="Crear categoría"
                    onPress={() =>
                      navigation.navigate("CreateCategories", {
                        type: "category",
                        navigation,
                      })
                    }
                  />
                  <Drawer.Item
                    theme={theme}
                    style={{
                      ...styles.options2,
                    }}
                    icon={(prps) => (
                      <Icon
                        {...prps}
                        name="file-plus"
                        size={20}
                        color={theme.textColor}
                      />
                    )}
                    label="Crear tipo de empleo"
                    onPress={() =>
                      navigation.navigate("CreateCategories", {
                        type: "typeEmploye",
                        navigation,
                      })
                    }
                  />
                  <Drawer.Item
                    theme={theme}
                    style={{
                      ...styles.options2,
                    }}
                    icon={(prps) => (
                      <Icon
                        {...prps}
                        name="file-plus"
                        size={20}
                        color={theme.textColor}
                      />
                    )}
                    label="Crear Membresias"
                    onPress={() =>
                      navigation.navigate("CreateCategories", {
                        type: "membership",
                        navigation,
                      })
                    }
                  />
                </Drawer.Section>
              )}
            </View>
          </View>
        </DrawerContentScrollView>

        <Drawer.Item
          theme={theme}
          style={{
            ...styles.options2,
          }}
          icon={() =>
            isDarkMode ? (
              <Icon name="moon" size={20} color={theme.textColor} />
            ) : (
              <Icon name="sun" size={20} color={theme.textColor} />
            )
          }
          label={`Tema ${isDarkMode ? "oscuro" : "claro"}`}
          right={() => (
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          )}
        />
        <Drawer.Item
          theme={theme}
          style={{
            ...styles.options2,
          }}
          icon={() => (
            <Icon name="settings" size={20} color={theme.textColor} />
          )}
          label="Configuraciones"
          onPress={() => null}
        />
        <Drawer.Item
          theme={theme}
          style={{
            ...styles.options2,
          }}
          icon={() => <Icon name="log-out" size={20} color={theme.textColor} />}
          label="Salir"
          onPress={LogOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
