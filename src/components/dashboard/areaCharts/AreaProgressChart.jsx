const data = [
  {
    id: 1,
    name: "Jeans",
    percentValue: 70,
  },
  {
    id: 2,
    name: "Shirts",
    percentValue: 40,
  },
  {
    id: 3,
    name: "Belts",
    percentValue: 60,
  },
  {
    id: 4,
    name: "Caps",
    percentValue: 80,
  },
  {
    id: 5,
    name: "Others",
    percentValue: 20,
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValue}%
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{ width: `${progressbar.percentValue}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
