import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { exerciseDetailsSection } from 'styles';
import { defaultStyles } from 'styles/globals';

interface IExerciseDetailsSectionProps {
  title: 'instructions' | 'advices';
  data: string[];
}

const ExerciseDetailsSection = ({ title, data }: IExerciseDetailsSectionProps) => {
  const { t } = useTranslation();
  const isAdviceSection = title === 'advices';

  const renderListSection = () => (
    <View style={exerciseDetailsSection.container}>
      {data.map((item: string, index: number) => (
        <View key={index} style={exerciseDetailsSection.listItem}>
          <Text
            style={{
              ...exerciseDetailsSection.itemNumber,
              ...(isAdviceSection ? defaultStyles.orangeColor : defaultStyles.blueAzurColor),
            }}>
            {index + 1}.
          </Text>
          <Text>{t(item)}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View>
      <Text
        style={{
          ...exerciseDetailsSection.title,
          ...(isAdviceSection ? defaultStyles.orangeColor : defaultStyles.blueAzurColor),
        }}>
        {t(title)}
      </Text>
      {renderListSection()}
    </View>
  );
};
export default ExerciseDetailsSection;
