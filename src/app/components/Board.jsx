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
        fetch('./api/tickets')
        .then((r) => r.json())
        .then(setTickets)
        .catch(console.error);   
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

            <TicketList tickets={tickets} selectedStatus={selectedStatus} selectedPriority={selectedPriority} searchTerm={searchTerm}
            onAddToQueue={addToQueue} queue={queue} />

            <MyQueueSummary tickets={queue} onRemoveItem={removeItem} onResetQueue={resetQueue}/>
        </div>
    )
}