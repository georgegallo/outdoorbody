export const applyCustomCode = externalCodeSetup => {
	// call custom code api here
	
		externalCodeSetup.cssApi.addGlobalStyle("container", {
		backgroundColor: "black"
	});
};
