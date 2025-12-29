import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchForm from '../components/SearchForm.jsx';
import propertiesData from '../data/properties.json';

const SearchPage = () => {
    const [allProperties] = useState(propertiesData.properties);
    const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

    const handleSearch = (criteria) => {
        const results = allProperties.filter(property => {
            const typeMatch = criteria.type === 'any' || property.type === criteria.type;

            const priceMatch =
                property.price >= Number(criteria.minPrice) &&
                property.price <= Number(criteria.maxPrice);

            const bedsMatch =
                property.bedrooms >= Number(criteria.minBedrooms) &&
                property.bedrooms <= Number(criteria.maxBedrooms);

            const postcodeMatch = criteria.postcode === '' ||
                property.location.toLowerCase().includes(criteria.postcode.toLowerCase());

            let dateMatch = true;
            if (criteria.dateAfter) {
                const propDate = new Date(`${property.added.month} ${property.added.day}, ${property.added.year}`);
                const searchDate = new Date(criteria.dateAfter);
                dateMatch = propDate >= searchDate;
            }

            return typeMatch && priceMatch && bedsMatch && postcodeMatch && dateMatch;
        });

        setFilteredProperties(results);
    };

    return (
        <div className="search-page">
            <h1>Property Search</h1>

            <SearchForm onSearch={handleSearch} />

            <div className="property-list-grid">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <p>No properties found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;