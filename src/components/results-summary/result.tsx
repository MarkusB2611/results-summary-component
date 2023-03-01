import classes from './result.module.css'

const Result = ({totalScore}: ResultTypes) => {
    return (
        <div className={classes.result}>
            <h1 className={classes.title}>Your result</h1>
            <div className={classes.score}><h3 className={classes.total}>{totalScore}</h3><span>of 100</span></div>
            <div className={classes.motivation}>
              <h2>Great</h2>
              <p>Your performance exceed 65% of the people conducting the test here!</p>
            </div>
        </div>
    )
}

type ResultTypes = {
    totalScore: number
}

export default Result;