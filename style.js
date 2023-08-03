import { create } from 'react-native-tailwindcss';

export default create({
  container: 'flex-1 p-15 items-center justify-center',
  card: 'flex-1 p-20 border-2 border-blue-300 items-center justify-center',
  title: 'text-2xl font-bold',
  button: 'bg-blue-500 p-2 rounded',
  buttonText: 'text-white font-bold',
  iconButton: 'w-12 h-12 p-3 rounded-full border-2 border-blue-500 items-center justify-center',
  textInput: 'p-2 border-2 border-blue-500 w-60',
});
