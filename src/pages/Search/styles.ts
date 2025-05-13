import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  bodyView: {
    flex: 1,
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  titleFija: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacings.s2,
  },
  scrollView: {flex: 1, marginBottom: 50},
  cardWorkStyle: {backgroundColor: colors.secondary.secondary100},
  containerWorks: {flexDirection: 'row'},
  cardWork: {marginRight: spacings.s1},
  btnStyle: {marginVertical: 30},
  iconBtnStyle: {marginHorizontal: 10},
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: spacings.s1,
    flexDirection: 'row',
  },
  headerImage: {width: 130, height: 40},
  loadingSkeleton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: colors.neutral.neutral50,
    paddingVertical: 10,
    borderRadius: 20,
  },

  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: spacings.s2,
  },
  drawer: {position: 'absolute', left: 0, top: spacings.s0},

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: spacings.s1,
    paddingHorizontal: 10,
    backgroundColor: colors.primary.primary100,
    borderRadius: borderRadius.r4,
  },

  input: {
    paddingHorizontal: 20,
    // backgroundColor: colors.neutral.neutral100,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: colors.neutral.neutral900,
    borderRadius: 16,
    paddingHorizontal: spacings.s2,
    flex: 1,
    height: 40,
  },
  selectUbication: {
    backgroundColor: colors.primary.primary100,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: borderRadius.r4,
    marginBottom: spacings.s1,
  },
  fabStyle: {
    bottom: Platform.OS === 'ios' ? 90 : 70,
    right: 8,
    position: 'absolute',
  },
  filterCard: {
    padding: spacings.s1,
    margin: spacings.s0,
    borderRadius: borderRadius.r4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    padding: spacings.s2,
  },
});
