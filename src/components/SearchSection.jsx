import { useSelector } from "react-redux";
import GenerateSongs from "./GenerateSongs";
import { Col, Row } from "react-bootstrap";

const SearchSection = (props) => {
  const song = useSelector((state) => state.searchSongs.content);
  return (
    <>
      {song && (
        <Row>
          <Col className="col-10">
            <div id="rock">
              <h2>{props.sectionName}</h2>
              <Row className="imgLinks py-3" id="rockSection">
                {song &&
                  song.slice(0, 4).map((art) => {
                    return (
                      <>
                        <GenerateSongs art={art} key={art.id} />
                      </>
                    );
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
export default SearchSection;
