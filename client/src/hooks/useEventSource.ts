import { useEffect, useState } from "react";

export function useEventSource(url: string) {
    const [data, setData] = useState<string | null>(null); // Default null, setData is the function when SSE data arrives
    const [err, setErr] = useState<string | null>(null); // Default null, setErr called when connection fails

    useEffect(() => { // Run when component renders
        const eventSource = new EventSource(url); // Connects
        eventSource.onmessage = (event) => { // Set up listener for message event
            setData(event.data); // event.data contains the message, automatically updating ui
        }

        eventSource.onerror = () => {
            setErr("Connection Lost");
        }

        return () => eventSource.close();
    }, [url]); // Updates when url changes, which should only be once

    return { data, err };
}