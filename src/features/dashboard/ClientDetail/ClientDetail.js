import React, {Component} from 'react';
import { Grid, Header, Item, Segment, Icon} from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getClientDetail } from '../dashboardActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';


const actions = {
    getClientDetail
}

const mapState = (state) => ({
    client : state.dashboard.currentClient
})

class ClientDetail extends Component {
    state = {
        client : {},
        loading: true
    }
    async componentDidMount(){
        const transactionId = this.props.match.params.id;
        await this.props.getClientDetail(transactionId);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            client:nextProps.client.customerInfo,
            loading: nextProps.loading
        })
    }

    render() {
        const {client, loading} = this.state;
        return (
            <React.Fragment>
                {loading && <LoadingComponent inverted={true} />}
                <Grid centered>
                    <Grid.Column width={14}>
                        <Header as='h2'>
                            <Icon name='list' />
                            <Header.Content>
                                Client Details
                                <Header.Subheader>You can see client details here.</Header.Subheader>
                            </Header.Content>
                        </Header>
                        <Segment>
                            <Item.Group>
                                <Item>
                                    <Item.Content verticalAlign='bottom'>
                                        <Header as='h1'>{client.billingFirstName} {client.billingLastName}</Header>
                                        <br/>
                                        <Header as='h3'>{client.email}</Header>
                                        <br/>
                                        <Header as='h3'>{client.billingState}</Header>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Segment>
                            <Grid columns={2}>
                                <Grid.Column width={8}>
                                    <Header icon='shipping' content='Shipping Details'/>
                                    <p>Address: <strong>{client.shippingAddress1} {client.shippingAddress2}</strong></p>
                                    <p>Shipping City <strong>{client.shippingCity}</strong></p>
                                    <p>Shipping Country: <strong>{client.shippingCountry}</strong></p>
                                    <p>Shipping Post Code: <strong>{client.shippingPostcode}</strong></p>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header icon='payment' content='Card Details'/>
                                    <p>Card number: <strong>{client.number}</strong></p>
                                    <p>Expiry Month: <strong>{client.expiryMonth}</strong></p>
                                    <p>Expiry Year: <strong>{client.expiryYear}</strong></p>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapState,actions)(ClientDetail));