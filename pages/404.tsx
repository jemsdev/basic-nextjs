import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000)
  }, [])
  return (
    <div className="title-not-found">
      <h1>Ooopss!</h1>
      <h1>halaman yang ada cari tidak ada</h1>
    </div>
  )
}
