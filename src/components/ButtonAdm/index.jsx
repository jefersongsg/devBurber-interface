
import PropTypes from 'prop-types';
import {ContainerButton} from './styles';

export function ButtonAdm ({children,...props}) {
    return <ContainerButton {...props}>{children}</ContainerButton>
}


ButtonAdm.propTypes = {
    children:PropTypes.string,
};