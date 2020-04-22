const fetcher = url => fetch(`https://api.coderhood.dev${url}`).then(r => r.json());

export default fetcher;
