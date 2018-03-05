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
	}
};
