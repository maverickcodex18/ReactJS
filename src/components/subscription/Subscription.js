import './Subscription.css'
import SubscriptionDate from './SubscriptionDate';
import Container from '../templates/Container'

function Subscription(props){
    return(
        <Container className="form">
            <SubscriptionDate passedDate={props.passedDate} />
            <p className="type">{props.subscriptionType}</p>
            <div className="amountWrapper">
                <p className="amount">{props.amount}</p>
            </div>
        </Container>

    )
}
export default Subscription;
