import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Card, Checkbox, RadioButton, Text } from "react-native-paper";
import CardWorkConfirm from "../../components/2.Molecules/CardWorkConfirm";
import Gradient from "../../components/LinearGradient";
import { spacings } from "../../constants/spacings";
import { useTheme } from "../../provider/ThemeProvider";
import { numberWithCommas } from "../../utils/currency/currency.utils";
import { MyAppProps } from "../App/types";
import useConfirmPayEmployes from "./hooks";

interface Props extends StackScreenProps<MyAppProps, "ConfirmPayEmploye"> {}
const ConfirmPayEmploye = ({ navigation, route }: Props) => {
  const { data, admin } = route.params;
  const { theme } = useTheme();
  const {
    payMetod,
    setPayMetod,
    termCondition,
    setTermCondition,
    navigateTerm,
    loading,
    navigateModal,
  } = useConfirmPayEmployes({
    navigation,
    data,
    admin,
  });

  return (
    <Gradient>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <CardWorkConfirm onPress={() => null} item={data} />
          <Card theme={theme} elevation={5} style={{ margin: spacings.s2 }}>
            <Card.Content
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{ fontWeight: "bold" }}
                  variant="titleLarge"
                  theme={theme}
                >
                  {data.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Text
                    variant="titleLarge"
                    style={{ fontWeight: "bold" }}
                    theme={theme}
                  >{`S/. ${numberWithCommas(data?.membership?.price)}`}</Text>
                  <Text
                    variant="titleSmall"
                    theme={theme}
                  >{` /${data?.membership?.duration} dias`}</Text>
                </View>
                <Text
                  style={{ fontWeight: "bold" }}
                  variant="labelSmall"
                  theme={theme}
                >
                  {`Tu anuncio estara visible por ${data?.membership?.duration} dias para todos.`}
                </Text>
              </View>
              {/* <RadioButton theme={theme} value={item._id} /> */}
            </Card.Content>
          </Card>
          <View
            style={{ marginHorizontal: spacings.s2, marginBottom: spacings.s2 }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setPayMetod(newValue)}
              value={payMetod}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton theme={theme} value="yape" />
                <Image
                  source={require("../../assets/yape.png")}
                  style={{
                    width: 30,
                    height: 30,
                    marginHorizontal: spacings.s1m,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton disabled theme={theme} value="efectivo" />
                <Text theme={theme} variant="titleSmall">
                  Efectivo
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton disabled theme={theme} value="izipay" />
                <Text theme={theme} variant="titleSmall">
                  Izipay
                </Text>
              </View>
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: spacings.s2,
              }}
            >
              <Checkbox
                // color="#6200ee"
                // uncheckedColor="#888888"
                theme={theme}
                status={termCondition ? "checked" : "unchecked"}
                onPress={() => {
                  setTermCondition(!termCondition);
                }}
              />
              <Text
                theme={theme}
                onPress={navigateTerm}
                variant="labelSmall"
                style={{ textDecorationLine: "underline" }}
              >
                Acepto los terminos y condiciones
              </Text>
            </View>
            <Card theme={theme} elevation={5}>
              <Card.Content>
                <Text theme={theme} onPress={navigateTerm} variant="labelSmall">
                  Para que tu anuncio se visto por todos, tienes que comuncarte
                  con el administrador por whatsapp
                </Text>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
        <View style={{ margin: spacings.s2 }}>
          <Button
            theme={theme}
            disabled={!termCondition}
            loading={loading}
            mode="contained"
            onPress={navigateModal}
          >
            Publicar
          </Button>
        </View>
      </View>
    </Gradient>
  );
};

export default ConfirmPayEmploye;
