import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {borderRadius, spacings} from '../../../constants/spacings';
import {fontSizes} from '../../../constants/fontSizes';

export const styles = StyleSheet.create({
  InsuranceCards: {
    width: '40%',
    borderRadius: borderRadius.r5,
    paddingHorizontal: spacings.s3,
    paddingTop: spacings.s5,
    margin: spacings.s1,
    marginBottom: spacings.s3,
  },
  recomended: {height: 30},
  contRecomended: {
    backgroundColor: '#7DF0BA',
    borderRadius: 16,
    paddingVertical: spacings.s0,
    width: 170,
  },
  scrollDescription: {height: 350, marginBottom: spacings.s2},
  textRecomended: {color: colors.black, textAlign: 'center', fontWeight: '900'},
  imageHeader: {width: 52, height: 48},
  containerText: {
    flex: 1,
  },
  header: {flexDirection: 'row'},
  title: {fontWeight: '900', fontSize: 20},
  textName: {
    paddingVertical: spacings.s2,
    fontWeight: '900',
    fontSize: fontSizes.large,
    lineHeight: 32,
    height: 70,
  },
  costo: {
    textTransform: 'uppercase',
    color: colors.primary.primary100,
    fontSize: fontSizes.vmsmall,
    marginTop: spacings.s3,
  },
  price: {
    fontWeight: '900',
    fontSize: fontSizes.medium,

    marginTop: spacings.s1,
    marginBottom: spacings.s3,
  },
  priceday: {
    fontWeight: '900',
    fontSize: fontSizes.vsmall,

    marginTop: spacings.s1,
    marginBottom: spacings.s3,
  },
  description: {
    fontWeight: '500',
    fontSize: fontSizes.small,
    lineHeight: 28,
    marginStart: spacings.s2,
  },
  body: {
    borderTopWidth: 1,
    borderTopColor: colors.neutral.neutral400,
    paddingVertical: spacings.s3,
  },
  point: {
    width: 10,
    height: 10,
    marginTop: spacings.s1,
    backgroundColor: colors.primary.primary100,
    borderRadius: borderRadius.r4,
  },
  rowDescription: {
    flexDirection: 'row',
    padding: spacings.s3,
  },
  icon: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});
