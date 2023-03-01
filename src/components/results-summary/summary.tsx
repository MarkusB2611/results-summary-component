import classes from './summary.module.css'

const Summary = ({result}: SummaryTypes) => {
    return <div className={classes.summary}>
        <h2>Summary</h2>
        <div className={classes.categories_container}>
            {result.map(cat => {
                return (
                    <div className={`${classes.category} ${classes[cat.category]}`}>
                        <div className={classes.name}><img src={cat.icon} />{cat.category}</div>
                        <div className={classes.score}><span className={classes.points}>{cat.score}</span> / 100</div>
                     </div>
                )
            })}
        </div>
    
    </div>

}

type SummaryTypes = {
    result: {
        category: string;
        score: number;
        icon: string;
    }[]
}

export default Summary