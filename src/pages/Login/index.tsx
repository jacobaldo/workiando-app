import React, { useContext, useRef } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { useUser } from "../../provider/AuthProvider";
import { ThemeContext } from "../../provider/ThemeProvider";
import useLogin from "./hooks";
import { createStyles } from "./styles";
// import {colors} from '../../constants/colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FeatherIcon from 'react-native-vector-icons/Feather';

const Login = ({ navigation }: any) => {
  const passwordRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const { login } = useUser();

  const {
    handleSignIn,
    setEmail,
    setPassword,
    email,
    password,
    loading,
    isEmailValid,
    navigateRegister,
    loginWithGoogle,
    // loginWithFacebook,
    // numberRef,
    // countryCode,
    // handleCountryChange,
    // phoneNumber,
    // setPhoneNumber,
    // methodId,
    // setMethodId,
    // SignInWithNumber,
  } = useLogin({
    navigation,
    login,
  });
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.backgroundColor }}
    >
      <View style={styles.body}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.imageType}
        />
        {/* <Typography bold style={styles.textSesion} variant={{type: 'h4'}}>
            Inicia Sesión
          </Typography> */}

        <View style={styles.containerImputFiel}>
          <InputField
            lastField
            currentRef={passwordRef}
            label={"Usuario"}
            value={email}
            // firstField={true}
            // isPassword={false}
            onChange={(e) => {
              setEmail(e);
            }}
            // success={true}
            // touched={true}
            isError={email.length > 0 && !isEmailValid()}
            errorValue={
              isEmailValid()
                ? "Ingresa tu correo electronico"
                : "Correo incorrecto"
            }
            keyboardType="email-address"
          />
        </View>
        <View style={styles.containerImputFiel}>
          <InputField
            lastField
            currentRef={passwordRef}
            label={"Contraseña"}
            value={password}
            firstField={true}
            isPassword={true}
            onChange={(e) => {
              setPassword(e);
            }}
            success={true}
            touched={true}
            isError={false}
            errorValue={"Ingresa contraseña"}
          />
        </View>

        <Button
          type="primary"
          btnText="Iniciar Sesión"
          onPress={handleSignIn}
          disabled={!isEmailValid() || !(password.length > 0)}
          loading={loading}
        />
        <View style={styles.registerContent}>
          <Button
            type="secondary"
            btnText="Crear cuenta nueva"
            onPress={navigateRegister}
          />
        </View>

        {/* <Text theme={theme} variant="labelMedium">
            Verificar por:
          </Text>
          <View style={styles.optionNumber}>
            <TouchableOpacity
              onPress={() => setMethodId('sms')}
              style={{
                ...styles.option,
                backgroundColor:
                  methodId === 'sms' ? theme.primary100 : 'transparent',
              }}>
              <FeatherIcon
                name="message-circle"
                size={20}
                style={{marginRight: 8}}
                color={methodId === 'sms' ? colors.white : theme.textColor}
              />
              <Text
                theme={theme}
                variant="titleSmall"
                style={{
                  color: methodId === 'sms' ? colors.white : theme.textColor,
                }}>
                SMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMethodId('wt')}
              style={{
                ...styles.option,
                backgroundColor:
                  methodId === 'wt' ? theme.primary100 : 'transparent',
              }}>
              <Icon
                name="whatsapp"
                size={20}
                style={{marginRight: 8}}
                color={methodId === 'wt' ? colors.white : theme.textColor}
              />
              <Text
                theme={theme}
                variant="titleSmall"
                style={{
                  color: methodId === 'wt' ? colors.white : theme.textColor,
                }}>
                WHATSAPP
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerImputFiel}>
            <InputField
              lastField
              currentRef={numberRef}
              label={'Numero de contacto'}
              value={phoneNumber}
              onChange={setPhoneNumber}
              isError={!phoneNumber}
              errorValue={'Ingresa tu número'}
              leftAdornment={
                <CountryPicker
                  countryCode={countryCode}
                  withFilter
                  withFlag
                  withCallingCodeButton
                  withAlphaFilter
                  withCallingCode
                  onSelect={handleCountryChange}
                  theme={{
                    backgroundColor: theme.backgroundColor,
                    filterPlaceholderTextColor: theme.textColor,
                    onBackgroundTextColor: theme.textColor,
                  }}
                />
              }
            />
          </View>
          <Button
            type="primary"
            btnText="Enviar"
            onPress={SignInWithNumber}
            disabled={!phoneNumber}
            loading={loading}
          /> */}

        <View style={styles.registerContent}>
          {/* <Button
              type="primary"
              btnText="Facebook"
              onPress={loginWithFacebook}
              style={styles.facebook}
              iconLeft={
                <Image
                  style={styles.iconLogin}
                  source={require('../../assets/login/facebook.png')}
                />
              }
            /> */}
          <Text theme={theme} style={styles.textSesion} variant="labelMedium">
            o Inicia Sesión con:
          </Text>

          <Button
            type="primary"
            btnText="Google"
            onPress={() => loginWithGoogle()}
            style={styles.google}
            textStyle={styles.googleText}
            iconLeft={
              <Image
                style={styles.iconLogin}
                source={require("../../assets/login/google.png")}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
