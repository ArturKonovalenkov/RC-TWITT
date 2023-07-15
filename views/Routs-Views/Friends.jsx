const React = require('react');
const Layout = require('../Layout');

function Friends({user, friends, users}) {
const filteredFriends = friends.filter((friend) => friend.userId === user.id);

return (
<Layout user={user}>
<script defer src="/js/deleteFriends.js" />
<div className='kabinet_4' >
<div className='kabinet_info'>
<div className='ava_name' >
<h2 className='user_login'>{user.login}</h2>
<img className='kabinet_ava' src="/images/ava.jpeg" alt="ava" />
</div>
<div className='info_ava'>
<div className='info_navigation'>
<ul className='tabble_navigation' >
<a className='sylka' href="kabinet"><li className='info_kabinet'>МОЯ СТРАНИЦА</li></a>
<a className='sylka' href="/lenta"><li className='info_allPost'>ЛЕНТА НОВОСТЕЙ</li></a>
<a className='sylka' href="/friends"><li className='info_allPost'>Подписки ({filteredFriends.length ? filteredFriends.length : 0})</li></a>

<a className='sylka' href="/api"><li className='info_allPost'>Api</li></a>

</ul>
</div>
</div>
</div>
<div className='kabinet_post'>
<table className="table">
<thead>
<tr>

</tr>
</thead>
{filteredFriends.length > 0 ? (
  <tbody >
    {filteredFriends.map((el) => {
      const friendUser = users.find((val) => val.id === el.friendsId);
      if (!friendUser) return null;
      return (
        <tr className='class="tabble_delete table table-dark table-striped"' key={el.id}>
          <td className='tabble_name'>{friendUser.login}</td>

          <td className='tabble_buuton'>
            <a type="button" className="deleteFriends btn btn-danger" name={`${el.id}`}>ОТПИСАТЬСЯ</a>
          </td>
        </tr>
      );
    })}
  </tbody>
) : (
  <tbody>
    <tr>
      <td className="table-dark" colSpan="3">Forever alone</td>
    </tr>
  </tbody>
)}
</table>
</div>
</div>
</Layout>
);
}

module.exports = Friends;