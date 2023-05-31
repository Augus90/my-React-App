import { useEffect, useState } from "react";
import FakeApiSearch from "./fakeApiSearch";
import './useEffectApiSearch.css'

export default function UseEffectApiSearch(){
    const [search, setSerach] = useState("");
    const [results, setResult] = useState([]);

    useEffect(() => {
        // setTimeout((search) => {
        //     const newResults = FakeApiSearch(search);
        //     setResult(newResults);
        // }, 1000);
        const newResult = FakeApiSearch(search);
        setResult(newResult);

        return () => {
            // alert("El estado se cerro");
        }
    }, [search]);

    return(
        <div >
            <input className="buscar" type="text" value={search} onChange={(e) => setSerach(e.target.value)} placeholder="Buscar..."/>
            <div className="lista">
                {results.map((item, index) => (
                    <a value={item} key={index}>{item}</a>
                ))}
            </div>
        </div>
    )
}