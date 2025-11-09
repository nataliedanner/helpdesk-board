'use client';

export default function MyQueueSummary( {tickets, onRemoveitem, onResetQueue} ) {
    const ticketCount = tickets.length;

    return (
        <div>
            <h2> My Queue </h2>
            <ul>
                {tickets.map((ticket, index) => (
                    <li key={ticket.id}>
                        {ticket.title}
                        <button onClick={() => onRemoveitem(index)}> Remove</button>
                    </li>
                ))}
            </ul>

            {ticketCount > 0 && (
                <button onClick={onResetQueue}> Reset Cart</button>
            )}
        </div>
    );
}