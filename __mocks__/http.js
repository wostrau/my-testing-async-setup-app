const title = 'DELECTUS AUT AUTEM';

const fetchData = () => {
    return Promise.resolve({ title: title.toLowerCase().toString() });
};

exports.fetchData = fetchData;