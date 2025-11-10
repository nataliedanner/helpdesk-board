'use client';
import TicketCard from "./TicketCard"

export default function TicketList( {tickets, selectedStatus, selectedPriority, searchTerm, onAddToQueue, queue} ) {
    const visibleTickets = tickets.filter((ticket) => {
        const matchesStatus = selectedStatus === "All" || ticket.status === selectedStatus;
        const matchesPriority = selectedPriority === "All" || ticket.priority === selectedPriority;
        const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesPriority && matchesSearch
        
    })

    return (
        <div>
            {visibleTickets.length === 0 ? (
                <p id="none">No tickets match your filters.</p>
            ) : ( 
            <ul>
                {visibleTickets.map((ticket) => (
                 <TicketCard key={ticket.id} ticket={ticket} onAddToQueue={onAddToQueue} queue={queue} />
                ))}
            </ul>
            )}
        </div>
    )
}