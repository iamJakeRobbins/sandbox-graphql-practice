import Resolutions from './resolutions';

// Resolutions.remove({})

export default{
	Query: {
		resolutions(obj, args, {userId}){
			console.log(userId)
			return Resolutions.find({userId}).fetch()
		}
	},

	Mutation: {
		createResolution(obj, { name }, { userId }){
			const resolutionId = Resolutions.insert({
				name,
				userId
			});
			return Resolutions.findOne(resolutionId);
		}
	}

};
