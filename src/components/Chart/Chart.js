import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return <div className='chart'>
    {props.bars.map((bar) => {
      <ChartBar
        key={bar.label}
        value={bar.value}
        maxValue={null}
        label={bar.label}
      />
    })};
  </div>
}

export default Chart;