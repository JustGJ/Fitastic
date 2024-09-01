import { StyleSheet } from 'react-native';
import {
  BorderRadius,
  Colors,
  FontSizes,
  FontWeightBold,
  FontWeightExtraBold,
  FontWeightMedium,
  Margin,
  Padding,
} from './variables';

// ======== SCREENS ========
export const splash = StyleSheet.create({
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
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: Margin.large,
  },
});

export const sessions = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    textAlign: 'center',
    marginTop: Margin.xxlarge,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: FontWeightBold,
    textAlign: 'center',
    color: Colors.blueAzur,
    marginBottom: Margin.small,
  },
  description: {
    fontSize: FontSizes.medium,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 0,
  },
});

export const exercises = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  targetContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Padding.small,
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: FontWeightMedium,
    marginLeft: Margin.large,
    color: 'black',
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  targetImage: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.rounded,
  },
  content: {
    backgroundColor: Colors.white,
    paddingBottom: Padding.medium,
    paddingHorizontal: 15,
    height: '100%',
  },
});

export const exercisesByTarget = StyleSheet.create({
  targetTitle: {
    fontSize: 20,
    fontWeight: FontWeightBold,
    color: Colors.blueAzur,
    marginVertical: Margin.small,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Padding.small,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.rounded,
    backgroundColor: Colors.greyLight,
  },
  exerciseText: {
    marginLeft: Margin.small,
    fontSize: FontSizes.medium,
    color: Colors.black,
  },
  chevron: {
    position: 'absolute',
    right: 0,
  },
});

export const exercisesDetails = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Padding.medium,
  },
  videoContainer: {
    borderWidth: 1,
    borderColor: Colors.greyLight,
    borderRadius: BorderRadius.rounded,
    height: 400,
    marginBottom: Margin.small,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: FontSizes.large,
    fontWeight: FontWeightBold,
    color: Colors.black,
    marginBottom: Margin.small,
  },
  description: {
    fontSize: FontSizes.medium,
    textAlign: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  targetImage: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.rounded,
  },
  sectionContainer: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: Colors.greyLight,
    paddingLeft: Padding.small,
    paddingRight: Padding.large,
    paddingVertical: Padding.medium,
  },
  sectionTitle: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeightMedium,
    marginVertical: Margin.small,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: Margin.medium,
  },
  itemNumber: {
    borderRadius: BorderRadius.rounded,
    fontWeight: FontWeightMedium,
    textAlign: 'center',
    marginRight: Margin.small,
  },
});

export const createSession = StyleSheet.create({
  note: {
    flexDirection: 'row',
    marginTop: Margin.small,
  },
  noteText: {
    fontSize: FontSizes.small,
    marginBottom: Margin.medium,
    color: Colors.blueAzur,
    fontWeight: FontWeightBold,
    marginLeft: 4,
  },
});

export const modalExercises = StyleSheet.create({
  modalView: {
    height: '100%',
    width: '100%',
    paddingTop: 60,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Margin.small,
  },
  title: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeightBold,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    position: 'absolute',
    left: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// ======== COMPONENTS ========
export const authContainer = StyleSheet.create({
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
  // wrapper: {
  //   marginVertical: Margin.small,
  // },
  container: {
    flexDirection: 'row',
    height: 40,
    padding: Padding.small,
    alignItems: 'center',
    borderColor: Colors.whiteSmoke,
    borderWidth: 1,
    borderRadius: BorderRadius.small,
    marginVertical: Margin.small,
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

export const dashboardHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Padding.small,
    paddingTop: 50,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e5e5',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
  },
  welcome: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeightBold,
    marginRight: Margin.small,
  },
  notifications: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});
