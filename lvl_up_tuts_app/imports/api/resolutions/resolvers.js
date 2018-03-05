import Resolutions from './resolutions';


// Resolutions.remove({})
// Resolutions.insert({
// 	name: "test Res",
// })

export default{
	Query: {
		resolutions(){
			return Resolutions.find({}).fetch()
		}
	},

	Mutation: {
		createResolution(){
			console.log('got here');
			// const resolutionId = Resolutions.insert({
			// 	name: "test Res"
			// })
		}
	}

};
