import "@/styles/globals.css";
import "../styles/waterDroplet.css";
import "../styles/stepWidget.css";
import "../styles/waterWidget.css";
import "../styles/dashboardStyles.css";
import "../styles/activityWidget.css";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import { Provider } from "react-redux";
import store from "../../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component {...pageProps} />
    </LocalizationProvider>
    </Provider>
  );
}
