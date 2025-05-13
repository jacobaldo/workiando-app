import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {bannersList} from '../../../mooks/carrucel';
import {styles} from './style';

const CaroucelCompounet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = ({item, index}: any) => {
    return (
      <Image
        resizeMode="cover"
        key={index}
        source={{uri: item?.image}}
        style={styles.imagen}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={'tinder'}
        data={bannersList}
        sliderWidth={Dimensions.get('window').width - 32}
        itemWidth={Dimensions.get('window').width - 32}
        sliderHeight={201}
        itemHeight={158}
        renderItem={renderItem}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={5000}
        enableMomentum={true}
        lockScrollWhileSnapping={true}
        loop={true}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={bannersList.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationStyle}
        dotStyle={styles.doStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotScale={1}
      />
    </View>
  );
};
export default CaroucelCompounet;
