/* eslint-disable react/prop-types */
import globe from '../assets/globe.svg';

const SummaryCard = ({ summary }) => (
  <div className="card-summary">
    <img className="card-summary__img" src={globe} alt="globe" />
    <div className="card-summary__meta">
      <p className="card-summary__meta-p">{`${summary.cases} cases`}</p>
      <p className="card-summary__meta-p ">
        {summary.recovered}
        <span className="card-summary__meta-p--recovered"> recovered</span>
      </p>
      <p className="card-summary__meta-p  ">
        {summary.deaths}
        <span className="card-summary__meta-p--deaths"> deaths</span>
      </p>
    </div>
  </div>
);

export default SummaryCard;
