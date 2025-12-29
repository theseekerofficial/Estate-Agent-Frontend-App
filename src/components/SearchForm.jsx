import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [criteria, setCriteria] = useState({
        type: 'any',
        minPrice: 0,
        maxPrice: 10000000,
        minBedrooms: 0,
        maxBedrooms: 10,
        dateAfter: '',
        postcode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCriteria(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(criteria);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form" style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
            <div className="form-group">
                <label>Type:</label>
                <select name="type" onChange={handleChange} value={criteria.type}>
                    <option value="any">Any</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                </select>
            </div>

            <div className="form-group">
                <label>Price Range:</label>
                <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
                <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Bedrooms:</label>
                <input type="number" name="minBedrooms" placeholder="Min Beds" onChange={handleChange} />
                <input type="number" name="maxBedrooms" placeholder="Max Beds" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Postcode Area:</label>
                <input type="text" name="postcode" placeholder="e.g. BR1" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Added After:</label>
                <input type="date" name="dateAfter" onChange={handleChange} />
            </div>

            <button type="submit" style={{ marginTop: '10px' }}>Search</button>
        </form>
    );
};

export default SearchForm;