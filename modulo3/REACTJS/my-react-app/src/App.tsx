/*import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SumarForm from './components/SumarForm';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser';
import Greeting from './props/Greeting';
import ParentAreaTriangulo from './props/ParentAreaTriangulo';
import ParentButtonOne from './props/ParentButtonOne';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentLoginForm from './props/ParentLoginForm';
import ParentUserList from './props/ParentUserList';
import AccessWithLimit from './useState/AccessWithLimit';
import CheckboxSummary from './useState/CheckboxSummary';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import HoverFont from './useState/HoverFont';
import LanguageSwitcher from './useState/LanguageSwitcher';
import LoginAccessWithLimit from './useState/LoginAccessWithLimit';
import MultiSwitch from './useState/MultiSwitch';
import PostLikes from './useState/PostLikes';
import ClickHistory from "./useState/ClickHistory";
import DynamicColor from "./useState/DynamicColor";
import Clock from "./useEffect/Clock";
import FetchUser from "./useEffect/FetchUser";
import FetchUsers from "./useEffect/FetchUsers";
import LogEffect from "./useEffect/LogEffect";
import PersistCounter from "./useEffect/PersistCounter";
import ScrollLogger from "./useEffect/ScrollLoger";
import UserCard from './props/UserCard';*/

import { useState } from "react";
import { LanguageContext } from "./useContext/LanguageContext";
import LanguageToggle from "./useContext/LanguageToggle";
import LoginStatus from "./useContext/LoginStatus";
import { LoginContext } from "./useContext/LoginContext";
import FocoAutomatico from "./useRef/FocoAutomatico";
import CirculoColorido from "./useRef/CirculoColorido";
import CuadradoColorido from "./useRef/CuadradoColorido";
import ScrollDemo from "./useRef/ScrollDemo";
import ReproductorSonido from "./useRef/ReproductorSonido";
import MoverCaja from "./useRef/MoverCaja";
import FiltroLista from "./useMemo/FiltroLista";
import TablaOrdenada from "./useMemo/TablaOrdenada";
import ContadorLetras from "./useMemo/ContadorLetras";
import Contador from "./useCallBack/Contador";
import ReRender from "./useCallBack/ReRender";
import ListaProps from "./useCallBack/ListaProps";
import ContadorReducer from "./useReducer/ContadorReducer";
import FormularioReducer from "./useCallBack/FormularioReducer";
import ListaReducer from "./useReducer/ListaReducer";


    /*<>
      <HelloWorld/>
      <WelcomeUser/>
      <ButtonCounter/>
      <TextInput/>
      <ToggleMessage/>
      <ShowDate/>
      <ColorBox/>
      <ConditionalText/>
      <EmojiList/>
      <SimpleForm/>
      <SumarForm/>
      <PromedioNotas/>
  </>*/
  /*const userData = { name: "Dylan", age: 19, last:"Fernández",direction: "La Comuna",phone:"0969081645"};
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
      <ParentButtonOne/>
      <ParentIncrementButton/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
      <ParentAreaTriangulo/>
      <HoverFont/>
      <AccessWithLimit/>
      <LoginAccessWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
      <DynamicColor/>
      <ClickHistory/>
      <LogEffect/>
      <FetchUser/>
      <FetchUsers/>
      <Clock/>
      <ScrollLogger/>
      <PersistCounter/>
    </>*/
    
function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);
  return (
    <>
      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
        <LanguageToggle />
      </LanguageContext.Provider>
      
      <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <LoginStatus />
      </LoginContext.Provider>
      <FocoAutomatico/>
      <CirculoColorido/>
      <CuadradoColorido/>
      <ScrollDemo/>
      <ReproductorSonido/>
      <MoverCaja/>
      <FiltroLista/>
      <TablaOrdenada/>
      <ContadorLetras/>
      <Contador/>
      <ReRender/>
      <ListaProps items={[]}/>
      <ContadorReducer/>
      <FormularioReducer/>
      <ListaReducer/>
    </>
  );
}


export default App;