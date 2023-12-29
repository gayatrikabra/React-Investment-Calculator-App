import logo from './investment-calculator-logo.png';
const AppHeader = () =>
{
    return(
        <div>
            <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
            </header>
        </div>
    )
}
export default AppHeader;

