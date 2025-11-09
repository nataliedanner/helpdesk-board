'use client';

export default function TicketCard( {ticket, onAddToQueue, queue = []} ) {
    const isInQueue = queue.some((t) => t.id === ticket.id);

    return (
        <div>
            <ul>
                <li key={ticket.id}>
                    <p> Priority: {ticket.priority} </p>
                    <p> Status: {ticket.status} </p>
                    <p id="title"> {ticket.title} </p>
                    <p> Description: {ticket.description} </p>
                    <p> Assignee: {ticket.assignee} </p>
                    <p> Updated: {ticket.updatedAt} </p>
                    <button id="add"
                    onClick={() => onAddToQueue(ticket)}
                    disabled={isInQueue}>
                        {isInQueue ? "Already in Queue" : "Add to Queue"}
                    </button>
                </li>
            </ul>
        </div>
    )
}