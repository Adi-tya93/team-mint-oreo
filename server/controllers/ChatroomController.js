const mongoose = require('mongoose');
const Chatroom = require('../models/Chatroom');
const Error = require('../utils/Error');

const addUser = async (userId, chatId) => {
  try {
    const chatroom = await Chatroom.findByIdAndUpdate(chatId, { $addToSet: { users: userId } }, { new: true });
  } catch (err) {
    throw new Error(500, 'Add User To Chat', err);
  }
};

const getChatroom = async (chatId) => {
  try {
    const chatroom = await Chatroom.findById(chatId);
    return chatroom.id;
    // const { id = null } = await Chatroom.findById(chatId);
    // return id;
  } catch (err) {
    throw new Error(500, 'Get Chatroom', err);
  }
};

const createChatroom = async userIds => {
  try {
    console.log('creating chatroom');
    // const objectIdList = userIds.map(id => mongoose.Types.ObjectId(id));
    const newChat = await Chatroom.create({ users: userIds });
    console.log(newChat);
    return newChat.id;
  } catch (err) {
    throw new Error(500, 'Create Chat', err);
  }
};

const getUsersInChatroom = async (chatId) => {
  try {
    const usersInChat = await Chatroom.findById(chatId).populate({ path: 'users', model: 'User' });
    return usersInChat.users;
  } catch (err) {
    throw new Error(500, 'Get Users In Chat', err);
  }
};

const removeUserFromChat = async (userId, chatId) => {
  try {
    Chatroom.findByIdAndUpdate(chatId, { $pull: { users: userId } });
  } catch (err) {
    throw new Error(500, 'Remove User', err);
  }
};

const getLanguagesAndIdsInChatroom = async (chatId) => {
  try {
    const usersInChatroom = await getUsersInChatroom(chatId)
    const data = usersInChatroom.map(({ id, language }) => ({
        id,
        language,
    }));
    return data;
  } catch (err) {
    throw new Error(500, 'Get Language & ID from Chat', err);
  }
};

module.exports = {
  addUser,
  createChatroom,
  getChatroom,
  getUsersInChatroom,
  removeUserFromChat,
  getLanguagesAndIdsInChatroom,
};
