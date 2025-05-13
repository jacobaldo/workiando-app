import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import CardWork from "../../components/2.Molecules/CardWork";
import { Typography } from "../../components/Typography";
import { colors } from "../../constants/colors";
import { numberWithCommas } from "../../utils/currency/currency.utils";
import { FilterBottomSheet } from "./FilterBottomSheet";
import useSearch from "./hooks";
import { OptionBottomSheet } from "./OptionsBottomSheet";
import { styles } from "./styles";

import LottieView from "lottie-react-native";
import { FAB, Text } from "react-native-paper";
import { useTheme } from "../../provider/ThemeProvider";
import { MyAppProps } from "../App/types";
import { Work } from "./types";
// import {spacings} from '../../constants/spacings';
// import CaroucelCompounet from '../../components/2.Molecules/Caroucel';
// import Logo from './../../assets/svg/aa.svg';

interface Props extends DrawerScreenProps<MyAppProps, "Search"> {}
const Search = ({ navigation }: Props) => {
  const { theme } = useTheme();
  const {
    setSearchText,
    searchText,
    openBtnSheet,
    setOpenBtnSheet,
    handleSelectUser,
    openBtnFilterSheet,
    setOpenBtnFilterSheet,
    loading,
    data,
    refreshData,
    onPressNavigateEmployer,
    getData,
    initAddress,
    // filterCategories,
    // filterTypeEmployes,
    filterRange,
    onConfigLocation,
    debouncedSearchRef,
    favorites,
    handleToggleFavorite,
  } = useSearch({ navigation });
  // const debouncedHandleInput = debounce(handleInput, 2000);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.bodyView}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => refreshData()}
            />
          }
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {/* <CaroucelCompounet /> */}
          <View>
            <View style={styles.containerSearch}>
              <View
                style={{
                  ...styles.inputContainer,
                  backgroundColor: theme.neutral100,
                }}
              >
                <Icon2 name="search" size={20} color={theme.textColor} />
                <TextInput
                  style={{
                    ...styles.input,
                    color: theme.textColor,
                  }}
                  placeholderTextColor={theme.textColor}
                  onChangeText={(text) => {
                    setSearchText(text);
                    debouncedSearchRef.current(text);
                  }}
                  value={searchText}
                  placeholder="Buscar chamba..."
                />
              </View>
              <TouchableOpacity
                onPress={() => setOpenBtnFilterSheet(true)}
                style={styles.filterContainer}
              >
                <Icon name="sliders" size={24} color={colors.white} />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              style={{ flexDirection: "row", paddingStart: 12 }}
            >
              <Pressable
                onPress={onConfigLocation}
                style={{
                  ...styles.filterCard,
                  backgroundColor: colors.primary.primary100,
                }}
              >
                <Typography
                  style={{ color: colors.white }}
                  bold
                  variant={{ type: "caption" }}
                >
                  {`${initAddress?.street} - ${initAddress?.city} ${initAddress?.radio} Km`}
                </Typography>
              </Pressable>
              {filterRange > 0 && (
                <Pressable
                  onPress={() => null}
                  style={{
                    ...styles.filterCard,
                    backgroundColor: colors.primary.primary100,
                  }}
                >
                  <Typography
                    style={{ color: colors.white }}
                    bold
                    variant={{ type: "caption" }}
                  >
                    {`mayor a s/${numberWithCommas(filterRange)}`}
                  </Typography>
                </Pressable>
              )}
              {/* {filterTypeEmployes.length > 0 &&
                  filterTypeEmployes.map(item => {
                    return (
                      <Pressable
                        onPress={() => null}
                        style={{
                          ...styles.filterCard,
                          backgroundColor: colors.primary.primary100,
                        }}>
                        <Typography
                          style={{color: colors.white}}
                          bold
                          variant={{type: 'caption'}}>
                          {`${item?.name}`}
                        </Typography>
                      </Pressable>
                    );
                  })} */}
            </ScrollView>
            {!loading &&
              (data?.docs.length === 0 || data?.docs === undefined) && (
                <View style={styles.empty}>
                  <LottieView
                    source={require("../../assets/lottie/anuncia.json")}
                    resizeMode="cover"
                    autoPlay
                    loop
                    style={styles.lottie}
                  />
                  <Text theme={theme} style={{ textAlign: "center" }}>
                    Por ahora no tenemos trabajos en tu localidad, se el primero
                    en publicar una oferta laboral.
                  </Text>
                </View>
              )}
            {loading ? (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size={20} />
              </View>
            ) : (
              data?.docs.map((item, index) => (
                <View key={index}>
                  {item.works.length !== 0 && (
                    <>
                      <View style={styles.titleFija}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          {item?.photo && (
                            <Image
                              style={{ width: 30, height: 30, borderRadius: 8 }}
                              source={{ uri: item?.photo }}
                            />
                          )}
                          <Text theme={theme} variant="titleMedium">
                            {item.name}
                          </Text>
                        </View>

                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("JobsCategory", {
                              idCategory: item._id,
                              nameCategory: item.name,
                              navigation,
                            });
                          }}
                        >
                          <Text
                            style={{ color: theme.colors.primary }}
                            variant="titleSmall"
                          >
                            Ver Todo
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.containerWorks}
                      >
                        {item.works.map((item1, index1) => {
                          const isFavorite = favorites.some(
                            (fav: Work) => fav._id === item1._id
                          );
                          return (
                            <View key={index1} style={styles.cardWork}>
                              <CardWork
                                item={item1}
                                onPress={onPressNavigateEmployer}
                                isFavorite={isFavorite}
                                handleToggleFavorite={handleToggleFavorite}
                              />
                            </View>
                          );
                        })}
                      </ScrollView>
                    </>
                  )}
                </View>
              ))
            )}
          </View>
        </ScrollView>

        {/* <Button
          style={styles.btnStyle}
          btnText="Aceptar"
          type="primary"
          disabled={false}
          loading={false}
          onPress={() => {
            showMessage({
        message: "Error!!",
        description: "Error cargando favoritos",
        type: "danger",
        icon: "danger",
      });
          }}
          iconLeft={
            <Icon
              name="lock"
              size={15}
              color={colors.white}
              style={styles.iconBtnStyle}
            />
          }
        /> */}
        {/* <View style={styles.loadingSkeleton}>
            <Skeleton height={80} width={80} borderRadius={40} />
            <View>
              <Skeleton height={25} width={200} borderRadius={16} />
              <Skeleton height={20} width={'50%'} />
            </View>
          </View>
          <Button
            style={styles.btnStyle}
            btnText="Categorías"
            type="secondary"
            disabled={false}
            loading={false}
            onPress={() => {
              setOpenBtnSheet(true);
            }}
          /> */}
        <OptionBottomSheet
          isOpen={openBtnSheet}
          setIsOpen={setOpenBtnSheet}
          handleSelectUser={handleSelectUser}
        />
        <FilterBottomSheet
          isOpenFilter={openBtnFilterSheet}
          setIsOpenFilter={setOpenBtnFilterSheet}
          navigation={navigation}
          onPressFilter={getData}
        />
      </View>
      <FAB
        icon={"plus"}
        onPress={() => navigation.navigate("ConfigureEmploye")}
        style={styles.fabStyle}
        size="small"
      />
    </SafeAreaView>
  );
};
export default Search;
