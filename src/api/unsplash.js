import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 2cb1877fa2a85ef3b537d3ab84e4c2f27d6523fda78a1f35f2ee3bdf344f85d2'
  }
});
