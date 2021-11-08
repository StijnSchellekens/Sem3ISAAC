const getData = async () => {
	const res = await fetch('http://localhost:5000/entries');
	return res.json();
};

export default {
	getData,
};
