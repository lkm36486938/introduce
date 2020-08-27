import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainProfile from '../components/mainProfile/MainProfile'
import ProfileDetail from '../components/profileDetail/ProfileDetail'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi I'm Jade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 좌측 메인프로필 */}
      <MainProfile>

      </MainProfile>

      {/* 구분선 */}
      <div className={styles.divisionLine} />

      {/* 우측프로필 */}
      <ProfileDetail>
        
      </ProfileDetail>
    </div>
  )
}
