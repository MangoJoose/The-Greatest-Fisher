import React, { useState, useEffect } from "react";
import { useEventSource } from "../hooks/useEventSource";

type Props = {
    label: string;
    url: string;
};

export default function TextBox({label}: Props, {url}: Props) {
    const { data, err } = useEventSource(url);

    return (
        <h1>{label}{data}</h1>
    )
}