import { StyleSheet } from 'react-native';
import {
  BorderRadius,
  Colors,
  FontSizes,
  FontWeightExtraBold,
  FontWeightMedium,
  Margin,
  Padding,
} from './variables';

// ======== SCREENS ========
export const getStarted = StyleSheet.create({
  titleApp: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 120,
  },
});

export const signIn = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Margin.xxlarge,
  },
  button: {
    marginVertical: 6,
    alignSelf: 'center',
    paddingLeft: Padding.medium,
  },
  buttonText: {
    marginLeft: Padding.medium,
    marginRight: 'auto',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Margin.large,
  },
  orText: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    marginHorizontal: Margin.small,
  },
});

export const signUp = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Margin.xxlarge,
  },
  buttonContainer: {
    marginTop: Margin.large,
  },
});

// ======== COMPONENTS ========
export const onBoardingContainer = StyleSheet.create({
  titleApp: {
    marginTop: 70,
  },
});

export const backgroundImage = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const buttonText = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    marginTop: Margin.small,
    borderRadius: BorderRadius.small,
    borderWidth: 2,
  },
  rounded: {
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonText: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeightMedium,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
});

export const inputText = StyleSheet.create({
  wrapper: {
    marginVertical: Margin.small,
  },
  container: {
    flexDirection: 'row',
    height: 40,
    padding: Padding.small,
    alignItems: 'center',
    borderColor: Colors.whiteSmoke,
    borderWidth: 1,
    borderRadius: BorderRadius.small,
  },
  label: {
    fontWeight: FontWeightMedium,
    marginBottom: Margin.small,
  },
  leftIcon: {
    marginRight: Margin.small,
  },
  input: {
    flex: 1,
  },
  rightIcon: {
    marginLeft: Margin.small,
  },
  outlined: {
    borderWidth: 1,
    borderRadius: BorderRadius.small,
  },
  standard: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});

export const authFooter = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    marginVertical: Margin.medium,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export const titleApp = StyleSheet.create({
  title: {
    fontSize: FontSizes.xxLarge,
    fontWeight: FontWeightExtraBold,
    textAlign: 'center',
    color: Colors.blueAzur,
  },
  description: {
    fontSize: FontSizes.large,
    textAlign: 'center',
    color: Colors.whiteSmoke,
  },
});
