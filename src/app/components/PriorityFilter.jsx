'use client';

export default function PriorityFilter( {selectedPriority, setSelectedPriority} ) {
    const priorities = ["All", "Low", "Medium", "High", "Critical"]

    return (
        <div id="filter-box">
            <h2> Priority Filter</h2>
            <select id="filter" value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}>
                {priorities.map((priority) => (
                    <option key={priority} value={priority}>
                        {priority}
                    </option>
                ))}
            </select>
        </div>
    )
}