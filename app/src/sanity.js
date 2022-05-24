import sanityClient from '@sanity/client';
    
export default sanityClient({
    projectId: '6m5qqr5l',
 	dataset: 'production',
 	apiVersion: '2022-04-04',
 	useCdn: true
});