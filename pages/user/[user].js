import { useRouter } from 'next/router'
const info = () => {
  const router = useRouter()
  console.log(router.query)
  return <div>info teste</div>
}

export default info
