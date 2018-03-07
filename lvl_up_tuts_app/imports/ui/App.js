import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { withApollo } from 'react-apollo';

const App = ({ loading, resolutions, client }) =>	{
	if (loading) return null;
	return (<div>
		<button onClick={() => {Meteor.logout(); client.resetStore();}}>LogOut User</button>
		<RegisterForm client={client} />
		<LoginForm client={client} />
		<ResolutionForm client={client} />
		<ul>
			{resolutions.map(resolution =>(
				<li key={resolution._id}>{resolution.name}</li>
			))}
		</ul>
	</div>
	);
};
const resolutionsQuery = gql`
	query Resolutions {
	  resolutions {
	    name
			_id
	  }
	}
`;


export default graphql(resolutionsQuery, {
	props: ({data}) => ({ ...data })
})(withApollo(App));
