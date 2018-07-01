export default function () {

  const admin = {
    name: 'admin',
    email: 'admin@mail.com',
    passw: 'admin'
  }

  localStorage.setItem('user', JSON.stringify([admin]));

}
