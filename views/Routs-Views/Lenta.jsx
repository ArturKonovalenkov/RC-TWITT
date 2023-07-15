const React = require('react');
const Layout = require('../Layout');

function Kabinet({user, post,users,friends}) {
  const filteredFriends = friends.filter((el) => el.userId === user.id);
  return (
    <Layout  user={user}>    
       <script defer src="/js/deleteKabinet.js" />
       <script defer src="/js/like.dislake/like.dislike.lenta.js" />
      <div className='kabinet_two' >
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
        <div className='post_newPost'>
            <div className='title_lenta'>
            <h1 className='lenta'>Лента новостей</h1>
            </div>
        </div>
        { post.length  
        ? 
        user.status === "admin" 
        ? 
        post.map((el)=> <div key={el.id} className='post_allPost'>
        <div className="card w-75">
  <div className="card-body">
  <div className='user_login'>
    <div className='reiting'>
      <div className='like'>
        <img className='img_like' id={el.id} src="/images/icon/love.png" alt="like" />
        <div> {el.countLike}</div>
       
      </div>
      <div className='dislike'>
      <img className="img_dislike" id={el.id} src="/images/icon/dislike.png" alt="dislike" />
      <div>{el.countDisLike}</div>
      
      </div>
    </div>
    
    <div className='login_ava'>
      <button type="button" className="success btn btn-success" name={`${el.userId}`} >ПОДПИСАТЬСЯ</button>

      <p className='name_users_lenta'>{users.find((val) => val.id === el.userId).login}</p>
      <img className='img_icon_lenta' src="/images/ava.jpeg" alt="ava" />
      </div>
    </div>
    <div className='card_body'>
      <span className='block'></span>
    <p className="card-text">{el.body}</p>
    </div>
    <div className='card_btn'>
    <a href={`/editadmin/${el.id}`} type="submit" className="edit btn btn-primary" name={`${el.id}`}>ИЗМЕНИТЬ</a>
    
    <a type="button" className="delete btn btn-danger" name={`${el.id}`}>УДАЛИТЬ</a>
    </div>
  </div>
</div>
        </div>) 
        :
         post.map((el)=> <div key={el.id} className='post_allPost'>
        <div className="card w-75">
  <div className="card-body">
  <div className='user_login'>
  <div className='reiting'>
      <div className='like'>
        <img className='img_like' id={el.id} src="/images/icon/love.png" alt="like" />
        <div>{el.countLike}</div>
        
      </div>
      <div className='dislike'>
      <img className="img_dislike" id={el.id} src="/images/icon/dislike.png" alt="dislike" />
      <div>{el.countDisLike}</div>
      
      </div>
    </div>
    <div className='login_ava'>
      
    <a type="button" className="success btn btn-success" name={`${el.userId}`}>ПОДПИСАТЬСЯ</a>
      <p className='name_users_lenta'>{users.find((val) => val.id === el.userId)?.login}</p>
      <img className='img_icon_lenta' src="/images/ava.jpeg" alt="ava" />
      </div>
    </div>

    <div className='card_body'>
      <span className='block'></span>
    <p className="card-text">{el.body}</p>
    </div>
    <div className='card_btn'>
    
    </div>
  </div>
</div>
        </div>)
         : 
         <p>Постов нету</p>
        
}
    </div>
</div>
    </Layout>
  );
}

module.exports = Kabinet;

