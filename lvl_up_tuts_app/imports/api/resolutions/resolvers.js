import Resolutions from './resolutions';

// Resolutions.remove({})

export default{
	Query: {
		resolutions(){
			return Resolutions.find({}).fetch()
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
