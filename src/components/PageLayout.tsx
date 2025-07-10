import React from 'react';
import { Collapse, CollapseProps, Flex, Layout, Typography } from 'antd';
import ReactMarkdown from 'react-markdown'
import { CollapseKey } from '../types/Types';
import { Route, Link as RouterLink, Routes } from 'react-router-dom';




const { Header, Footer, Sider, Content } = Layout;

const { Text } = Typography;


const backgroundPrimaryColorValue: string = "#222831"


const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  padding: 20,
  color: backgroundPrimaryColorValue,
  fontStyle: 'italic',
  fontWeight: 'lighter',
  backgroundColor: 'white',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  padding: 20,
  color: "white",
  backgroundColor: backgroundPrimaryColorValue,
};

const markupStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  fontSize: '80%',
  color: 'white',
  backgroundColor: backgroundPrimaryColorValue,
};

const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  minHeight: 120,
  backgroundColor: backgroundPrimaryColorValue,
};

const cventStyle: React.CSSProperties = {
  textAlign: 'left',
  minHeight: 120,
  paddingRight: 20,
  backgroundColor: backgroundPrimaryColorValue,
};


const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  // color: FontPrimaryColorValue,
  backgroundColor: 'white',
  color: 'black',
  width: '100vw'
};




const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  minHeight: "80vh",
  maxWidth: 'calc(100% - 8px)',
  backgroundColor: backgroundPrimaryColorValue,

};



function PageLayout() {

  const mdItemsAll: CollapseProps['items'] = [];



  const jsonPath = require("C:/Users/Owner/Documents/Code/Notes_Research_Blog/src/data/notes/notes.json");

  const cvPath = require("C:/Users/Owner/Documents/Code/Notes_Research_Blog/src/data/cv/cv.json")

  const homeTextPath = require("C:/Users/Owner/Documents/Code/Notes_Research_Blog/src/data/homePage/homeText.json")

  jsonPath.map((article: any) => {
    let articleObject: CollapseKey = {
      key: article.key,
      label: article.title,
      children: <div style={markupStyle}>
        <div style={{ paddingLeft: 50 }}>
          <p style={{ fontSize: 15, fontStyle: 'italic', paddingBottom: 0.5, margin: 0, fontWeight: "lighter" }}>{article.summary}</p>
          <ReactMarkdown children={"---"} />
          <ReactMarkdown children={article.content} />
          <div style={{ paddingTop: 5 }}>
          </div>
        </div>
      </div>
    };
    mdItemsAll.push(articleObject);
  })




  return (
    <Flex wrap >
      <Header style={headerStyle}>


        <h1 style={{ fontSize: 34 }}> WORK BOOK</h1 >



      </Header>
      <Layout style={layoutStyle} >
        <Sider width="25%" style={siderStyle}>

          <RouterLink to="/notes">
            <Text code style={{ padding: "5px", fontSize: 20, width: "100%" }}>Notes</Text>
          </RouterLink>

          <RouterLink to="/cv">
            <Text code style={{ padding: "5px", fontSize: 20, width: "100%" }}>CV</Text></RouterLink>


          <RouterLink to="/">
            <Text code style={{ padding: "5px", fontSize: 20, width: "100%" }}>Home</Text></RouterLink>

        </Sider>
        <Layout>
          <Content style={contentStyle}>

            <Routes>
              <Route path="/" element={<ReactMarkdown children={homeTextPath.content} />} />
              <Route path="/cv" element={
                <>
                  <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 10, paddingTop: 20 }}> CV </h1 >
                  <div style={{ paddingRight: 50, fontSize: 12 }}>
                    <ReactMarkdown children={cvPath.content} />
                  </div>
                </>
              } />
              <Route path="/notes" element={<>

                <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 10, paddingTop: 20 }}> Notes
                </h1 >

                <Collapse defaultActiveKey={['1']} ghost items={mdItemsAll} style={{ backgroundColor: backgroundPrimaryColorValue, padding: '0,0,0,0', fontSize: 12, paddingRight: 75 }} />

              </>} />

            </Routes>



          </Content>

        </Layout>

      </Layout>
      <Footer style={footerStyle}>Footer</Footer>

    </Flex>
  )
};

export default PageLayout;