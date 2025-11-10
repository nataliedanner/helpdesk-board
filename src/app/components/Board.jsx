'use client';
import { useEffect, useState } from 'react';
import TicketList from "./TicketList"
import StatusFilter from "./StatusFilter"
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';


export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedPriority, setSelectedPriority] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [queue, setQueue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function addToQueue(ticket) {
        const alreadyInQueue = queue.some((t) => t.id === ticket.id);
        if (!alreadyInQueue) {
            setQueue([...queue, ticket]);
        }
    }

    function removeItem(id) {
        setQueue((prev) => prev.filter((ticket) => ticket.id !== id));
    }

    function resetQueue() {
        setQueue([]);
    }


    useEffect(() =>{
        setLoading(true);
        fetch('./api/tickets')
        .then((r) => r.json())
        .then((data) => {
            setTickets(data);
            setLoading(false)
        })
        .catch((err) => {
            console.error(err);
            setError("Failed to load tickets. ")
            setLoading(false);
        })
        },   []);  

    useEffect(() => {
        const interval = setInterval(() => {
            setTickets((prevTickets) => {
                if (prevTickets.length === 0) 
                    return prevTickets;

                const index = Math.floor(Math.random() * prevTickets.length);
                const ticket = prevTickets[index];

                const updatedTicket = {...ticket};

                const statusChanges = {
                    Open: "In Progress", 
                    "In Progress": "Resolved",
                    Resolved: "Closed",
                    Closed: "Open",
                };

                const priorityChanges = {
                    Low: "Medium",
                    Medium: "High",
                    High: "Critical",
                    Critical: "Low",
                };

                const changeType = Math.random() < 0.5 ? "status" : "priority";

                if(changeType === "status") {
                    updatedTicket.status = statusChanges[ticket.status] || ticket.status;
                    }
                else {
                    updatedTicket.priority = priorityChanges[ticket.priority] || ticket.priority;
                }

                updatedTicket.updatedAt = new Date().toISOString();

                const newTickets = [...prevTickets];
                newTickets[index] = updatedTicket;
                return newTickets;
            });
        },
        Math.floor(Math.random() * 4000) + 6000);
    
        return () => clearInterval(interval);
        },   []);

    return (
        <div>
            <StatusFilter 
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                />
            <PriorityFilter
                selectedPriority={selectedPriority}
                setSelectedPriority={setSelectedPriority} />

            <SearchBox
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm} />

            {loading && <p> Loading tickets </p>}
            {error && <p> {error} </p>}
            <TicketList tickets={tickets} selectedStatus={selectedStatus} selectedPriority={selectedPriority} searchTerm={searchTerm}
            onAddToQueue={addToQueue} queue={queue} />

            <MyQueueSummary tickets={queue} onRemoveItem={removeItem} onResetQueue={resetQueue}/>
        </div>
    );
}