import "./index.css";

const VisitedCountryList = (props) => {
  const { visitedCountries, isDeActive } = props;
  const { imageUrl, name, id, isVisited } = visitedCountries;
  const onClickRemove = () => {
    isDeActive(id);
  };

  return isVisited ? (
    <li className="visited-countriesList">
      <img src={imageUrl} alt=" thumbnail" className="image" />
      <div className="removebtn-container">
        <p className="visited-countryName">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  ) : null;
};
export default VisitedCountryList;
