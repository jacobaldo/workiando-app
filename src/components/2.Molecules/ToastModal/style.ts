import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
  },
  snackbar: {
    backgroundColor: colors.white,
    borderRadius: spacings.s2,
    elevation: 0,
    padding: 0,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  info: {
    backgroundColor: colors.neutral.neutral400,
    flex: 1,
  },
  text: {
    color: colors.white,
    marginLeft: 15,
    flex: 1,
    marginRight: 15,
    fontSize: 14,
  },
  label: {},
  snackContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 12,
  },
  boxText: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
export const stylesVariant = StyleSheet.create({
  default: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 0,
    padding: 0,
  },
  info: {
    backgroundColor: colors.informative.informative100,
  },
  success: {
    backgroundColor: colors.success.success100,
  },
  danger: {
    backgroundColor: colors.warning.warning100,
  },
});

export const stylesPosition = StyleSheet.create({
  top: {
    margin: 0,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    marginTop: spacings.s2,
  },
  bottom: {
    margin: 0,
    paddingTop: '30%',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    marginBottom: '5%',
  },
});
