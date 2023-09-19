import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const Grandpa = () => {
    const asset = 'diamond';
    const assetContext = createContext('gold');
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;


/**
 * 1. Create a context and export it
 * 2. 
*/