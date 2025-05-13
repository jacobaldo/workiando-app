import Icon from "@expo/vector-icons/Feather.js";
import Slider from "@react-native-community/slider";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { HeaderBottomSheet } from "../../../components/2.Molecules/HeaderBottomSheet";
import { Button } from "../../../components/Button";
import { Typography } from "../../../components/Typography";
import { colors } from "../../../constants/colors";
import { ThemeContext } from "../../../provider/ThemeProvider";
import { numberWithCommas } from "../../../utils/currency/currency.utils";
import useFilterBottomSheet from "./hooks";
import { styles } from "./style";
import { Props, itemProps } from "./types";
const ItemFilter = ({ item, filter, onPress }: itemProps) => {
  const select = filter && filter.some((data: any) => data === item._id);

  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.filterCard,
        borderColor: colors.primary.primary100,
        backgroundColor: select ? colors.primary.primary100 : "transparent",
      }}
    >
      <Typography
        bold
        style={{ color: select ? colors.white : colors.primary.primary100 }}
        variant={{ type: "caption" }}
      >
        {item.name}
      </Typography>
      {select && <Icon name="x" color={colors.white} size={15} />}
    </Pressable>
  );
};
export const FilterBottomSheet = ({
  isOpenFilter,
  setIsOpenFilter,
  navigation,
  onPressFilter,
}: Props) => {
  const {
    loading,
    dataCategories,
    dataTypeEmploye,
    loadingEmploye,
    sliderValue,
    handleFilterRange,
    onConfigLocation,
    handleFilterCategory,
    filterCategories,
    handleFilterTypeEmploye,
    filterTypeEmployes,
    initAddress,
    FilterApply,
    hasNonCalculableAmount,
    categoriesToShow,
    setShowAllCategories,
    showAllCategories,
    removeAllFilter,
  } = useFilterBottomSheet({ navigation, onPressFilter, setIsOpenFilter });
  const { theme } = useContext(ThemeContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpenFilter}
      onRequestClose={() => setIsOpenFilter(false)}
    >
      <View style={styles.container}>
        <Pressable
          onPress={() => setIsOpenFilter(false)}
          style={styles.touchable}
        />

        <SafeAreaView
          style={{
            ...styles.body,
            backgroundColor: theme.backgroundbottomShet,
          }}
        >
          <HeaderBottomSheet title="Filtrar por" setIsOpen={setIsOpenFilter} />
          <ScrollView style={styles.filterContainer}>
            <Typography variant={{ type: "body1" }}>Ubicación</Typography>
            <View style={styles.listFilter}>
              <Pressable
                onPress={onConfigLocation}
                style={{
                  ...styles.filterCard,
                  borderColor: colors.primary.primary100,
                  backgroundColor: colors.primary.primary100,
                }}
              >
                <Typography
                  style={{ color: colors.white }}
                  bold
                  variant={{ type: "caption" }}
                >
                  {`${initAddress?.street} - ${initAddress?.city} `}
                </Typography>
              </Pressable>
              <Pressable
                onPress={onConfigLocation}
                style={{
                  ...styles.filterCard,
                  borderColor: colors.primary.primary100,
                  backgroundColor: colors.primary.primary100,
                }}
              >
                <Typography
                  style={{ color: colors.white }}
                  bold
                  variant={{ type: "caption" }}
                >
                  {`${initAddress?.radio} Km`}
                </Typography>
              </Pressable>
            </View>

            <Typography variant={{ type: "body1" }}>
              Categorias {`${filterCategories.length}/6`}
            </Typography>
            {/* <View style={styles.listFilter}>
              {loading && <ActivityIndicator size={20} />}
              {dataCategories &&
                dataCategories.map((item, index) => (
                  <ItemFilter
                    key={index}
                    onPress={() => handleFilterCategory(item._id)}
                    item={item}
                    filter={filterCategories}
                  />
                ))}
            </View> */}
            <View style={styles.listFilter}>
              {loading && <ActivityIndicator size={20} />}
              {categoriesToShow &&
                categoriesToShow.map((item, index) => (
                  <ItemFilter
                    key={index}
                    onPress={() => handleFilterCategory(item._id)}
                    item={item}
                    filter={filterCategories}
                  />
                ))}

              {/* Mostrar botón como un ítem más si hay más de 10 */}
              {dataCategories && dataCategories.length > 10 && (
                <TouchableOpacity
                  onPress={() => setShowAllCategories(!showAllCategories)}
                  style={{
                    ...styles.filterCard,
                    borderColor: colors.primary.primary100,
                    backgroundColor: colors.primary.primary100,
                  }}
                >
                  <Text variant="bodySmall" style={{ color: colors.white }}>
                    {showAllCategories ? "Mostrar menos" : "Mostrar más"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <Typography variant={{ type: "body1" }}>Tipo de empleo</Typography>
            <View style={styles.listFilter}>
              {loadingEmploye && <ActivityIndicator size={20} />}
              {dataTypeEmploye &&
                dataTypeEmploye
                  .map((item, index) => (
                    <ItemFilter
                      key={index}
                      onPress={() => handleFilterTypeEmploye(item)}
                      item={item}
                      filter={filterTypeEmployes}
                    />
                  ))
                  .reverse()}
            </View>
            {!hasNonCalculableAmount() && (
              <>
                <Typography variant={{ type: "body1" }}>
                  Rango salarial
                </Typography>
                <View style={styles.listFilter}>
                  <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={0}
                    maximumValue={5000}
                    step={100}
                    minimumTrackTintColor={colors.primary.primary100}
                    value={sliderValue}
                    onValueChange={(value) => handleFilterRange(value)}
                  />
                  <View style={styles.informationSlider}>
                    {/* <Typography style={styles.text3} variant={{type: 'body2'}}>
                  s/ 0.50 por dia
                </Typography> */}
                    <Typography
                      style={styles.text3}
                      variant={{ type: "body2" }}
                    >
                      {`Mayor a:  S/. ${numberWithCommas(sliderValue)}`}
                    </Typography>
                  </View>
                </View>
              </>
            )}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              onPress={FilterApply}
              style={styles.button}
              type="primary"
              btnText="Aplicar"
            />
            <Button
              onPress={removeAllFilter}
              style={styles.button}
              type="secondary"
              btnText="Limpiar Filtro"
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
