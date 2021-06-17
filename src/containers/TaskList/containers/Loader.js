import LoadBar from "../../../components/LoadBar";

const Loader = ({ submittedDate, totalHours }) => {
  const durPercentage = Math.ceil(
    ((new Date() - submittedDate) / (1000 * 60) / (totalHours * 60)) * 100
  );

  return (
    <div
      className="progressbar primary-border-color"
      data-progress-bar="true"
      data-show-progress-string="true"
      data-progress-text="Avancement"
    >
      <LoadBar durPercentage={durPercentage} />
    </div>
  );
};

export default Loader;
