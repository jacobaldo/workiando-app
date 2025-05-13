import {StyleSheet} from 'react-native';
interface StyleProps {
  height: number | string;
  width: any;
  borderRadius: number;
  backgroundColor: string;
}

export const styles = ({
  height,
  width,
  borderRadius,
  backgroundColor,
}: StyleProps) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      overflow: 'hidden',
      marginVertical: 5,
    },
    animatedbones: {
      borderRadius: borderRadius,
      ...(StyleSheet.absoluteFill as {}),
    },
  });
