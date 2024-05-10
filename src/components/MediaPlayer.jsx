import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from "../redux/actions";

const MediaPlayer = () => {
  const song = useSelector((state) => state.selectedSong.content);
  const favourites = useSelector((state) => state.favourite.content);

  const dispatch = useDispatch();
  console.log(song);
  let isFav = favourites.includes(song);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100 justify-content-center align-items-center">
            <Col xs={3}>
              <div>
                {song && (
                  <img
                    src={song.album.cover_medium}
                    alt="cover"
                    className="mini-cover"
                  />
                )}
              </div>
            </Col>
            <Col xs={6} className="playerControls">
              <div className="d-flex flex-column m-0">
                {song && (
                  <div className="text-white m-0 w-100 text-center">
                    <p className="m-0">
                      {song.title_short} - {song.artist.name}
                    </p>
                  </div>
                )}
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>

                  {isFav ? (
                    <i
                      className="bi bi-heart-fill text-white"
                      onClick={() => {
                        dispatch(removeFromFavouriteAction(song));
                      }}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-heart text-white"
                      onClick={() => {
                        dispatch(addToFavouriteAction(song));
                      }}
                    ></i>
                  )}
                </div>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaPlayer;
