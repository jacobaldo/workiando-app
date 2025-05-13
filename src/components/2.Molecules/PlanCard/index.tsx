import React, {useContext} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {PlanCardProps} from './types';
import {Button, Text} from 'react-native-paper';
import {ThemeContext} from '../../../provider/ThemeProvider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

const PlanCard = ({data, onPress}: PlanCardProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.InsuranceCards, backgroundColor: theme.neutral50}}>
      <Icons
        name="check-decagram"
        color={theme.textColor}
        size={40}
        style={styles.icon}
      />
      <View style={styles.recomended}>
        {data.name === 'VIP' && (
          <View style={styles.contRecomended}>
            <Text style={styles.textRecomended}>Plan Recomendado</Text>
          </View>
        )}
      </View>
      <View style={styles.header}>
        <View style={styles.containerText}>
          <Text theme={theme} style={styles.textName}>
            {data.name}
          </Text>
          <Text variant="titleMedium" style={styles.costo}>
            Costo del plan
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              width: '100%',
              flexWrap: 'wrap',
            }}>
            <Text theme={theme} style={styles.price}>{`S/ ${data.price.toFixed(
              2,
            )} `}</Text>
            <Text
              theme={theme}
              style={styles.priceday}>{`por ${data.duration} días`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: 'row', paddingVertical: spacings.s0}}>
          <Icons name="check" color={theme.textColor} size={20} />
          <Text theme={theme} variant="titleSmall">
            Solicitudes a todos los anuncios.
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: spacings.s0}}>
          <Icons name="check" color={theme.textColor} size={20} />
          <Text theme={theme} variant="titleSmall">
            Contacto visible.
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: spacings.s0}}>
          <Icons name="check" color={theme.textColor} size={20} />
          <Text theme={theme} variant="titleSmall">
            Historial de Solicitudes.
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: spacings.s0}}>
          <Icons name="check" color={theme.textColor} size={20} />
          <Text theme={theme} variant="titleSmall">
            Notificaciones de anuncios nuevos.
          </Text>
        </View>

        <Button
          style={{marginTop: spacings.s2}}
          theme={theme}
          mode="contained"
          onPress={() => onPress(data)}>
          Seleccionar Plan
        </Button>
      </View>
    </View>
  );
};

export default PlanCard;
