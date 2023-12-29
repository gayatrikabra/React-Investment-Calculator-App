const formatter = new Intl.NumberFormat('en-US',{
  style : 'currency',
  currency : 'USD',
  minimumFractionDigits:2,
  maximumFractionDigits: 2

})

const DisplayTable = (props) =>
{
    return(
        <div>
            <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(YearData => (<tr key={YearData.year}>
            <td>{YearData.year}</td>
            <td>{formatter.format(YearData.savingsEndOfYear)}</td>
            <td>{formatter.format(YearData.yearlyInterest)}</td>
            <td>{formatter.format(YearData.savingsEndOfYear - props.initialInvestment - YearData.yearlyContribution * YearData.year)}</td>
            <td>{formatter.format(props.initialInvestment + YearData.yearlyContribution * YearData.year)}</td>
          </tr>))}
          
        </tbody>
      </table>
        </div>
    )
}
export default DisplayTable;