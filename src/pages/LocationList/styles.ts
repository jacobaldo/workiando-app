import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  containerAdd: {padding: 20, flex: 1},
  item: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    width: 37.5,
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  deleteItem: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7.5,
    marginLeft: 2.5,
  },
  separator: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: '#ababab',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 11,
    fontWeight: '400',
  },
  titlePlace: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  cicleMap: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.neutral.neutral50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  textUbicatios: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.primary.primary100,
  },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backHeader: {
    marginVertical: 10,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    height: 30,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,
    justifyContent: 'center',
    padding: 5,
  },
  lottie: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
