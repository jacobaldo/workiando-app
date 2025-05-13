import {Dimensions, StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  bottomHandle: {alignItems: 'center'},
  container: {flex: 1, backgroundColor: colors.other.backgroundShet},
  touchable: {flex: 1},
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listCategory: {
    borderWidth: 1,
    padding: spacings.s1,
    marginEnd: spacings.s1,
    marginBottom: spacings.s1,
    borderRadius: borderRadius.r4,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacings.s2,
  },

  flex1: {height: Dimensions.get('window').height * 0.4},
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
