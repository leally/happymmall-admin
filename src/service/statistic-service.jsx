import MUtil from 'util/mm.jsx';
const __mm = new MUtil();

class User {
  getHomeCount() {
    return __mm.request({
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default User;