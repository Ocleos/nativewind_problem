import { Stack } from 'expo-router';
import { LineChartIcon, ScrollTextIcon, SettingsIcon, WrenchIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

export default () => {
  const modules = [
    { id: 'stats', title: 'Stats', icon: LineChartIcon },
    { id: 'notes', title: 'Notes', icon: ScrollTextIcon },
    { id: 'tools', title: 'Tools', icon: WrenchIcon },
    {
      id: 'settings',
      title: 'Settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <View className='flex-1'>
      <Stack.Screen
        options={{
          title: 'Home',
          statusBarStyle: 'dark',
        }}
      />
      <View className='gap-4 p-4'>
        {modules.map((module) => (
          <View key={module.id} className='rounded-xl bg-slate-500'>
            <Pressable
              onPress={() => console.log(module.id)}
              className='flex-row items-center justify-center gap-4 p-4'>
              <module.icon size={24} color={'#FFFFFF'} />
              <Text className='color-white text-2xl'>{module.title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};
