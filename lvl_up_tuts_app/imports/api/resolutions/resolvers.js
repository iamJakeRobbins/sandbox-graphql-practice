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
		createResolution(obj, { name }, context){
			const resolutionId = Resolutions.insert({
				name
			})
			return Resolutions.findOne(resolutionId);
		}
	}

};
