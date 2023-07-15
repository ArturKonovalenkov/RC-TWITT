const React = require('react');
const Layout = require('../Layout');

function Api({user, friends}) {
  const filteredFriends = friends.filter((friend) => friend.userId === user.id);
  return (
    <Layout  user={user}>    
    <script defer src="/js/api.js" />
      <div className='kabinet' >
    <div className='kabinet_info'>
    <div className='ava_name' >
            <h2 className='user_login'>{user.login}</h2>
            <img className='kabinet_ava' src="/images/ava.jpeg" alt="ava" />
        </div>
        <div className='info_ava'><div className='info_navigation'>
            <ul className='tabble_navigation' >
                <a className='sylka' href="kabinet">  <li className='info_kabinet'> МОЯ СТРАНИЦА</li></a>
                <a className='sylka' href="/lenta"><li className='info_allPost'>ЛЕНТА НОВОСТЕЙ</li></a> 
                <a className='sylka' href="/friends"><li className='info_allPost'>Подписки ({filteredFriends.length ? filteredFriends.length : 0})</li></a>                 
                <a className='sylka' href="/api"><li className='info_allPost'>Api</li></a> 
            </ul>
        </div>
        </div>
        
    </div>
    <div className='kabinet_post'>
    <a type="button" className="newPet btn btn-danger" >ЖМЯКНИ МЕНЯ</a>
        <div  className='post_allPost'>
</div>
</div>
</div>
    </Layout>
  );
}

module.exports = Api;

