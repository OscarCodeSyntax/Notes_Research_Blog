import React, { useState } from 'react';
import { Collapse, CollapseProps, Divider, Flex, Layout, Typography } from 'antd';
import ReactMarkdown from 'react-markdown'
import { CollapseKey } from '../types/Types';




const { Header, Footer, Sider, Content } = Layout;

const { Text, Link, Title } = Typography;


const backgroundPrimaryColorValue: string = "#222831"

const FontPrimaryColorValue: string = "#DFD0B8"

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  padding: 20,
  color: backgroundPrimaryColorValue,
  fontStyle: 'italic',
  fontWeight: 'lighter',
  // color: FontPrim,aryColorValue,
  // height: 64,
  // lineHeight: '64px',
  backgroundColor: 'white',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  padding: 20,
  color: "white",
  // color: FontPrimaryColorValue,
  // height: 64,
  // lineHeight: '64px',
  backgroundColor: backgroundPrimaryColorValue,
};

const markupStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  // padding: 20,
  fontSize: '80%',
  // padding: 5,

  color: 'white',
  // height: 64,
  // lineHeight: '64px',
  backgroundColor: backgroundPrimaryColorValue,
};

const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  minHeight: 120,
  // color: FontPrimaryColorValue,
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
  minHeight: "100vh",
  maxWidth: 'calc(100% - 8px)',
  backgroundColor: backgroundPrimaryColorValue,

};



function PageLayout() {

  const mdItems: CollapseProps['items'] = [];


  const jsonPath = require("C:/Users/Owner/Documents/Code/Notes_Research_Blog/src/data/notes/notes.json");

  jsonPath.map((article: any) => {


    let articleObject: CollapseKey = {
      key: article.key,
      label: article.title,
      children: <div style={markupStyle}>
        <div style={{ paddingLeft: 50 }}>
          {/* <ReactMarkdown children={"\r\n\r\n---\r\n\r\n"} /> */}
          {/* <p style={{ margin: 0, fontWeight: "light" }}>TOPIC</p> */}
          <p style={{ fontSize: 15, fontStyle: 'italic', paddingBottom: 0.5, margin: 0, fontWeight: "lighter" }}>{article.summary}</p>

          <ReactMarkdown children={"\r\n\r\n---\r\n\r\n"} />

          <ReactMarkdown children={article.content} />
          <div style={{ paddingTop: 5 }}>
          </div>

        </div>
        {/* <ReactMarkdown children={"\r\n\r\n---\r\n\r\n"} /> */}


      </div>
    };

    mdItems.push(articleObject);
  }

  )
  return (
    <Flex wrap >
      <Header style={headerStyle}>


        <h1 style={{ fontSize: 34 }}> WORK BOOK</h1 >



      </Header>
      <Layout style={layoutStyle} >
        <Sider width="25%" style={siderStyle}>
          <Text code style={{ padding: "5px", fontSize: 20, width: "100%" }}>Notes</Text>
          <Text code style={{ padding: "5px", fontSize: 20, width: "100%" }}>CV</Text>
        </Sider>
        <Layout>

          <Content style={contentStyle}>
            <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 10, paddingTop: 20 }}> Notes
            </h1 >

            <Collapse defaultActiveKey={['1']} ghost items={mdItems} style={{ backgroundColor: backgroundPrimaryColorValue, padding: '0,0,0,0', fontSize: 12, paddingRight: 75 }} />

          </Content>

        </Layout>

      </Layout>
      <Footer style={footerStyle}>Footer</Footer>

    </Flex>
  )
};

export default PageLayout;