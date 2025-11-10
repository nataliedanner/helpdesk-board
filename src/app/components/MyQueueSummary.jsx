'use client';

export default function MyQueueSummary( {tickets, onRemoveItem, onResetQueue} ) {
    const ticketCount = tickets.length;

    return (
        <div id="queue">
            <h2 id="queue-title"> My Queue </h2>
            <ul>
                {tickets.map((ticket, index) => (
                    <li key={ticket.id}>
                        <p> Priority: {ticket.priority} </p>
                        <p> Status: {ticket.status} </p>
                        <p id="title"> {ticket.title} </p>
                        <p> Description: {ticket.description} </p>
                        <p> Assignee: {ticket.assignee} </p>
                        <p> Updated: {ticket.updatedAt} </p>
                        <button id="remove" onClick={() => onRemoveItem(ticket.id)}> Remove from queue</button>
                    </li>
                ))}
            </ul>

            {ticketCount > 0 && (
                <button id="reset" onClick={onResetQueue}> Clear Queue</button>
            )}
        </div>
    );
}