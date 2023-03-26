import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMax} 
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
