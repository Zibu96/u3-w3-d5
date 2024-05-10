import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectedSongAction } from "../redux/actions";

const GenerateSongs = (props) => {
  const dispatch = useDispatch();
  console.log(props.art);
  return (
    <Col
      key={`key${props.id}`}
      className="text-center"
      onClick={() => dispatch(selectedSongAction(props.art))}
    >
      <img
        className="img-fluid"
        src={props.art.album.cover_medium}
        alt="track"
      />
      <p>
        Track: {props.art.title} Artist: {props.art.artist.name}
      </p>
    </Col>
  );
};
export default GenerateSongs;
