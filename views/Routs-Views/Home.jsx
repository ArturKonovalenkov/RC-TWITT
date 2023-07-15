const React = require('react');
const Layout = require('../Layout');

function Home({user}) {
  return (
    <Layout  user={user}>
      
    
      <div className='img_home_rc'>
  <img className='img_home' src="/images/rc-home.png" alt="imgHome" />
  <img className='img_home_devil' src="/images/devil.png" alt="imgHome" />
</div>
    </Layout>
  );
}

module.exports = Home;
