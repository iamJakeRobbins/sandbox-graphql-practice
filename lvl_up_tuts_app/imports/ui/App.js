import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import GoalForm from './GoalForm';
import { withApollo } from 'react-apollo';

const App = ({ loading, resolutions, client, user }) =>	{
	if (loading) return null;
	return (<div>
		{ user._id ? (
			<button onClick={() => {Meteor.logout(); client.resetStore();}}>LogOut User</button>
			) : (
				<div>
					<RegisterForm client={client} />
					<LoginForm client={client} />
				</div>)
		}

		<ResolutionForm client={client} />
		<ul>
			{resolutions.map(resolution =>(
				<li key={resolution._id}>
					{resolution.name}
					<GoalForm resolutionId={resolution._id} />
				</li>
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
		user {
			_id
		}
	}
`;


export default graphql(resolutionsQuery, {
	props: ({data}) => ({ ...data })
})(withApollo(App));
