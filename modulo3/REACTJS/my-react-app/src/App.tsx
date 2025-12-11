import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import  HelloWorld  from './components/HelloWorld';
import PromedioTresNotasForm from './components/PromedioTresNotasForm';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SumaForm from './components/SumaForm';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser';
import Greeting from './props/Greeting';
import ParentButtonOne from './props/ParentButtonOne';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentLoginForm from './props/ParentLoginForm';
import ParentUserList from './props/ParentUserList';
import UserCard from './props/UserCard';
import AccessWithLimit from './useState/AccessWithLimit';
import CheckboxSummary from './useState/CheckboxSummary';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import HoverFont from './useState/HoverFont';
import LanguageSwitcher from './useState/LanguageSwitcher';
import LoginWithLimit from './useState/LoginWithLimit';
import MultiSwitch from './useState/MultiSwitch';
import PostLikes from './useState/PostLikes';

function App() {
  const userData = { name: "Carlos", age: 30,
    apellido: "Gonzalez",
    direccion: "Calle Falsa 123",
    telefono: "555-1234",
   };
  return (
      <>
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter />
      <TextInput />
      <ToggleMessage />
      <ShowDate />
      <ColorBox />
      <ConditionalText />
      <EmojiList />
      <SimpleForm />
      <SumaForm />
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <PromedioTresNotasForm />
      
      <UserCard user={userData} />
      <ParentButtonOne />
      <ParentIncrementButton />
      <ParentInputNotifier />
      <ParentUserList />
      <ParentLoginForm/>
      <HoverFont />
      <AccessWithLimit />
      <LoginWithLimit />
      <DocumentTitleChanger />
      <PostLikes />
      <CheckboxSummary />
      <LanguageSwitcher />
      <MultiSwitch />
    </>
  );
}

export default App;
