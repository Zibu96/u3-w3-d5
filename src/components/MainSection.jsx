import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import GenerateSongs from "./GenerateSongs";

const MainSection = (props) => {
  const [artist, setArtist] = useState([]);

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        setArtist(data);
        console.log(artist);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <Row>
      <Col className="col-10">
        <div id="rock">
          <h2>{props.sectionName}</h2>
          <Row className="imgLinks py-3" id="rockSection">
            {artist &&
              artist.slice(0, 4).map((art) => {
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
  );
};
export default MainSection;
