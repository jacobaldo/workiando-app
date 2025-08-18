import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Switch,
  View,
} from "react-native";
import { Button } from "../../../../../components/Button";
import { InputField } from "../../../../../components/InputField";
import { Typography } from "../../../../../components/Typography";
import { Category } from "../../../../ConfigureEmploye/types";
import { MyAppProps } from "../../../types";
import EditItem from "./EditItem";
import { useCreateCategories } from "./hooks";
import { styles } from "./styles";
// import Gradient from '../../../../../components/LinearGradient';
import { RadioButton, Text } from "react-native-paper";
import { spacings } from "../../../../../constants/spacings";
import { ThemeContext } from "../../../../../provider/ThemeProvider";
import { EditSheet } from "./EditSheet";
interface Props extends StackScreenProps<MyAppProps, "CreateCategories"> {}
const CreateCategories = ({ navigation, route }: Props) => {
  const { type } = route.params;
  const { theme } = useContext(ThemeContext);
  const {
    loading,
    loadingEmploye,
    Refresh,
    formik,
    newList,
    editItem,
    openBtnSheet,
    setOpenBtnSheet,
    onPressEdit,
    toggleSwitch,
    loadingMembership,
    typeText,
    typeMembership,
    setTypeMembership,
    selectTab,
    setSelectTab,
    handleSelectImage,
    imageUri,
    loadingPost,
  } = useCreateCategories({
    navigation,
    type,
  });

  const loadingAll = () => {
    switch (type) {
      case "category":
        return loading;
      case "typeEmploye":
        return loadingEmploye;
      case "membership":
        return loadingMembership;
      default:
        return false;
    }
  };

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.backgroundColor }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loadingAll()}
            onRefresh={() => Refresh()}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.body}
      >
        <View style={styles.register}>
          <InputField
            lastField
            label={`Ingrese ${typeText()}`}
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            isError={!!formik.errors.name}
            errorValue={formik.errors.name}
            labelStyle={{ color: theme.neutral700 }}
          />
          {type === "category" && (
            <View style={styles.containerImage}>
              {imageUri && (
                <Image
                  source={{ uri: imageUri }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              <Button
                style={{ width: 170 }}
                type="primary"
                btnText={`Elegir Imagen`}
                // style={styles.styleButton}
                // textStyle={styles.text1}
                onPress={handleSelectImage}
              />
            </View>
          )}
          {type === "membership" && (
            <>
              <InputField
                lastField
                label={`precio de Membresia`}
                keyboardType="numeric"
                value={formik.values.price?.toString()}
                onChange={formik.handleChange("price")}
                isError={!!formik.errors.price}
                errorValue={formik.errors.price}
                labelStyle={{ color: theme.neutral700 }}
              />
              <InputField
                lastField
                label={`Cant. dias de membresia`}
                keyboardType="numeric"
                value={formik.values.duration?.toString()}
                onChange={formik.handleChange("duration")}
                isError={!!formik.errors.duration}
                errorValue={formik.errors.duration}
                labelStyle={{ color: theme.neutral700 }}
              />
              <RadioButton.Group
                onValueChange={(newValue) => setTypeMembership(newValue)}
                value={typeMembership}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: spacings.s2,
                  }}
                >
                  <RadioButton theme={theme} value="work" />
                  <Text theme={theme}>Para Anuncios</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton theme={theme} value="user" />
                  <Text theme={theme}>Para Usiarios</Text>
                </View>
              </RadioButton.Group>
            </>
          )}

          {type === "typeEmploye" && (
            <View style={styles.amount}>
              <Typography
                variant={{ type: "bodyP3" }}
              >{`Pago calculable`}</Typography>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={
                  formik.values.calculableAmount ? "#f5dd4b" : "#f4f3f4"
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={formik.values.calculableAmount}
              />
            </View>
          )}
          <View style={styles.contButton}>
            <Button
              type="primary"
              btnText={`Registrar ${typeText()} `}
              loading={loadingPost}
              onPress={formik.handleSubmit}
              disabled={!formik.isValid}
            />
          </View>
          <Typography>{`Lista de ${typeText()}:`}</Typography>
        </View>
        {type === "membership" && (
          <View style={styles.tabmebership}>
            <View
              style={{
                ...styles.texttab,

                backgroundColor:
                  selectTab === "work" ? theme.colors.primary : theme.neutral50,
              }}
            >
              <Text
                style={{
                  color:
                    selectTab === "work"
                      ? theme.colors.onPrimary
                      : theme.colors.primary,
                }}
                onPress={() => {
                  setSelectTab("work");
                }}
                theme={theme}
              >
                Anuncios
              </Text>
            </View>
            <View
              style={{
                ...styles.texttab,

                backgroundColor:
                  selectTab === "user" ? theme.colors.primary : theme.neutral50,
              }}
            >
              <Text
                style={{
                  color:
                    selectTab === "user"
                      ? theme.colors.onPrimary
                      : theme.colors.primary,
                }}
                onPress={() => {
                  setSelectTab("user");
                }}
              >
                Usuarios
              </Text>
            </View>
          </View>
        )}
        {newList()
          ?.sort((a, b) => a.name.localeCompare(b.name))
          .map((item: Category, index: number) => (
            <EditItem key={index} item={item} onPress={onPressEdit} />
          ))}
      </ScrollView>
      {editItem && (
        <EditSheet
          isOpen={openBtnSheet}
          setIsOpen={setOpenBtnSheet}
          item={editItem}
          type={type}
          Refresh={Refresh}
        />
      )}
    </SafeAreaView>
  );
};

export default CreateCategories;
