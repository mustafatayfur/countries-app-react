import  './Countries.css';
import Select from '../../components/select/Select';

const Countries = () => {
  return (
    <div className='countries'>
        <h3>Choose a continent</h3>
          <Select />
    </div>
  );
};

export default Countries;
