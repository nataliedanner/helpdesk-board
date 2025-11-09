'use client';

export default function( {selectedStatus, setSelectedStatus} ) {
    const statuses = ["All", "Open", "In Progress", "On Hold", "Resolved"]

    return (
        <div id="filter-box">
            <h2> Status Filter</h2>
            <select id="filter" value={selectedStatus}
            onChange ={(e) => setSelectedStatus(e.target.value)}>
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    )
}
