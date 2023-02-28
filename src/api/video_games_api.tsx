import axios from 'axios';
const getVideoGamesList = async () => {
    let response = await axios.get(`https://public.connectnow.org.uk/applicant-test/`);

    return response.data;
}



export default getVideoGamesList;