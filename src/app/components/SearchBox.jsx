'use client';

export default function SearchBox( {searchTerm, setSearchTerm} ) {
    return (
        <div id="filter-box">
            <h2> Search </h2>
            <input id="search" type="text" value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search title or description">
            </input>
        </div>
    );
}