import { View } from 'react-native';
import React from 'react';
import { exerciseVideo } from 'styles';
import Video from 'react-native-video';

const videoSource = require('assets/video.mp4');

const ExerciseVideo = () => (
  <View style={exerciseVideo.container}>
    <Video repeat source={videoSource} style={exerciseVideo.content} controls={false} />
  </View>
);

export default ExerciseVideo;
