import { Colors, fontExtraBold, FontSizes } from 'styles/variables';
import { StyleSheet } from 'react-native';

// screens styles
export const getStarted = StyleSheet.create({
  titleApp: {
    flex: 1,
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
  },
});

export const signIn = StyleSheet.create({
  titleApp: {
    marginTop: 70,
  },
  customButton: {
    width: '85%',
    marginVertical: 6,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  customButtonText: {
    marginLeft: 20,
    marginRight: 'auto',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 25,
    fontSize: FontSizes.medium,
    textDecorationLine: 'underline',
  },
});

// components styles
export const titleApp = StyleSheet.create({
  title: {
    fontSize: FontSizes.xxLarge,
    fontWeight: fontExtraBold,
    textAlign: 'center',
    color: Colors.blueAzur,
  },
  description: {
    fontSize: FontSizes.large,
    textAlign: 'center',
    color: Colors.whiteSmoke,
  },
});

export const backgroundImage = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const customButton = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
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
    fontSize: 16,
    fontWeight: '500',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
});
