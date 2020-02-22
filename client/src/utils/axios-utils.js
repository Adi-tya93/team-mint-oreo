import axios from 'axios';

export const createChatroom = (id1, id2) => {
  return axios({
    method: 'post',
    url: '/chat/new',
    data: {
      userIds: [id1, id2],
    },
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const sendPicture = pic => {
  return axios({
    method: 'post',
    url: '/pic/new',
    data: { pic },
  })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};
