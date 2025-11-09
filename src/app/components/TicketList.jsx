'use client';
import TicketCard from "./TicketCard"

export default function TicketList( {tickets, selectedStatus, selectedPriority, searchTerm, onAddToQueue, queue} ) {
    const filtered = tickets.filter((ticket) => {
        const matchesStatus = selectedStatus === "All" || ticket.status === selectedStatus;
        const matchesPriority = selectedPriority === "All" || ticket.priority === selectedPriority;
        const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesPriority && matchesSearch
    })

    return (
        <div>
            <ul>
                {filtered.map((ticket) => (
                 <TicketCard key={ticket.id} ticket={ticket} onAddToQueue={onAddToQueue} queue={queue} />
                ))}
            </ul>
        </div>
    )
}