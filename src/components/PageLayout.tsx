import React, { useEffect, useState } from 'react';
import { Button, Collapse, CollapseProps, Flex, Layout, Typography } from 'antd';
import ReactMarkdown from 'react-markdown'
import { CollapseKey } from '../types/Types';
import { Route, Link as RouterLink, Routes } from 'react-router-dom';
import Home2 from './icons/HomeIcon';
import FileMultiple from './icons/CvIcon';
import Notebook1 from './icons/NoteBook';
import Github from './icons/GitHubIcon';
import Linkedin from './icons/LinkedinIcon';

const { Header, Footer, Sider, Content } = Layout;

const backgroundPrimaryColorValue: string = "#222831"

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  paddingLeft: 20,
  color: backgroundPrimaryColorValue,
  fontStyle: 'italic',
  fontWeight: 'lighter',
  backgroundColor: 'white'
};

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  width: "100%",
  paddingTop: 30,
  paddingLeft: 20,
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
  paddingLeft: 30,
  paddingBottom: 20
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

function SiderObject() {

  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  if (isMobile) {
    return (
      <div style={{ padding: "30px" }}>
        <RouterLink to="/">
          <Button icon={<Home2 />} ghost type="dashed" style={{ marginTop: "5px", marginBottom: "5px", fontSize: 14, width: "100%", }}>Home</Button></RouterLink>
        <RouterLink to="/notes">
          <Button ghost icon={<Notebook1 />} type="dashed" style={{ marginTop: "5px", marginBottom: "5px", fontSize: 14, width: "100%" }}>Notes</Button>
        </RouterLink>
        <RouterLink to="/cv">
          <Button ghost icon={<FileMultiple />} type="dashed" style={{ marginTop: "5px", fontSize: 14, width: "100%" }}>CV</Button></RouterLink>
      </div>
    )
  } else {
    return (
      <Sider width="15%" style={siderStyle}>
        <RouterLink to="/">
          <Button icon={<Home2 />} ghost type="dashed" style={{ marginTop: "5px", marginBottom: "5px", padding: "5px", fontSize: 14, width: "100%", }}>Home</Button></RouterLink>
        <RouterLink to="/notes">
          <Button ghost icon={<Notebook1 />} type="dashed" style={{ marginTop: "5px", marginBottom: "5px", padding: "5px", fontSize: 14, width: "100%" }}>Notes</Button>
        </RouterLink>
        <RouterLink to="/cv">
          <Button ghost icon={<FileMultiple />} type="dashed" style={{ marginTop: "5px", fontSize: 14, width: "100%" }}>CV</Button></RouterLink>
      </Sider>
    )
  }

}

function HomePage(mdItemsArray: CollapseProps['items'], homeTextPath: any) {

  const mdItemsFirst: CollapseProps['items'] = [];

  if (mdItemsArray?.concat.length) {
    mdItemsFirst.push(mdItemsArray[0]);
  }

  return (
    <div style={{ backgroundColor: backgroundPrimaryColorValue, padding: '0,0,0,0', fontSize: 13, paddingRight: 0 }}>
      <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 10, paddingTop: 20 }}> Welcome </h1 >
      <div style={{ paddingRight: 30, paddingLeft: 25, fontSize: 14 }} >
        <ReactMarkdown children={homeTextPath.content} />
      </div>
      <div style={{ paddingLeft: 50, fontSize: 14, marginTop: -10 }} >
        {mdItemsFirst.length && mdItemsFirst[0]?.key && (
          <Collapse ghost items={mdItemsFirst} />
        )}
      </div>
    </div>
  )
}


function PageLayout() {

  const mdItemsArray: CollapseProps['items'] = [];

  const notesPath = require("../data/notes/notes.json");

  const cvPath = require("../data/cv/cv.json")

  const homeTextPath = require("../data/homePage/homeText.json")

  notesPath.map((article: any) => {
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
    mdItemsArray.push(articleObject);
  })

  return (
    <Flex wrap >
      <div style={headerStyle}>
        <p style={{
          paddingTop: 50, paddingBottom: 0, margin: 0
        }}>Oscar Cumming</p>
        <div style={{ display: "flex" }}>
          <h1 style={{
            paddingTop: 0, margin: 0, paddingBottom: 10, width: "70%"
          }}> WORK BOOK
          </h1 >
          <span style={{
            paddingBottom: 0, textAlign: "right", width: "30%", paddingTop: 7, paddingRight: 20
          }}>
            <Linkedin />
            <Github />
          </span>
        </div>
      </div>
      <Layout style={layoutStyle} >
        {SiderObject()}
        <Layout>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={
                HomePage(mdItemsArray, homeTextPath)} />
              <Route path="/cv" element={
                <>
                  <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 15, paddingTop: 20 }}> CV </h1 >
                  <div style={{ paddingRight: 30, fontSize: 14, paddingBottom: 50 }}>
                    <ReactMarkdown children={cvPath.content} />
                  </div>
                </>
              } />
              <Route path="/notes" element={<>
                <h1 style={{ fontSize: 25, margin: 5, paddingBottom: 10, paddingTop: 20 }}> Notes
                </h1 >
                <Collapse ghost items={mdItemsArray} style={{ backgroundColor: backgroundPrimaryColorValue, padding: '0,0,0,0', fontSize: 14, paddingRight: 30 }} />
              </>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <Footer style={footerStyle}>
        <Linkedin />
        <Github />
      </Footer>
    </Flex>
  )
};

export default PageLayout;