import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {InputField} from '../../components/InputField';
import {Button} from '../../components/Button';
import {EditProfileProps} from './types';
import Gradient from '../../components/LinearGradient';
// import {ThemeContext} from '../../provider/ThemeProvider';
import useEditProfile from './hooks';

const EditProfile = ({navigation}: EditProfileProps) => {
  // const {theme} = useContext(ThemeContext);
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const {loading, formik, user} = useEditProfile({
    navigation,
  });

  return (
    <Gradient>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={emailRef}
                label={'Correo'}
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                isError={!!formik.errors.email}
                errorValue={formik.errors.email}
                keyboardType="email-address"
                editable={user?.source !== 'OTP' ? false : true}
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={nameRef}
                label={'Nombres'}
                value={formik.values.name}
                onChange={formik.handleChange('name')}
                isError={!!formik.errors.name}
                errorValue={formik.errors.name}
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={lastNameRef}
                label={'Apellidos'}
                value={formik.values.lastName}
                onChange={formik.handleChange('lastName')}
                isError={!!formik.errors.lastName}
                errorValue={'Ingresa tu apellido'}
              />
            </View>

            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={lastNameRef}
                label={'Número de contacto'}
                value={formik.values.number}
                onChange={formik.handleChange('number')}
                isError={!!formik.errors.number}
                errorValue={'Ingresa tu numero de celular'}
                // leftAdornment={
                //   <CountryPicker
                //     countryCode={countryCode}
                //     withFilter
                //     withFlag
                //     withCallingCodeButton
                //     withAlphaFilter
                //     withCallingCode
                //     onSelect={handleCountryChange}
                //     theme={{
                //       backgroundColor: theme.backgroundColor,
                //       filterPlaceholderTextColor: theme.textColor,
                //       onBackgroundTextColor: theme.textColor,
                //     }}
                //   />
                // }
                editable={user?.source === 'OTP' ? false : true}
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={lastNameRef}
                label={'Numero de documento'}
                value={formik.values.documentNumber}
                onChange={formik.handleChange('documentNumber')}
                isError={!!formik.errors.documentNumber}
                errorValue={'Ingresa tu documento'}
                // leftAdornment={

                // }
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.registerContent}>
          <Button
            type="primary"
            btnText="Actualizar"
            onPress={formik.handleSubmit}
            disabled={!formik.isValid || loading}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </Gradient>
  );
};

export default EditProfile;
