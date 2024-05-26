import Container from '../templates/Container';
import './SubscriptionDate.css'

function SubscriptionDate(props){
    var month=props.passedDate.toLocaleString('default',{month:'long'});
    var date=props.passedDate.toLocaleString('default',{day:'2-digit'});
    var year=props.passedDate.getFullYear();
    return(
        <Container className="calender">
            <div>{month}</div>
            <strong>{date}</strong>
            <div>{year}</div>
        </Container>
    )
}
export default SubscriptionDate;
