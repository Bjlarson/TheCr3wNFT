import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header>
            <h1 style ={{color:'Grey', backgroundColor: 'Green'}}>{title}</h1>
            <h2 style ={headingStyle}>Welcome</h2>
        </header>
    )
}

Header.defaultProps = {
    title: 'NFT Museum',
}

Header.propTypes = {
    title: PropTypes.string
}

const headingStyle = {
    color:'Grey', backgroundColor: 'Green'
}
export default Header
