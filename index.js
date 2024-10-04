module.exports = function (cb) {
	console.log(process.version);
	cb(nykkm`${process.version}`);
};
