import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

Filter.propTypes = {
  filterField: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue = searchParams.get(filterField) || 'all';

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="filter" data-aos="fade-down">
      {options.map((option) => (
        <button
          className={`filter__btn ${
            currentValue === option.value ? 'filter__btn--active' : ''
          }`}
          onClick={() => handleClick(option.value)}
          key={option.value}
          disabled={currentValue === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
