import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { exercisesDetails } from 'styles';
import { defaultStyles } from 'styles/globals';
import { RouteProp } from '@react-navigation/native';

type ExerciseDetailsRouteProp = RouteProp<
  {
    params: {
      item: {
        name: string;
        description: string;
        instructions: string[];
        advices: string[];
      };
    };
  },
  'params'
>;

interface ExerciseDetailsProps {
  route: ExerciseDetailsRouteProp;
}

const videoSource = require('assets/video.mp4');

const Section = ({ title, data }: { title: string; data: string[] }) => {
  const { t } = useTranslation();
  const isAdviceSection = title === 'exercises.advices';

  return (
    <View>
      <Text
        style={{
          ...exercisesDetails.sectionTitle,
          ...(isAdviceSection
            ? defaultStyles.orangeColor
            : defaultStyles.blueAzurColor),
        }}>
        {t(title)}
      </Text>
      <View style={exercisesDetails.sectionContainer}>
        {data.map((item: string, index: number) => (
          <View key={index} style={exercisesDetails.listItem}>
            <Text
              style={{
                ...exercisesDetails.itemNumber,
                ...(isAdviceSection
                  ? defaultStyles.orangeColor
                  : defaultStyles.blueAzurColor),
              }}>
              {index + 1}.
            </Text>
            <Text>{t(item)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const ExerciseDetails = ({ route }: ExerciseDetailsProps) => {
  const { t } = useTranslation();
  const { item } = route.params;
  const { name, description, instructions, advices } = item;

  return (
    <ScrollView style={exercisesDetails.container}>
      <View style={exercisesDetails.videoContainer}>
        <Video
          repeat
          source={videoSource}
          style={exercisesDetails.video}
          controls={false}
        />
      </View>
      <Text style={exercisesDetails.name}>{t(name)}</Text>
      <Text>{t(description)}</Text>
      <Section title="exercises.instructions" data={instructions} />
      <Section title="exercises.advices" data={advices} />
    </ScrollView>
  );
};

export default ExerciseDetails;
