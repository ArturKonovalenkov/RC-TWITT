const React = require('react');
const Layout = require('../Layout');

function Edit({user, post, friends }) {
  const filteredFriends = friends.filter((el) => el.userId === user.id);
  return (
    <Layout  user={user}>    
      <div className='kabinet' >
        
    <div className='kabinet_info_edit'>
    <div className='ava_name' >
            <h2>{user.login}</h2>
            <img className='kabinet_ava' src="/images/ava.jpeg" alt="ava" />
        </div>
        <div className='info_ava'><div className='info_navigation'>
            <ul className='tabble_navigation' >
            <a className='sylka' href="kabinet">  <li className='info_kabinet'> МОЯ СТРАНИЦА</li></a>
                <a className='sylka' href="/lenta"><li className='info_allPost'>ЛЕНТА НОВОСТЕЙ</li></a>                     
                <a className='sylka' href="/friends"><li className='info_allPost'>Friends ({filteredFriends.length ? filteredFriends.length : 0})</li></a>
                <a className='sylka' href="/api"><li className='info_allPost'>Api</li></a>      
            </ul>
        </div>
        </div>
      
    </div>
    <div className='kabinet_post_edit'>
        <div className='post_newPost'>
            <div className='title_lenta'>
            <h1 className='lenta'>Редактирование</h1>
            </div>
           
            <form action="/edit" method="POST" id="editForm">
            <label htmlFor="edit-input" className="form-label">
            Измени свой пост
            </label>       
            <input
            value={post.body}
              name="body"
              type="text"
              className="form-control"
              id="edit-input"
            />
            <input
              name="id"
              value={post.id}
              type="hidden"
              className="form-control"
              id="kabinet-input"
            />
            <input
              name="userId"
              value={post.userId}
              type="hidden"
              className="form-control"
              id="kabinet-input"
            />
            <button  className="btn btn-primary" name={`${post.id}`}> ИЗМЕНИТЬ </button> 
            </form>     
        </div>
    </div>
</div>
    </Layout>
  );
}

module.exports = Edit;

