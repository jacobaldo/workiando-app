import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  flex1: {flex: 1},
  container_input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerInput: {padding: spacings.s2},

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: 45,
  },
  bottomConfirm: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cicleMap: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.neutral.neutral400,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 32.571,
  },
  kmstyle: {flexDirection: 'row', alignItems: 'center'},
});
