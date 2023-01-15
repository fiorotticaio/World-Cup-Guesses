// interface HomeProps {
//   count: number;
// }

import Image from 'next/image';
import appPreviewImage from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExample from '../assets/users-avatar-example.png';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExample} alt="" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?" />
          <button type="submit">Criar meu bolão</button>
        </form>
      </main>

      <Image 
        src={appPreviewImage}
        alt="Dois celulares"
        quality={100}
      />
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count');
//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// } 