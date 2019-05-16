import React, {Component} from 'react';
import { Grid, Segment } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getClientDetail } from '../dashboardActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import PageHeader from '../../../app/layout/PageHeader';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import CreditCard from '../CreditCard/CreditCard';
import ShippingDetail from '../ShippingDetail/ShippingDetail';


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
                        <PageHeader 
                            icon='list' 
                            headerMessage='Client Details' 
                            SubheaderMessage='You can see client details here.' 
                        />
                        {client && <CustomerInfo customerInfo={client} /> }
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Segment>
                            <Grid>
                                <ShippingDetail client={client} />
                                <CreditCard client={client} />
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapState,actions)(ClientDetail));