import { ConfigProvider, theme } from 'antd';
import './App.css';
import PageLayout from './components/PageLayout.tsx';

function App() {
  return (
    <><ConfigProvider
      theme={{
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        token: {
          colorPrimary: "white",
          colorFillSecondary: "white",
          colorText: "white",
          // colorBgSolid: "white",
          colorSplit: "white",
          // colorBgBase: "white",
        },
        components: {
          Divider: {
            padding: 0,
            lineHeight: 10
          }
        }
      }}

    >
      <PageLayout />
    </ConfigProvider>
    </>

  );
}

export default App;
