import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name==='Rubaiya' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;