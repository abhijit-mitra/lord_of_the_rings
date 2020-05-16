import {API_BASE_URL} from '../../config';

export default class ChaptersApi {
  static getChapters= async ()=> {
    const url = `${API_BASE_URL}chapter`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LehmJbQtyzC7JLiN7S2A',
    };
    return fetch(url, {
      method: 'GET',
      headers,
    });
  };
  static getChapter= async (chapterId)=>{
    const url = `${API_BASE_URL}chapter/${chapterId}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LehmJbQtyzC7JLiN7S2A',
    };
    return fetch(url, {
      method: 'GET',
      headers,
    });
  };
}
