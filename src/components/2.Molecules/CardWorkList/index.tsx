import React from 'react';
import {View} from 'react-native';
import {Props} from './type';
import {styles} from './style';
import {Typography} from '../../Typography';
import {dateFormatConcat} from '../../../utils/formatDate.util';
import {numberWithCommas} from '../../../utils/currency/currency.utils';
import {Button} from '../../Button';

const CardWorkList = ({
  onPress,
  item,
  style,
  loading,
  textButtom = 'Ver más',
}: Props) => {
  return (
    <View style={[styles.cardStyle, style]}>
      <Typography
        numberOfLines={2}
        style={styles.textStyleTitle}
        variant={{type: 'h5'}}>
        {item?.title}
      </Typography>
      <Typography
        numberOfLines={1}
        style={styles.textStyle}
        variant={{type: 'subtitleS1'}}>
        {`S/ ${numberWithCommas(item?.price)}`}
      </Typography>
      <Typography
        numberOfLines={1}
        style={styles.textStyle}
        variant={{type: 'caption'}}>
        {item?.location.address}
      </Typography>
      <Typography
        numberOfLines={1}
        style={styles.textStyle}
        variant={{type: 'caption'}}>
        {dateFormatConcat(item?.createdAt.toString())}
      </Typography>
      {/* <Typography style={styles.textStyle} variant={{type: 'caption'}}>
        {item?.typeEmployeData?.name}
      </Typography> */}
      <View style={styles.button}>
        <Button
          onPress={() => onPress(item)}
          type="primary"
          btnText={textButtom}
          loading={loading}
        />
      </View>
    </View>
  );
};
export default CardWorkList;
