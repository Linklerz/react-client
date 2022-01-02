import React, {useEffect, useState} from 'react';

export default function App() {
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch("/api/sid86_").then(
            res => res.json()
        ).then(data => {
            setData(data)
            console.log(data)
        });
    }, []);

    return (<div>
            <ul>
                {data.links.map(item => (
                    <li key={item.link}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}