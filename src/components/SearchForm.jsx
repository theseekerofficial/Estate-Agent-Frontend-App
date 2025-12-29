import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Slider from 'rc-slider';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-slider/assets/index.css';

const SearchForm = ({ onSearch }) => {
    const [type, setType] = useState('any');
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [maxBedrooms, setMaxBedrooms] = useState(10);
    const [postcode, setPostcode] = useState('');
    const [dateAfter, setDateAfter] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            type,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            minBedrooms,
            maxBedrooms,
            postcode,
            dateAfter
        });
    };

    return (
        <form onSubmit={handleSubmit} className="search-form" style={{ padding: '20px', background: '#f9f9f9', marginBottom: '20px', borderRadius: '8px' }}>
            <h3>Filter Properties</h3>

            <div className="form-group">
                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={{marginLeft: '10px'}}>
                    <option value="any">Any</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                </select>
            </div>

            <div className="form-group" style={{ margin: '20px 0', paddingRight: '20px' }}>
                <label>Price Range: £{priceRange[0].toLocaleString()} - £{priceRange[1].toLocaleString()}</label>
                <div style={{ marginTop: '10px' }}>
                    <Slider
                        range
                        min={0}
                        max={1000000}
                        step={10000}
                        defaultValue={[0, 1000000]}
                        value={priceRange}
                        onChange={(value) => setPriceRange(value)}
                        trackStyle={[{ backgroundColor: '#007bff' }]}
                        handleStyle={[{ borderColor: '#007bff' }, { borderColor: '#007bff' }]}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Bedrooms: </label>
                <input
                    type="number"
                    placeholder="Min"
                    value={minBedrooms}
                    onChange={(e) => setMinBedrooms(e.target.value)}
                    style={{ width: '60px', marginLeft: '5px' }}
                />
                <span style={{ margin: '0 5px' }}>to</span>
                <input
                    type="number"
                    placeholder="Max"
                    value={maxBedrooms}
                    onChange={(e) => setMaxBedrooms(e.target.value)}
                    style={{ width: '60px' }}
                />
            </div>

            <div className="form-group" style={{ marginTop: '10px' }}>
                <label>Postcode Area: </label>
                <input
                    type="text"
                    placeholder="e.g. BR1"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                />
            </div>

            <div className="form-group" style={{ marginTop: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Added After:</label>
                <DatePicker
                    selected={dateAfter}
                    onChange={(date) => setDateAfter(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a date"
                    className="date-picker-input"
                />
            </div>

            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                Update Results
            </button>
        </form>
    );
};

export default SearchForm;