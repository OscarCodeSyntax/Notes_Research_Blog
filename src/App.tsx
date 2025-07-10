import { ConfigProvider, theme } from 'antd';
import './App.css';
import PageLayout from './components/PageLayout.tsx';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "white",
            colorFillSecondary: "white",
            colorText: "white",
            colorSplit: "white",
          },
          components: {
            Divider: {
              padding: 0,
              lineHeight: 10
            }
          }
        }}

      >
        <HashRouter>
          <PageLayout />
        </HashRouter>
      </ConfigProvider>
    </>

  );
}

export default App;
