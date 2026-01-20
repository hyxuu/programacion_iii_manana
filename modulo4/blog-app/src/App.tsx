import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/app.routes";
import type { JSX } from "react";
import { AuthProvider } from "./context/AuthContext";
import { UiProvider } from "./context/UiContext";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>
  <AuthProvider>
    <UiProvider>
      {routes}
      </UiProvider>
    </AuthProvider>;
    </>;
}

/*import type { JSX } from "react";
import TestMUI from "./lab/TestMUI";
import ColorSwitches from "./lab/ColorSwitches";
import BasicButtons from "./lab/BasicButtons";
import BasicTable from "./lab/BasicTable";

export default function App(): JSX.Element {
  return <>
  <TestMUI/>
  <BasicButtons/>
  <ColorSwitches/>
  <BasicTable/>
  </>;
}*/