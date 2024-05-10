import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";
import MediaPlayer from "./components/MediaPlayer";
import SearchSection from "./components/SearchSection";
function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MyNav />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <MainHeader />
            <SearchSection sectionName="La tua ricerca" />
            <MainSection
              artistName="queen"
              sectionName="Rock Classic"
              index={0}
            />
            <MainSection
              artistName="katieperry"
              sectionName="Pop Culture"
              index={1}
            />
            <MainSection artistName="eminem" sectionName="#Hip Hop" index={2} />
          </Col>
        </Row>
      </Container>
      <MediaPlayer />
    </>
  );
}

export default App;
